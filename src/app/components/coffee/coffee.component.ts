import { Component, computed, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { ALL_STATIONS, Tirumph } from '../cards.data';

type StationId = 'rehab' | 'madinty' | 'tirumph' | 'tagamo35' | 'AUC' | 'forest' | 'Master' | 'Academy' | 'Loutas'
  | 'Sadat1' | 'Sadat2' | 'AirHosbital' | 'Rehab2' | 'Obour2' | 'October2' | 'October1' | 'October3' | 'October6'
  | 'October7' | 'Zayed1' | 'Zayed2' | 'Shorouk3' | 'Giza3' | 'Cairo3' | 'Cairo12' | 'Cairo17' | 'Cairo35'
  |'Qalyub3' | 'Qalyub4' | 'Qalyub5' | 'Qalyub6' | 'Qalyub7';

@Component({
  selector: 'app-coffee',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './coffee.component.html',
  styleUrl: './coffee.component.css',
  animations: [
    trigger('fadeUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(15px)' }),
        animate('400ms ease-in')
      ])
    ])
  ]
})
export class CoffeeComponent {
  private stationId = signal<StationId>('rehab');

  station = computed(() => ALL_STATIONS.find(s => s.id === this.stationId()) ?? null);
  coffee = computed(() => this.station()?.coffee ?? null);

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
    if (id === 'Sadat1') return '/app-sadat1'; // عدّلها حسب route بتاع Sadat1
    if (id === 'Sadat2') return '/app-sadat2'; // عدّلها حسب route بتاع Sadat2
    if (id === 'AirHosbital') return '/app-air-hospital'; // عدّلها حسب route بتاع AirHosbital
    if (id === 'Rehab2') return '/app-rehab2';  // عدّلها حسب route بتاع Rehab2
    if (id === 'Obour2') return '/app-obour2';  // عدّلها حسب route بتاع Rehab2
    if (id === 'October2') return '/app-october2'; // عدّلها حسب route بتاع October2
    if (id === 'October1') return '/app-october1'; // عدّلها حسب route بتاع October1
    if (id === 'October3') return '/app-october3'; // عدّلها حسب route بتاع October3
    if (id === 'October6') return '/app-october6'; // عدّلها حسب route بتاع October3
    if (id === 'October7') return '/app-october7'; // عدّلها حسب route بتاع October7
    if (id === 'Zayed1') return '/app-zayed1'; // عدّلها حسب route بتاع Zayed1
    if (id === 'Zayed2') return '/app-zayed2'; // عدّلها حسب route بتاع Zayed2
    if (id === 'Shorouk3') return '/app-shorouk3'; // عدّلها حسب route بتاع Zayed2
    if (id === 'Giza3') return '/app-giza3'; // عدّلها حسب route بتاع Giza3
    if (id === 'Cairo3') return '/app-cairo3'; // عدّلها حسب route بتاع Cairo3
    if (id === 'Cairo12') return '/app-cairo12';  // عدّلها حسب route بتاع Cairo12
    if (id === 'Cairo17') return '/app-cairo17';  // عدّلها حسب route بتاع Cairo17
    if (id === 'Cairo35') return '/app-cairo35';   // عدّلها حسب route بتاع Cairo35
    if (id === 'Qalyub4') return '/app-qalyub4';   // عدّلها حسب route بتاع Qalyub4
    if (id === 'Qalyub5') return '/app-qalyub5';   // عدّلها حسب route بتاع Qalyub5
    if (id === 'Qalyub6') return '/app-qalyub6';   // عدّلها حسب route بتاع Qalyub6
    if (id === 'Qalyub7') return '/app-qalyub7';   // عدّلها حسب route بتاع Qalyub7

    return '/details';
  });

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(pm => {
      const id = pm.get('stationId');
      if (id === 'rehab' || id === 'madinty' || id === 'tirumph' || id === 'tagamo35' || id === 'AUC' || id === 'forest'
        || id === 'Master' || id === 'Academy' || id === 'Loutas' || id === 'Sadat1' || id === 'Sadat2' || id === 'AirHosbital' || id === 'Rehab2'
        || id === 'Obour2' || id === 'October2' || id === 'October1' || id === 'October3'
        || id === 'October6' || id === 'October7' || id === 'Zayed1' || id === 'Zayed2' || id === 'Shorouk3'
        || id === 'Giza3' || id === 'Cairo3' || id === 'Cairo12' || id === 'Cairo17' || id === 'Cairo35' || id === 'Qalyub4' || id === 'Qalyub5' || id === 'Qalyub6' || id === 'Qalyub7'
      ) {
        this.stationId.set(id);
      }
    });
  }
}