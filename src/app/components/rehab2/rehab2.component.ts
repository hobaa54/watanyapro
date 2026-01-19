import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
declare var L: any;

@Component({
  selector: 'app-rehab2',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './rehab2.component.html',
  styleUrl: './rehab2.component.css'
})
export class Rehab2Component {
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

    L.marker([30.00629370835832, 31.39972518650697]).addTo(map).bindPopup('السخنه ماستر 2').openPopup();
  }
}
export const SERVICES3 = [
  {
    title: 'أنواع الوقود',
    icon: 'bi bi-fuel-pump-fill',
    route: '/gaz/Rehab2'
  },
  {
    title: 'خدمات السيارات',
    icon: 'bi bi-car-front-fill',
    route: '/cars/Rehab2'
  },
  {
    title: 'مطاعم',
    icon: 'bi bi-shop-window',
    route: '/restaurant/Rehab2'
  },


];