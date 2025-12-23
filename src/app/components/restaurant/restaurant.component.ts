import { Component, computed, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { ALL_STATIONS } from '../cards.data'; // عدّل المسار حسب مشروعك

type StationId = 'rehab' | 'madinty' | 'tirumph' | 'tagamo35';


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
    return '/details';
  });


  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(pm => {
      const id = pm.get('stationId');
      if (id === 'rehab' || id === 'madinty' || id === 'tirumph' || id === 'tagamo35') this.stationId.set(id);
    });
  }
}
