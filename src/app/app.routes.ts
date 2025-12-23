import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NearestComponent } from './components/nearest/nearest.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DetailsComponent } from './components/details/details.component';
import { RehabDetailsComponent } from './components/rehab-details/rehab-details.component';
import { GazComponent } from './components/gaz/gaz.component';
import { CoffeeComponent } from './components/coffee/coffee.component';
import { CarsComponent } from './components/cars/cars.component';
import { AtmComponent } from './components/atm/atm.component';
import { MarketComponent } from './components/market/market.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { PharmacyComponent } from './components/pharmacy/pharmacy.component';
import { FlowersComponent } from './components/flowers/flowers.component';
import { MadintyComponent } from './stations/madinty/madinty.component';
import { VapComponent } from './components/vap/vap.component';
import { TirumphStationComponent } from './components/tirumph-station/tirumph-station.component';
import { Tagamo35Component } from './components/tagamo3-5/tagamo3-5.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    { path: 'home', component: HomeComponent, title: 'Home' },
    { path: 'nearest', component: NearestComponent, title: 'nearest' },
    { path: 'navbar', component: NavbarComponent, title: 'navbar' },
    { path: 'details', component: DetailsComponent, title: 'details' },
    //!Stations
    { path: 'app-rehab-details', component: RehabDetailsComponent, title: 'rehab' },
    { path: 'app-madinty', component: MadintyComponent, title: 'madinty' },
    { path: 'app-tirumph-station', component: TirumphStationComponent, title: 'tirumph' },
    { path: 'app-tagamo3-5', component: Tagamo35Component, title: 'tagamo35' },

    // Route واحد للجاز وبـ stationId
    { path: 'gaz/:stationId', component: GazComponent, title: 'gaz' },
    { path: 'restaurant/:stationId', component: RestaurantComponent, title: 'restaurant' },
    { path: 'market/:stationId', component: MarketComponent, title: 'market' },
    { path: 'pharmacy/:stationId', component: PharmacyComponent, title: 'pharmacy' },
    { path: 'flowers/:stationId', component: FlowersComponent, title: 'flowers' },
    { path: 'coffee/:stationId', component: CoffeeComponent, title: 'coffee' },
    { path: 'cars/:stationId', component: CarsComponent, title: 'cars' },
    { path: 'atm/:stationId', component: AtmComponent, title: 'atm' },
    { path: 'vap/:stationId', component: VapComponent, title: 'vap' },
    { path: 'tirumph-station/:stationId', component: TirumphStationComponent, title: 'tirumph-station' },
    { path: 'tagamo3-5/:stationId', component: Tagamo35Component, title: 'tagamo35' },




    { path: '**', redirectTo: 'home' },
];