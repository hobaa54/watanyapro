import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
declare var L: any;

@Component({
  selector: 'app-torism2',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './torism2.component.html',
  styleUrl: './torism2.component.css'
})
export class Torism2Component implements AfterViewInit {
  station: any;
  services2 = SERVICES2;
  openGoogleMaps() {
    const lat = 30.838013078550357;
    const lng = 28.986884106353397;

    const url = `https://www.google.com/maps?q=${lat},${lng}`;
    window.open(url, '_blank');
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  initMap() {
    const map = L.map('map').setView([30.838013078550357, 28.986884106353397], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap'
    }).addTo(map);

    L.marker([30.838013078550357, 28.986884106353397])
      .addTo(map)
      .bindPopup('مارينا')
      .openPopup();
  }
}
export const SERVICES2 = [
  {
    title: 'أنواع الوقود',
    icon: 'bi bi-fuel-pump-fill',
    route: '/gaz/Torism2'
  },
  {
    title: 'خدمات السيارات',
    icon: 'bi bi-car-front-fill',
    route: '/cars/Torism2'
  },

  {
    title: 'سوبر ماركت',
    icon: 'bi bi-basket-fill',
    route: '/market/Torism2'
  },

];

