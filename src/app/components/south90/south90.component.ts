import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
declare var L: any;

@Component({
  selector: 'app-south90',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './south90.component.html',
  styleUrl: './south90.component.css'
})
export class South90Component implements AfterViewInit {
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
    route: '/gaz/Sadat1'
  },
  {
    title: 'خدمات السيارات',
    icon: 'bi bi-car-front-fill',
    route: '/cars/Sadat1'
  },

  {
    title: 'منطقة المعاملات',
    icon: 'bi bi-emoji-smile-fill',
    route: '/atm/Sadat1'
  },

];