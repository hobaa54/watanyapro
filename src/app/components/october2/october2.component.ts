import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
declare var L: any;

@Component({
  selector: 'app-october2',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './october2.component.html',
  styleUrl: './october2.component.css'
})
export class October2Component implements AfterViewInit {
  station: any;
  services2 = SERVICES2;

  openGoogleMaps() {
    const lat = 30.10433048121009;
    const lng = 31.600915815342617;

    const url = `https://www.google.com/maps?q=${lat},${lng}`;
    window.open(url, '_blank');
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  initMap() {
    const map = L.map('map').setView([30.10433048121009, 31.600915815342617], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap'
    }).addTo(map);

    L.marker([30.10433048121009, 31.600915815342617])
      .addTo(map)
      .bindPopup('ChillOut')
      .openPopup();
  }
}
export const SERVICES2 = [
  {
    title: 'أنواع الوقود',
    icon: 'bi bi-fuel-pump-fill',
    route: '/gaz/October2'
  },
  {
    title: 'خدمات السيارات',
    icon: 'bi bi-car-front-fill',
    route: '/cars/October2'
  },

  {
    title: 'مطاعم',
    icon: 'bi bi-shop-window',
    route: '/restaurant/October2'
  },
  {
    title: 'سوبر ماركت',
    icon: 'bi bi-basket-fill',
    route: '/market/October2'
  },
  {
    title: 'كوفي شوب',
    icon: 'bi bi-cup-hot-fill',
    route: '/coffee/October2'
  },
  {
    title: 'VAP Station',
    icon: 'fa-solid fa-wind',
    route: '/vap/October2'
  },
    {
    title: 'صيدليات',
    icon: 'fa-solid fa-capsules',
    route: '/pharmacy/October2'
  },
];