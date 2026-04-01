import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
declare var L: any;

@Component({
  selector: 'app-sharqia1',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sharqia1.component.html',
  styleUrl: './sharqia1.component.css'
})
export class Sharqia1Component implements AfterViewInit {
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
    route: '/gaz/Sharqia1'
  },
  {
    title: 'خدمات السيارات',
    icon: 'bi bi-car-front-fill',
    route: '/cars/Sharqia1'
  },
 
  {
    title: 'سوبر ماركت',
    icon: 'bi bi-basket-fill',
    route: '/market/Sharqia1'
  },
];

