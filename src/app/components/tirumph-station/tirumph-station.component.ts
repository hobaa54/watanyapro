
import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { ALL_STATIONS } from '../cards.data'; // عدّل المسار حسب مشروعك

declare var L: any;

@Component({
  selector: 'app-tirumph-station',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tirumph-station.component.html',
  styleUrl: './tirumph-station.component.css',
  animations: [
    trigger('fadeUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(15px)' }),
        animate('400ms ease-in')
      ])
    ])
  ]
})
export class TirumphStationComponent implements AfterViewInit {
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

    L.marker([30.00629370835832, 31.39972518650697]).addTo(map).bindPopup('Tirumph').openPopup();
  }
}

export const SERVICES3 = [
  {
    title: 'أنواع الوقود',
    icon: 'bi bi-fuel-pump-fill',
    route: '/gaz/tirumph'
  },
  {
    title: 'خدمات وايجار السيارات',
    icon: 'bi bi-car-front-fill',
    route: '/cars/tirumph/'
  },
  {
    title: 'سوبر ماركت',
    icon: 'bi bi-basket-fill',
    route: '/market/tirumph/'
  },
 {
    title: 'كـــوفي',
    icon: 'bi bi-cup-hot-fill',
    route: '/coffee/tirumph/'
  },
   {
    title: 'محل بيع زهور',
    icon: 'fa-solid fa-leaf',
    route: '/flowers/tirumph/'
  }

];