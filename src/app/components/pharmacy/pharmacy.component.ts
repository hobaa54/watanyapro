import { Component, computed, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { ALL_STATIONS } from '../cards.data'; // عدّل المسار لو مختلف

type StationId = 'rehab' | 'madinty' | 'tirumph' | 'tagamo35' | 'AUC' | 'forest' | 'Sadat1' | 'October2'
  | 'October3' | 'October1' | 'October6' | 'Zayed1' | 'Zayed2';


@Component({
  selector: 'app-pharmacy',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pharmacy.component.html',
  styleUrl: './pharmacy.component.css',
  animations: [
    trigger('fadeUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(15px)' }),
        animate('400ms ease-in')
      ])
    ])
  ]
})
export class PharmacyComponent {
  private stationId = signal<StationId>('rehab');

  station = computed(() => ALL_STATIONS.find(s => s.id === this.stationId()) ?? null);

  // متغير واحد للداتا (زي ما بتحب)
  pharmacyData = computed(() => this.station()?.pharmacy);

  backLink = computed(() => {
    const id = this.stationId();
    if (id === 'rehab') return '/app-rehab-details';
    if (id === 'madinty') return '/app-madinty';
    if (id === 'tirumph') return '/app-tirumph-station'; // عدّلها حسب route بتاع tirumph
    if (id === 'tagamo35') return '/app-tagamo3-5'; // عدّلها حسب route بتاع tirumph
    if (id === 'AUC') return '/app-auc-st'; // عدّلها حسب route بتاع AUC
    if (id === 'forest') return '/app-forest'; // عدّلها حسب route بتاع forest
    if (id === 'Sadat1') return '/app-sadat1'; // عدّلها حسب route بتاع forest
    if (id === 'October2') return '/app-october2'; // عدّلها حسب route بتاع October2
    if (id === 'October3') return '/app-october3'; // عدّلها حسب route بتاع October2
    if (id === 'October1') return '/app-october1'; // عدّلها حسب route بتاع October2
    if (id === 'October6') return '/app-october6'; // عدّلها حسب route بتاع October2
    if (id === 'Zayed1') return '/app-zayed1'; // عدّلها حسب route بتاع Zayed1
    if (id === 'Zayed2') return '/app-zayed2'; // عدّلها حسب route بتاع Zayed2
    return '/details';
  });



  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(pm => {
      const id = pm.get('stationId');
      if (id === 'rehab' || id === 'madinty' || id === 'tirumph' || id === 'tagamo35' || id === 'AUC'
        || id === 'forest' || id === 'Sadat1' || id === 'October2' || id === 'October3' || id === 'October1'
        || id === 'October6' || id === 'Zayed1' || id === 'Zayed2'
      ) this.stationId.set(id);
    });
  }
}
