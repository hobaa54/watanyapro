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
import { MadintyComponent } from './components/madinty/madinty.component';
import { VapComponent } from './components/vap/vap.component';
import { TirumphStationComponent } from './components/tirumph-station/tirumph-station.component';
import { Tagamo35Component } from './components/tagamo3-5/tagamo3-5.component';
import { ClothesComponent } from './components/clothes/clothes.component';
import { AUCSTComponent } from './components/auc-st/auc-st.component';
import { BeautyComponent } from './components/beauty-center/beauty-center.component';
import { ForestComponent } from './components/forest/forest.component';
import { Master1Component } from './components/master1/master1.component';
import { Master2Component } from './components/master2/master2.component';
import { AcademyComponent } from './components/academy/academy.component';
import { LoutasComponent } from './components/loutas/loutas.component';

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
    { path: 'app-auc-st', component: AUCSTComponent, title: 'AUC' },
    { path: 'app-forest', component: ForestComponent, title: 'forest' },
    { path: 'app-master1', component: Master1Component, title: 'Master' },
    { path: 'app-master2', component: Master2Component, title: 'Master2' },
    { path: 'app-academy', component: AcademyComponent, title: 'Academy' },
    { path: 'app-loutas', component: LoutasComponent, title: 'Loutas' },

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
    { path: 'clothes/:stationId', component: ClothesComponent, title: 'clothes' },
    { path: 'beauty-center/:stationId', component: BeautyComponent, title: 'beauty-center' },





    { path: '**', redirectTo: 'home' },
];