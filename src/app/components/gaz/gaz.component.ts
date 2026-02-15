import { Component, computed, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { ALL_STATIONS } from '../cards.data';

type StationId = 'rehab' | 'madinty' | 'tirumph' | 'tagamo35' | 'AUC' | 'forest' | 'Master' | 'Master2' |
  'Academy' | 'Loutas' | 'Sadat1' | 'Sadat2' | 'AirHosbital' | 'Rehab2' | 'Obour1' | 'Obour2' | 'October2'
  | 'October3' | 'October1' | 'October4' | 'October5' | 'October6' | 'October7' | 'Zayed1' | 'Zayed2' | 'Shorouk1'
  | 'Shorouk2' | 'Shorouk3' | 'Shorouk4' | 'Alamin1' | 'Alamin2' | 'Alamin3' | 'Suez1' | 'Suez2' | 'Suez3' | 'Suez4'
  | 'Giza1' | 'Giza2' | 'Giza3' | 'GizaC1' | 'GizaC2' | 'GizaC3' | 'Torism1' | 'Torism2' | 'RedSea'
  | 'Cairo1' | 'Cairo2' | 'Cairo3' | 'Cairo4' | 'Cairo5' | 'Cairo6';

@Component({
  selector: 'app-gaz',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './gaz.component.html',
  styleUrl: './gaz.component.css',
  animations: [
    trigger('fadeUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(15px)' }),
        animate('400ms ease-in')
      ])
    ])
  ]
})
export class GazComponent {

  private stationId = signal<StationId>('rehab');
  station = computed(() => ALL_STATIONS.find(s => s.id === this.stationId()) ?? null);
  images = computed(() => this.station()?.gaz?.images ?? []);
  fuels = computed(() => this.station()?.gaz?.fuels ?? []);

  backLink = computed(() => {
    const id = this.stationId();
    if (id === 'rehab') return '/app-rehab-details';
    if (id === 'madinty') return '/app-madinty';
    if (id === 'tirumph') return '/app-tirumph-station'; // عدّلها حسب route بتاع tirumph
    if (id === 'tagamo35') return '/app-tagamo3-5'; // عدّلها حسب route بتاع tirumph
    if (id === 'AUC') return '/app-auc-st'; // عدّلها حسب route بتاع AUC
    if (id === 'forest') return '/app-forest'; // عدّلها حسب route بتاع forest
    if (id === 'Master') return '/app-master1'; // عدّلها حسب route بتاع Master
    if (id === 'Master2') return '/app-master2'; // عدّلها حسب route بتاع Master2
    if (id === 'Academy') return '/app-academy'; // عدّلها حسب route بتاع Academy
    if (id === 'Loutas') return '/app-loutas'; // عدّلها حسب route بتاع Loutas
    if (id === 'Sadat1') return '/app-sadat1'; // عدّلها حسب route بتاع Loutas
    if (id === 'Sadat2') return '/app-sadat2'; // عدّلها حسب route بتاع Sadat2
    if (id === 'AirHosbital') return '/app-air-hospital'; // عدّلها حسب route بتاع AirHosbital
    if (id === 'Rehab2') return '/app-rehab2'; // عدّلها حسب route بتاع Rehab2
    if (id === 'Obour1') return '/app-obour1'; // عدّلها حسب route بتاع Obour1
    if (id === 'Obour2') return '/app-obour2'; // عدّلها حسب route بتاع Obour2
    if (id === 'October2') return '/app-october2'; // عدّلها حسب route بتاع October2
    if (id === 'October3') return '/app-october3'; // عدّلها حسب route بتاع October3
    if (id === 'October1') return '/app-october1'; // عدّلها حسب route بتاع October1
    if (id === 'October4') return '/app-october4'; // عدّلها حسب route بتاع October4
    if (id === 'October5') return '/app-october5'; // عدّلها حسب route بتاع October5
    if (id === 'October6') return '/app-october6'; // عدّلها حسب route بتاع October5
    if (id === 'October7') return '/app-october7'; // عدّلها حسب route بتاع October5
    if (id === 'Zayed1') return '/app-zayed1'; // عدّلها حسب route بتاع Zayed1
    if (id === 'Zayed2') return '/app-zayed2'; // عدّلها حسب route بتاع Zayed2
    if (id === 'Shorouk1') return '/app-shorouk1'; // عدّلها حسب route بتاع Zayed2
    if (id === 'Shorouk2') return '/app-shorouk2'; // عدّلها حسب route بتاع Zayed2
    if (id === 'Shorouk3') return '/app-shorouk3'; // عدّلها حسب route بتاع Zayed2
    if (id === 'Shorouk4') return '/app-shorouk4'; // عدّلها حسب route بتاع Zayed2
    if (id === 'Alamin1') return '/app-alamin1'; // عدّلها حسب route بتاع Alamin1
    if (id === 'Alamin2') return '/app-alamin2'; // عدّلها حسب route بتاع Alamin2
    if (id === 'Alamin3') return '/app-alamin3'; // عدّلها حسب route بتاع Alamin3
    if (id === 'Suez1') return '/app-suez1'; // عدّلها حسب route بتاع Suez1
    if (id === 'Suez2') return '/app-suez2'; // عدّلها حسب route بتاع Suez2
    if (id === 'Suez3') return '/app-suez3'; // عدّلها حسب route بتاع Suez3
    if (id === 'Suez4') return '/app-suez4'; // عدّلها حسب route بتاع Suez4
    if (id === 'Giza1') return '/app-giza1'; // عدّلها حسب route بتاع Giza1
    if (id === 'Giza2') return '/app-giza2'; // عدّلها حسب route بتاع Giza2
    if (id === 'Giza3') return '/app-giza3'; // عدّلها حسب route بتاع Giza3
    if (id === 'GizaC1') return '/app-giza-c1'; // عدّلها حسب route بتاع GizaC1
    if (id === 'GizaC2') return '/app-giza-c2'; // عدّلها حسب route بتاع GizaC2
    if (id === 'GizaC3') return '/app-giza-c3'; // عدّلها حسب route بتاع GizaC3
    if (id === 'Torism1') return '/app-torism1'; // عدّلها حسب route بتاع Torism1
    if (id === 'Torism2') return '/app-torism2'; // عدّلها حسب route بتاع Torism2
    if (id === 'RedSea') return '/app-red-sea'; // عدّلها حسب route بتاع RedSea
    if (id === 'Cairo1') return '/app-cairo1'; // عدّلها حسب route بتاع Cairo1
    if (id === 'Cairo2') return '/app-cairo2'; // عدّلها حسب route بتاع Cairo2
    if (id === 'Cairo3') return '/app-cairo3'; // عدّلها حسب route بتاع Cairo3
    if (id === 'Cairo4') return '/app-cairo4'; // عدّلها حسب route بتاع Cairo4
    if (id === 'Cairo5') return '/app-cairo5'; // عدّلها حسب route بتاع Cairo5
    if (id === 'Cairo6') return '/app-cairo6'; // عدّلها حسب route بتاع Cairo6
    return '/details';
  });


  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(pm => {
      const id = pm.get('stationId');
      if (id === 'rehab' || id === 'madinty' || id === 'tirumph' || id === 'tagamo35' || id === 'AUC'
        || id === 'forest' || id === 'Master' || id === 'Master2' || id === 'Academy' || id === 'Loutas' || id === 'Sadat1'
        || id === 'Sadat2' || id === 'AirHosbital' || id === 'Rehab2' || id === 'Obour1' || id === 'Obour2'
        || id === 'October2' || id === 'October3' || id === 'October1' || id === 'October4' || id === 'October5'
        || id === 'October6' || id === 'October7' || id === 'Zayed1' || id === 'Zayed2' || id === 'Shorouk1'
        || id === 'Shorouk2' || id === 'Shorouk3' || id === 'Shorouk4' || id === 'Alamin1' || id === 'Alamin2' || id === 'Alamin3'
        || id === 'Suez1' || id === 'Suez2' || id === 'Suez3' || id === 'Suez4' || id === 'Giza1' || id === 'Giza2' || id === 'Giza3'
        || id === 'GizaC1' || id === 'GizaC2' || id === 'GizaC3' || id === 'Torism1' || id === 'Torism2' || id === 'RedSea'
        || id === 'Cairo1' || id === 'Cairo2' || id === 'Cairo3' || id === 'Cairo4' || id === 'Cairo5' || id === 'Cairo6'
      ) {
        this.stationId.set(id);
      }
    });
  }
}
