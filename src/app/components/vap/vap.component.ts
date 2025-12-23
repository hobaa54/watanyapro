import { Component, computed, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { ALL_STATIONS } from '../cards.data';
type StationId = 'rehab' | 'madinty' | 'tirumph';

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
    return '/details';
  });

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(pm => {
      const id = pm.get('stationId');
      if (id) this.stationId.set(id);
    });
  }
}
