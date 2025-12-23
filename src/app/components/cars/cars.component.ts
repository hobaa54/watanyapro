import { Component, computed, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ALL_STATIONS } from '../cards.data'; // عدّل المسار لو مختلف

type StationId = 'rehab' | 'madinty' | 'tirumph' | 'tagamo35';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {
  private stationId = signal<StationId>('rehab');

  station = computed(() => ALL_STATIONS.find(s => s.id === this.stationId()) ?? null);
  cars = computed(() => this.station()?.cars ?? null);

  // لو لسه عندك صفحات محطات منفصلة
  backLink = computed(() => {
    const id = this.stationId();
    if (id === 'rehab') return '/app-rehab-details';
    if (id === 'madinty') return '/app-madinty';
    if (id === 'tirumph') return '/app-tirumph-station'; // عدّلها حسب route بتاع tirumph
    if (id === 'tagamo35') return '/app-tagamo3-5'; // عدّلها حسب route بتاع tirumph
    return '/details';
  });

  // لو انت عامل StationDetails واحد:
  // backLink = computed(() => `/station/${this.stationId()}`);

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(pm => {
      const id = pm.get('stationId');
      if (id === 'rehab' || id === 'madinty' || id === 'tirumph' || id === 'tagamo35') {
        this.stationId.set(id);
      }
    });
  }
}
