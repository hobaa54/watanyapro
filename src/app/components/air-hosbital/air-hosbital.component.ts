import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
declare var L: any;

@Component({
  selector: 'app-air-hosbital',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './air-hosbital.component.html',
  styleUrl: './air-hosbital.component.css'
})
export class AirHosbitalComponent  implements AfterViewInit{
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

    L.marker([30.00629370835832, 31.39972518650697]).addTo(map).bindPopup('التجمع الخامس').openPopup();
  }
}
export const SERVICES3 = [
  {
    title: 'أنواع الوقود',
    icon: 'bi bi-fuel-pump-fill',
    route: '/gaz/AUC/'
  },
  {
    title: 'خدمات وايجار السيارات',
    icon: 'bi bi-car-front-fill',
    route: '/cars/AUC/'
  },
  {
    title: 'سوبر ماركت',
    icon: 'bi bi-basket-fill',
    route: '/market/AUC/'
  },

  {
    title: 'مطاعم',
    icon: 'bi bi-shop-window',
    route: '/restaurant/AUC'
  },

  {
    title: 'متجر الملابس',
    icon: 'fa-solid fa-tshirt',
    route: '/clothes/AUC'
  },
  {
    title: 'منطقة المعاملات',
    icon: 'bi bi-emoji-smile-fill',
    route: '/atm/AUC'
  }, {
    title: 'مركز تجميل',
    icon: 'bi bi-emoji-smile-fill',
    route: '/beauty-center/AUC'
  },

];