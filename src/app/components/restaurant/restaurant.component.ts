import { Component, computed, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { ALL_STATIONS } from '../cards.data'; // عدّل المسار حسب مشروعك

type StationId = 'rehab' | 'madinty' | 'tirumph' | 'tagamo35' | 'AUC' | 'forest' | 'Master' | 'Master2' | 'Loutas'
  | 'Sadat1' | 'Sadat2' | 'AirHosbital' | 'Rehab2' | 'Obour1' | 'Obour2' | 'October2' | 'October3' | 'October1'
  | 'October6' | 'October7' | 'Zayed1' | 'Zayed2' | 'Shorouk1' | 'Shorouk2' | 'Alamin2' | 'Alamin3' | 'Giza1' | 'Giza2' | 'Giza3'
  | 'Torism2' | 'Cairo4' | 'Cairo5' | 'Cairo6' | 'Cairo7' | 'Cairo8' | 'Cairo9' | 'Cairo10' | 'Cairo11' | 'Cairo12'
  | 'Cairo16' | 'Cairo17' | 'Cairo18' | 'Cairo19' | 'Cairo23' | 'Cairo28' | 'Cairo29' | 'Cairo30' | 'Cairo34' | 'Cairo35'
  | 'Qalyub3' | 'Qalyub4' | 'Qalyub5' | 'Qalyub6' | 'Qalyub7' | 'Mnofya1' | 'Mnofya2'
  ;


@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css',
  animations: [
    trigger('fadeUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(15px)' }),
        animate('400ms ease-in')
      ])
    ])
  ]
})
export class RestaurantComponent {
  private stationId = signal<StationId>('rehab');

  station = computed(() => ALL_STATIONS.find(s => s.id === this.stationId()) ?? null);

  restaurant = computed(() => this.station()?.restaurant ?? null);

  // لو لسه عندك rehab/madinty components
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
    if (id === 'Loutas') return '/app-loutas'; // عدّلها حسب route بتاع Loutas
    if (id === 'Sadat1') return '/app-sadat1'; // عدّلها حسب route بتاع Sadat1
    if (id === 'Sadat2') return '/app-sadat2'; // عدّلها حسب route بتاع Sadat2
    if (id === 'AirHosbital') return '/app-air-hosbital'; // عدّلها حسب route بتاع AirHosbital
    if (id === 'Rehab2') return '/app-rehab2'; // عدّلها حسب route بتاع Rehab2
    if (id === 'Obour1') return '/app-obour1'; // عدّلها حسب route بتاع Obour1
    if (id === 'Obour2') return '/app-obour2'; // عدّلها حسب route بتاع Obour2
    if (id === 'October2') return '/app-october2'; // عدّلها حسب route بتاع October2
    if (id === 'October3') return '/app-october3'; // عدّلها حسب route بتاع October3
    if (id === 'October1') return '/app-october1'; // عدّلها حسب route بتاع October1
    if (id === 'October6') return '/app-october6'; // عدّلها حسب route بتاع October1
    if (id === 'October7') return '/app-october7'; // عدّلها حسب route بتاع October1
    if (id === 'Zayed1') return '/app-zayed1'; // عدّلها حسب route بتاع Zayed1
    if (id === 'Zayed2') return '/app-zayed2'; // عدّلها حسب route بتاع Zayed2
    if (id === 'Shorouk1') return '/app-shorouk1'; // عدّلها حسب route بتاع Zayed2
    if (id === 'Shorouk2') return '/app-shorouk2'; // عدّلها حسب route بتاع Zayed2
    if (id === 'Alamin2') return '/app-alamin2'; // عدّلها حسب route بتاع Zayed2
    if (id === 'Alamin3') return '/app-alamin3'; // عدّلها حسب route بتاع Alamin3
    if (id === 'Giza1') return '/app-giza1'; // عدّلها حسب route بتاع Giza1
    if (id === 'Giza2') return '/app-giza2'; // عدّلها حسب route بتاع Giza2
    if (id === 'Giza3') return '/app-giza3'; // عدّلها حسب route بتاع Giza3
    if (id === 'Cairo4') return '/app-cairo4'; // عدّلها حسب route بتاع Cairo4
    if (id === 'Cairo5') return '/app-cairo5'; // عدّلها حسب route بتاع Cairo5
    if (id === 'Cairo6') return '/app-cairo6'; // عدّلها حسب route بتاع Cairo6
    if (id === 'Cairo7') return '/app-cairo7'; // عدّلها حسب route بتاع Cairo7
    if (id === 'Cairo8') return '/app-cairo8'; // عدّلها حسب route بتاع Cairo8
    if (id === 'Cairo9') return '/app-cairo9'; // عدّلها حسب route بتاع Cairo9
    if (id === 'Cairo10') return '/app-cairo10'; // عدّلها حسب route بتاع Cairo10
    if (id === 'Cairo11') return '/app-cairo11'; // عدّلها حسب route بتاع Cairo11
    if (id === 'Cairo12') return '/app-cairo12'; // عدّلها حسب route بتاع Cairo12
    if (id === 'Torism2') return '/app-torism2'; // عدّلها حسب route بتاع Torism2
    if (id === 'Cairo17') return '/app-cairo17'; // عدّلها حسب route بتاع Cairo17
    if (id === 'Cairo18') return '/app-cairo18'; // عدّلها حسب route بتاع Cairo18
    if (id === 'Cairo19') return '/app-cairo19'; // عدّلها حسب route بتاع Cairo19
    if (id === 'Cairo23') return '/app-cairo23';  // عدّلها حسب route بتاع Cairo23
    if (id === 'Cairo28') return '/app-cairo28';  // عدّلها حسب route بتاع Cairo23
    if (id === 'Cairo29') return '/app-cairo29';  // عدّلها حسب route بتاع Cairo29
    if (id === 'Cairo30') return '/app-cairo30';  // عدّلها حسب route بتاع Cairo30
    if (id === 'Cairo34') return '/app-cairo34';  // عدّلها حسب route بتاع Cairo34
    if (id === 'Cairo35') return '/app-cairo35';   // عدّلها حسب route بتاع Cairo35
    if (id === 'Qalyub3') return '/app-qalyub3';    // عدّلها حسب route بتاع Qalyub3
    if (id === 'Qalyub4') return '/app-qalyub4';    // عدّلها حسب route بتاع Qalyub4
    if (id === 'Qalyub5') return '/app-qalyub5';    // عدّلها حسب route بتاع Qalyub5
    if (id === 'Qalyub6') return '/app-qalyub6';    // عدّلها حسب route بتاع Qalyub6
    if (id === 'Qalyub7') return '/app-qalyub7';    // عدّلها حسب route بتاع Qalyub7
    if (id === 'Mnofya1') return '/app-mnofya1';    // عدّلها حسب route بتاع Mnofya1
    if (id === 'Mnofya2') return '/app-mnofya2';    // عدّلها حسب route بتاع Mnofya2

    return '/details';
  });


  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(pm => {
      const id = pm.get('stationId');
      if (id === 'rehab' || id === 'madinty' || id === 'tirumph' || id === 'tagamo35' || id === 'AUC'
        || id === 'forest' || id === 'Master' || id === 'Master2' || id === 'Loutas' || id === 'Sadat1' || id === 'Sadat2' || id === 'AirHosbital'
        || id === 'Rehab2' || id === 'Obour1' || id === 'Obour2' || id === 'October2' || id === 'October3'
        || id === 'October1' || id === 'October6' || id === 'October7' || id === 'Zayed1' ||
        id === 'Zayed2' || id === 'Shorouk1' || id === 'Shorouk2' || id === 'Alamin2' || id === 'Alamin3' || id === 'Giza1' || id === 'Giza2' || id === 'Giza3'
        || id === 'Torism2' || id === 'Cairo4' || id === 'Cairo5' || id === 'Cairo6' || id === 'Cairo7'
        || id === 'Cairo8' || id === 'Cairo9' || id === 'Cairo10' || id === 'Cairo11' || id === 'Cairo12' || id === 'Cairo16'
        || id === 'Cairo17' || id === 'Cairo18' || id === 'Cairo19' || id === 'Cairo23' || id === 'Cairo28' || id === 'Cairo29'
        || id === 'Cairo30' || id === 'Cairo34' || id === 'Cairo35' || id === 'Qalyub3' || id === 'Qalyub4' || id === 'Qalyub5' || id === 'Qalyub6' || id === 'Qalyub7'
        || id === 'Mnofya1' || id === 'Mnofya2'
      ) this.stationId.set(id);
    });
  }
}
