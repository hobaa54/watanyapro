import { Component, computed, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { ALL_STATIONS } from '../cards.data'; // عدّل المسار حسب مشروعك

type StationId = 'rehab' | 'madinty' |'tirumph'|'tagamo35' | 'AUC' | 'forest' |'Zayed2';

@Component({
  selector: 'app-flowers',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './flowers.component.html',
  styleUrl: './flowers.component.css',
  animations: [
    trigger('fadeUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(15px)' }),
        animate('400ms ease-in')
      ])
    ])
  ]
})
export class FlowersComponent {
  private stationId = signal<StationId>('rehab');

  station = computed(() => ALL_STATIONS.find(s => s.id === this.stationId()) ?? null);

  // متغير واحد بس للداتا (زي ما بتحب)
  flowersData = computed(() => this.station()?.flowers);

  backLink = computed(() => {
    const id = this.stationId();
    if (id === 'rehab') return '/app-rehab-details';
    if (id === 'madinty') return '/app-madinty';
    if (id === 'tirumph') return '/app-tirumph-station'; // عدّلها حسب route بتاع tirumph
    if (id === 'tagamo35') return '/app-tagamo3-5'; // عدّلها حسب route بتاع tirumph
    if (id === 'AUC') return '/app-auc-st'; // عدّلها حسب route بتاع AUC
    if (id === 'forest') return '/app-forest'; // عدّلها حسب route بتاع forest
    if (id === 'Zayed2') return '/app-zayed2'; // عدّلها حسب route بتاع Zayed2
    return '/details';
  });

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(pm => {
      const id = pm.get('stationId');
      if (id === 'rehab' || id === 'madinty' || id === 'tagamo35' || id === 'tirumph' || id === 'AUC' 
      || id === 'forest' || id === 'Zayed2'
      ) this.stationId.set(id);
    });
  }
}
