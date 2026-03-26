import { Component, computed, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { ALL_STATIONS, Loutas } from '../cards.data'; // عدّل المسار لو مختلف

type StationId = 'rehab' | 'madinty' | 'tirumph' | 'tagamo35' | 'AUC' | 'forest' | 'Master' | 'Academy' | 'Loutas'
  | 'Sadat1' | 'Obour1' | 'October2' | 'October3' | 'October4' | 'October5' | 'October6' | 'Zayed1' | 'Zayed2' | 'Alamin3'
  | 'Cairo1' | 'Cairo2' | 'Cairo3' | 'Cairo4' | 'Cairo5' | 'Cairo6' | 'Cairo7' | 'Cairo8' | 'Cairo9' | 'Cairo10'
  | 'Cairo11' | 'Cairo12' |'Cairo14' | 'Cairo17' |'Cairo20' | 'Cairo30' | 'Cairo34' | 'Qalyub1' | 'Qalyub2' | 'Qalyub3';

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
    if (id === 'October6') return '/app-october6'; // عدّلها حسب route بتاع October5
    if (id === 'Zayed1') return '/app-zayed1'; // عدّلها حسب route بتاع Zayed1
    if (id === 'Zayed2') return '/app-zayed2'; // عدّلها حسب route بتاع Zayed2
    if (id === 'Alamin3') return '/app-alamin3'; // عدّلها حسب route بتاع Alamin3
    if (id === 'Cairo1') return '/app-cairo1'; // عدّلها حسب route بتاع Cairo1
    if (id === 'Cairo2') return '/app-cairo2'; // عدّلها حسب route بتاع Cairo2
    if (id === 'Cairo3') return '/app-cairo3'; // عدّلها حسب route بتاع Cairo3
    if (id === 'Cairo4') return '/app-cairo4'; // عدّلها حسب route بتاع Cairo4
    if (id === 'Cairo5') return '/app-cairo5'; // عدّلها حسب route بتاع Cairo5
    if (id === 'Cairo6') return '/app-cairo6'; // عدّلها حسب route بتاع Cairo6
    if (id === 'Cairo7') return '/app-cairo7'; // عدّلها حسب route بتاع Cairo7
    if (id === 'Cairo8') return '/app-cairo8'; // عدّلها حسب route بتاع Cairo8
    if (id === 'Cairo9') return '/app-cairo9'; // عدّلها حسب route بتاع Cairo9
    if (id === 'Cairo10') return '/app-cairo10'; // عدّلها حسب route بتاع Cairo10
    if (id === 'Cairo11') return '/app-cairo11'; // عدّلها حسب route بتاع Cairo11
    if (id === 'Cairo12') return '/app-cairo12'; // عدّلها حسب route بتاع Cairo12
    if (id === 'Cairo14') return '/app-cairo14'; // عدّلها حسب route بتاع Cairo14
    if (id === 'Cairo17') return '/app-cairo17'; // عدّلها حسب route بتاع Cairo17
    if (id === 'Cairo20') return '/app-cairo20'; // عدّلها حسب route بتاع Cairo20
    if (id === 'Cairo30') return '/app-cairo30'; // عدّلها حسب route بتاع Cairo20
    if (id === 'Cairo34') return '/app-cairo34'; // عدّلها حسب route بتاع Cairo34
    if (id === 'Qalyub1') return '/app-qalyub1'; // عدّلها حسب route بتاع Qalyub1
    if (id === 'Qalyub2') return '/app-qalyub2'; // عدّلها حسب route بتاع Qalyub2
    if (id === 'Qalyub3') return '/app-qalyub3'; // عدّلها حسب route بتاع Qalyub3
    return '/details';
  });
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(pm => {
      const id = pm.get('stationId');
      if (id === 'rehab' || id === 'madinty' || id === 'tirumph' || id === 'tagamo35' || id === 'AUC' || id === 'forest'
        || id === 'Master' || id === 'Academy' || id === 'Loutas' || id === 'Sadat1'
        || id === 'Obour1' || id === 'October2' || id === 'October3' || id === 'October4'
        || id === 'Cairo1' || id === 'Cairo2' || id === 'Cairo3' || id === 'Cairo4' || id === 'Cairo5' || id === 'Cairo6' 
        || id === 'Cairo7' || id === 'Cairo8' || id === 'Cairo9' || id === 'Cairo10' 
        || id === 'Cairo11' || id === 'Cairo12' || id === 'Cairo14' || id === 'Cairo17' || id === 'Cairo20' || id === 'Cairo30'
        || id==='Cairo34' || id === 'Qalyub1' || id === 'Qalyub2' || id === 'Qalyub3'

        
      ) this.stationId.set(id);
    });
  }
}
