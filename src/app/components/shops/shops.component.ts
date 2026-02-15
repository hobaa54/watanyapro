import { Component, computed, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { ALL_STATIONS } from '../cards.data';
type StationId = 'rehab' | 'madinty' | 'tirumph' | 'tagamo35' | 'AUC' | 'forest' | 'Loutas' | 'Sadat1' |
  'Obour2' | 'October2' | 'October1' | 'October6' | 'October7' | 'Zayed2' | 'Zayed1' | 'Shorouk1'
  | 'Giza2' | 'Giza3' | 'Cairo2' | 'Cairo3' | 'Cairo4' | 'Cairo5' | 'Cairo6';
@Component({
  selector: 'app-shops',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './shops.component.html',
  styleUrl: './shops.component.css'
})
export class ShopsComponent {
  private stationId = signal('rehab');

  station = computed(() => ALL_STATIONS.find(s => s.id === this.stationId()) ?? null);

  // ✅ متغير واحد للداتا
  ShopsData = computed(() => this.station()?.shops);

  backLink = computed(() => {
    const id = this.stationId();
    if (id === 'rehab') return '/app-rehab-details';
    if (id === 'madinty') return '/app-madinty';
    if (id === 'tirumph') return '/app-tirumph-station'; // عدّلها حسب route بتاع tirumph
    if (id === 'tagamo35') return '/app-tagamo3-5'; // عدّلها حسب route بتاع tagamo35
    if (id === 'AUC') return '/app-auc-st';   // عدّلها حسب route بتاع AUC
    if (id === 'forest') return '/app-forest'; // عدّلها حسب route بتاع forest
    if (id === 'Loutas') return '/app-loutas'; // عدّلها حسب route بتاع Loutas
    if (id === 'Sadat1') return '/app-sadat1'; // عدّلها حسب route بتاع Sadat1
    if (id === 'Giza2') return '/app-giza2'; // عدّلها حسب route بتاع Giza2
    if (id === 'Giza3') return '/app-giza3'; // عدّلها حسب route بتاع Giza3
    if (id === 'Obour2') return '/app-obour2'; // عدّلها حسب route بتاع Obour
    if (id === 'October2') return '/app-october2'; // عدّلها حسب route بتاع October2
    if (id === 'October1') return '/app-october1'; // عدّلها حسب route بتاع October2
    if (id === 'October6') return '/app-october6'; // عدّلها حسب route بتاع October2
    if (id === 'October7') return '/app-october7'; // عدّلها حسب route بتاع October2
    if (id === 'Zayed2') return '/app-zayed2'; // عدّلها حسب route بتاع October2
    if (id === 'Zayed1') return '/app-zayed1'; // عدّلها حسب route بتاع October2
    if (id === 'Shorouk1') return '/app-shorouk1'; // عدّلها حسب route بتاع October2
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
        || id === 'forest' || id === 'Master' || id === 'Master2' || id === 'Loutas' || id === 'Sadat1' || id === 'Sadat2' || id === 'AirHosbital'
        || id === 'Rehab2' || id === 'Obour1' || id === 'Obour2' || id === 'October2' || id === 'October3'
        || id === 'October1' || id === 'October6' || id === 'October7' || id === 'Zayed1' || id === 'Zayed2' || id === 'Shorouk1'
        || id === 'Giza2' || id === 'Giza3' || id === 'Cairo2' || id === 'Cairo3' || id === 'Cairo4' 
        || id === 'Cairo5' || id ==='Cairo6'
      ) this.stationId.set(id);
    });
  }
}
