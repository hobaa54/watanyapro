import { animate, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
declare var L: any;

@Component({
  selector: 'app-forest',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './forest.component.html',
  styleUrl: './forest.component.css',
  animations: [
    trigger('fadeUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(15px)' }),
        animate('400ms ease-in')
      ])
    ])
  ]
})
export class ForestComponent implements AfterViewInit {
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

    L.marker([30.00629370835832, 31.39972518650697]).addTo(map).bindPopup('الغــابة المتحــجره').openPopup();
  }
}
export const SERVICES3 = [
  {
    title: 'أنواع الوقود',
    icon: 'bi bi-fuel-pump-fill',
    route: '/gaz/forest/'
  },
  {
    title: 'خدمات وايجار السيارات',
    icon: 'bi bi-car-front-fill',
    route: '/cars/forest/'
  },
  {
    title: 'سوبر ماركت',
    icon: 'bi bi-basket-fill',
    route: '/market/forest/'
  },

  {
    title: 'مطاعم',
    icon: 'bi bi-shop-window',
    route: '/restaurant/forest'
  },
  {
    title: 'منطقة المعاملات',
    icon: 'bi bi-emoji-smile-fill',
    route: '/atm/forest'
  },
  {
    title: 'كـــوفي',
    icon: 'bi bi-cup-hot-fill',
    route: '/coffee/forest/'
  },
  {
    title: 'صيدليات',
    icon: 'fa-solid fa-capsules',
    route: '/pharmacy/forest'
  },

];