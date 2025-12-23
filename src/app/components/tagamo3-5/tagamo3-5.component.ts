import { RouterLink } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { AfterViewInit, Component } from '@angular/core';
declare var L: any;

@Component({
  selector: 'app-tagamo3-5',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tagamo3-5.component.html',
  styleUrl: './tagamo3-5.component.css',
  animations: [
    trigger('fadeUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(15px)' }),
        animate('400ms ease-in')
      ])
    ])
  ]
})
export class Tagamo35Component implements AfterViewInit {
  services2 = SERVICES3;

  openGoogleMaps() {
    const lat = 30.006222;
    const lng = 31.399645;
    window.open(`https://www.google.com/maps?q=${lat},${lng}`, '_blank');
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  initMap() {
    const map = L.map('map').setView([30.00629370835832, 31.39972518650697], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap'
    }).addTo(map);

    L.marker([30.00629370835832, 31.39972518650697]).addTo(map).bindPopup('التجمع الخامس').openPopup();
  }
}
export const SERVICES3 = [
  {
    title: 'أنواع الوقود',
    icon: 'bi bi-fuel-pump-fill',
    route: '/gaz/tagamo35/'
  },
  {
    title: 'خدمات وايجار السيارات',
    icon: 'bi bi-car-front-fill',
    route: '/cars/tagamo35/'
  },
  {
    title: 'سوبر ماركت',
    icon: 'bi bi-basket-fill',
    route: '/market/tagamo35/'
  },
  {
    title: 'كـــوفي',
    icon: 'bi bi-cup-hot-fill',
    route: '/coffee/tagamo35/'
  },

];