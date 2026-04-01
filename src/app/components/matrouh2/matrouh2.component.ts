import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
declare var L: any;

@Component({
  selector: 'app-matrouh2',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './matrouh2.component.html',
  styleUrl: './matrouh2.component.css'
})
export class Matrouh2Component implements AfterViewInit {
  station: any;
  services2 = SERVICES2;

  openGoogleMaps() {
    const lat = 30.05383293897236;
    const lng = 31.371219578099865;
    const url = `https://www.google.com/maps?q=${lat},${lng}`;
    window.open(url, '_blank');

  }

  ngAfterViewInit(): void {
    this.initMap();
  }
  initMap() {

    const map = L.map('map').setView([30.05383293897236, 31.371219578099865], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap'

    }).addTo(map);

    L.marker([30.05383293897236, 31.371219578099865])
      .addTo(map)
      .bindPopup('ChillOut')
      .openPopup();

  }
}
export const SERVICES2 = [
  {
    title: 'أنواع الوقود',
    icon: 'bi bi-fuel-pump-fill',
    route: '/gaz/Matrouh2'
  },
  {
    title: 'خدمات السيارات',
    icon: 'bi bi-car-front-fill',
    route: '/cars/Matrouh2'
  },
 {
    title: 'سوبر ماركت',
    icon: 'bi bi-basket-fill',
    route: '/market/Matrouh2'
  },
  
];

