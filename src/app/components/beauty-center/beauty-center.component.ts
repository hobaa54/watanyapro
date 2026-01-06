import { AfterViewInit, Component, computed, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { ALL_STATIONS } from '../cards.data';

type StationId = 'rehab' | 'madinty' | 'tirumph' | 'tagamo35' | 'AUC' | 'forest';

@Component({
  selector: 'app-beauty',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './beauty-center.component.html',
  styleUrl: './beauty-center.component.css',
  animations: [
    trigger('fadeUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(15px)' }),
        animate('400ms ease-in')
      ])
    ])
  ]
})
export class BeautyComponent implements AfterViewInit {
  private stationId = signal<StationId>('rehab');

  station = computed(() => ALL_STATIONS.find(s => s.id === this.stationId()) ?? null);
  beauty = computed(() => this.station()?.beauty ?? null);

  backLink = computed(() => {
    const id = this.stationId();
    if (id === 'rehab') return '/app-rehab-details';
    if (id === 'madinty') return '/app-madinty';
    if (id === 'tirumph') return '/app-tirumph-station';
    if (id === 'tagamo35') return '/app-tagamo3-5';
    if (id === 'AUC') return '/app-auc-st';
    if (id === 'forest') return '/app-forest';
    return '/details';
  });

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(pm => {
      const id = pm.get('stationId');
      if (id === 'rehab' || id === 'madinty' || id === 'tirumph' || id === 'tagamo35' || id === 'AUC' || id === 'forest') {
        this.stationId.set(id);
      } else {
        this.stationId.set('rehab');
      }
    });
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
}