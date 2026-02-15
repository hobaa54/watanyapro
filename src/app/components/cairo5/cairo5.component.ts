import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
declare var L: any;

@Component({
  selector: 'app-cairo5',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cairo5.component.html',
  styleUrl: './cairo5.component.css'
})
export class Cairo5Component implements AfterViewInit {
  station: any;
  services2 = SERVICES2;
  openGoogleMaps() {
    const lat = 30.849022094887207;
    const lng = 28.917820435734463;

    const url = `https://www.google.com/maps?q=${lat},${lng}`;
    window.open(url, '_blank');
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  initMap() {
    const map = L.map('map').setView([30.849022094887207, 28.917820435734463], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap'
    }).addTo(map);

    L.marker([30.849022094887207, 28.917820435734463])
      .addTo(map)
      .bindPopup('ChillOut')
      .openPopup();
  }
}
export const SERVICES2 = [
  {
    title: 'أنواع الوقود',
    icon: 'bi bi-fuel-pump-fill',
    route: '/gaz/Cairo5'
  },
  {
    title: 'خدمات السيارات',
    icon: 'bi bi-car-front-fill',
    route: '/cars/Cairo5'
  },

  {
    title: 'سوبر ماركت',
    icon: 'bi bi-basket-fill',
    route: '/market/Cairo5'
  },
  {

    title: 'منطقة الترفيه',
    icon: 'fa-solid fa-table-tennis-paddle-ball',
    route: '/shops/Cairo5'
  },

  {
    title: 'مطاعم',
    icon: 'bi bi-shop-window',
    route: '/restaurant/Cairo5'
  },
];
