import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
declare var L: any;

@Component({
  selector: 'app-alamin3',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './alamin3.component.html',
  styleUrl: './alamin3.component.css'
})
export class Alamin3Component implements AfterViewInit {
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
    route: '/gaz/Alamin3'
  },
  {
    title: 'خدمات السيارات',
    icon: 'bi bi-car-front-fill',
    route: '/cars/Alamin3'
  },

  {
    title: 'سوبر ماركت',
    icon: 'bi bi-basket-fill',
    route: '/market/Alamin3'
  },
  {
    title: 'صيدليات',
    icon: 'fa-solid fa-capsules',
    route: '/pharmacy/Alamin3'
  },
  {
    title: 'مطاعم',
    icon: 'bi bi-shop-window',
    route: '/restaurant/Alamin3'
  },
];