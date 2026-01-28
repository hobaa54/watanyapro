import { Component, computed, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { Alamin2, ALL_STATIONS } from '../cards.data';
type StationId = 'rehab' | 'madinty' | 'tirumph' | 'tagamo35' | 'AUC' | 'forest' | 'Loutas' | 'Sadat1' |
  'Obour2' | 'October2' | 'October1' | 'October6' | 'October7' |  'Alamin2';

@Component({
  selector: 'app-vap',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './vap.component.html',
  styleUrl: './vap.component.css',
  animations: [
    trigger('fadeUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(15px)' }),
        animate('400ms ease-in')
      ])
    ])
  ]
})
export class VapComponent {
  private stationId = signal('rehab');

  station = computed(() => ALL_STATIONS.find(s => s.id === this.stationId()) ?? null);

  // ✅ متغير واحد للداتا
  vapData = computed(() => this.station()?.vap);

  backLink = computed(() => {
    const id = this.stationId();
    if (id === 'rehab') return '/app-rehab-details';
    if (id === 'madinty') return '/app-madinty';
    if (id === 'tirumph') return '/app-tirumph-station'; // عدّلها حسب route بتاع tirumph
    if (id === 'tagamo35') return '/app-tagamo3-5'; // عدّلها حسب  route بتاع tagamo35
    if (id === 'AUC') return '/app-auc-st';   // عدّلها حسب route بتاع AUC
    if (id === 'forest') return '/app-forest'; // عدّلها حسب route بتاع forest
    if (id === 'Loutas') return '/app-loutas'; // عدّلها حسب route بتاع Loutas
    if (id === 'Sadat1') return '/app-sadat1'; // عدّلها حسب route بتاع Sadat1
    if (id === 'Obour2') return '/app-obour2'; // عدّلها حسب route بتاع Obour
    if (id === 'October2') return '/app-october2'; // عدّلها حسب route بتاع October2
    if (id === 'October1') return '/app-october1'; // عدّلها حسب route بتاع October2
    if (id === 'October6') return '/app-october6'; // عدّلها حسب route بتاع October2
    if (id === 'October7') return '/app-october7'; // عدّلها حسب route بتاع October2
    if (id === 'Alamin2') return '/app-alamin2'; // عدّلها حسب route بتاع Alamin2
    return '/details';
  });

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(pm => {
      const id = pm.get('stationId');
      if (id) this.stationId.set(id);
    });
  }
}
