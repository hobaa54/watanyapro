import { Component, computed, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { ALL_STATIONS, Loutas } from '../cards.data'; // عدّل المسار لو مختلف

type StationId = 'rehab' | 'madinty' | 'tirumph' | 'tagamo35' | 'AUC' | 'forest' | 'Master' | 'Academy' | 'Loutas'
  | 'Sadat1' | 'Obour1' | 'October2' | 'October3' | 'October4' | 'October5';

@Component({
  selector: 'app-atm',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './atm.component.html',
  styleUrl: './atm.component.css',
  animations: [
    trigger('fadeUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(15px)' }),
        animate('400ms ease-in')
      ])
    ])
  ]
})
export class AtmComponent {
  private stationId = signal<StationId>('rehab');
  station = computed(() => ALL_STATIONS.find(s => s.id === this.stationId()) ?? null);
  // متغير واحد للداتا
  atmData = computed(() => this.station()?.atm);

  backLink = computed(() => {
    const id = this.stationId();
    if (id === 'rehab') return '/app-rehab-details';
    if (id === 'madinty') return '/app-madinty';
    if (id === 'tirumph') return '/app-tirumph-station'; // عدّلها حسب route بتاع tirumph
    if (id === 'tagamo35') return '/app-tagamo3-5'; // عدّلها حسب route بتاع tirumph
    if (id === 'AUC') return '/app-auc-st'; // عدّلها حسب route بتاع AUC
    if (id === 'forest') return '/app-forest'; // عدّلها حسب route بتاع forest
    if (id === 'Master') return '/app-master1'; // عدّلها حسب route بتاع Master
    if (id === 'Academy') return '/app-academy'; // عدّلها حسب route بتاع Academy                                                              
    if (id === 'Loutas') return '/app-loutas'; // عدّلها حسب route بتاع Loutas
    if (id === 'Sadat1') return '/app-sadat1'; // عدّلها حسب route بتاع Loutas
    if (id === 'Obour1') return '/app-obour1'; // عدّلها حسب route بتاع Obour1
    if (id === 'October2') return '/app-october2'; // عدّلها حسب route بتاع October2
    if (id === 'October3') return '/app-october3'; // عدّلها حسب route بتاع October3
    if (id === 'October4') return '/app-october4'; // عدّلها حسب route بتاع October4
    if (id === 'October5') return '/app-october5'; // عدّلها حسب route بتاع October5
    return '/details';
  });
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(pm => {
      const id = pm.get('stationId');
      if (id === 'rehab' || id === 'madinty' || id === 'tirumph' || id === 'tagamo35' || id === 'AUC' || id === 'forest'
        || id === 'Master' || id === 'Academy' || id === 'Loutas' || id === 'Sadat1'
        || id === 'Obour1' || id === 'October2' || id === 'October3' || id === 'October4'
        || id === 'October5'
      ) this.stationId.set(id);
    });
  }
}
