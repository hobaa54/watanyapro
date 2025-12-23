import { trigger, transition, style, animate } from '@angular/animations';
import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { ALL_STATIONS } from '../cards.data';
declare var L: any;

@Component({
  selector: 'app-rehab-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './rehab-details.component.html',
  styleUrl: './rehab-details.component.css',
  animations: [
    trigger('fadeUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(15px)' }),
        animate('400ms ease-in')
      ])
    ])
  ]
})
export class RehabDetailsComponent implements AfterViewInit {
  station = ALL_STATIONS.find(s => s.id === 'rehab') ?? null;
  services = SERVICES;

  // ✅ 1) عرف الإحداثيات هنا
  coords() {
    return this.station?.location ?? null;
  }


  openGoogleMaps() {
    const c = this.coords();
    if (!c) return;

    const url = `https://www.google.com/maps/dir/?api=1&destination=${c.lat},${c.lng}`;
    window.open(url, '_blank');
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  initMap() {
    const c = this.coords();
    if (!c) return;

    const map = L.map('map').setView([c.lat, c.lng], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap'
    }).addTo(map);

    // ✅ 2) خلي الـ marker نفس الإحداثيات
    L.marker([c.lat, c.lng])

      .addTo(map)
      .openPopup();
  }
}
export const SERVICES = [
  {
    title: 'أنواع الوقود',
    icon: 'bi bi-fuel-pump-fill',
    route: '/gaz/rehab'
  },
  {
    title: 'خدمات السيارات',
    icon: 'bi bi-car-front-fill',
    route: '/cars/rehab'
  },
  {
    title: 'كوفي شوب',
    icon: 'bi bi-cup-hot-fill',
    route: '/coffee/rehab'
  },
  {
    title: 'منطقة المعاملات',
    icon: 'bi bi-emoji-smile-fill',
    route: '/atm/rehab'
  },
  {
    title: 'سوبر ماركت',
    icon: 'bi bi-basket-fill',
    route: '/market/rehab'
  },
  {
    title: 'مطاعم',
    icon: 'bi bi-shop-window',
    route: '/restaurant/rehab'
  },
  {
    title: 'صيدليات',
    icon: 'fa-solid fa-capsules',
    route: '/pharmacy/rehab'
  },
  {
    title: 'محل بيع زهور',
    icon: 'fa-solid fa-leaf',
    route: '/flowers/rehab'
  }
];

