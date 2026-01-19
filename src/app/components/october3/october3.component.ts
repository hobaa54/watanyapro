import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
declare var L: any;

@Component({
  selector: 'app-october3',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './october3.component.html',
  styleUrl: './october3.component.css'
})
export class October3Component implements AfterViewInit {
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
    route: '/gaz/October3'
  },
  {
    title: 'خدمات السيارات',
    icon: 'bi bi-car-front-fill',
    route: '/cars/October3'
  },

  {
    title: 'مطاعم',
    icon: 'bi bi-shop-window',
    route: '/restaurant/October3'
  },
  {
    title: 'سوبر ماركت',
    icon: 'bi bi-basket-fill',
    route: '/market/October3'
  },
  {
    title: 'صيدليات',
    icon: 'fa-solid fa-capsules',
    route: '/pharmacy/October3'
  },
    {
    title: 'منطقة المعاملات',
    icon: 'bi bi-emoji-smile-fill',
    route: '/atm/October3'
  },
];