import { Component, computed, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { ALL_STATIONS } from '../cards.data'; // عدّل المسار حسب مشروعك

type StationId = 'rehab' | 'madinty' | 'tirumph' | 'tagamo35' | 'AUC' | 'forest' | 'Master' | 'Master2' | 'Loutas'
  | 'Sadat1' | 'Sadat2' | 'AirHosbital' | 'Rehab2' | 'Obour1' | 'Obour2' | 'October2' | 'October3'| 'October1'
  |'October6' | 'October7' | 'Zayed1' | 'Zayed2' | 'Shorouk1' |'Shorouk2' |'Alamin2';


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
    return '/details';
  });


  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(pm => {
      const id = pm.get('stationId');
      if (id === 'rehab' || id === 'madinty' || id === 'tirumph' || id === 'tagamo35' || id === 'AUC'
        || id === 'forest' || id === 'Master' || id === 'Master2' || id === 'Loutas' || id === 'Sadat1' || id === 'Sadat2' || id === 'AirHosbital'
        || id === 'Rehab2' || id === 'Obour1' || id === 'Obour2' || id === 'October2' || id === 'October3'
        || id === 'October1'|| id === 'October6' || id === 'October7' || id === 'Zayed1' ||
         id === 'Zayed2'|| id=== 'Shorouk1' || id === 'Shorouk2' || id==='Alamin2'
      ) this.stationId.set(id);
    });
  }
}
