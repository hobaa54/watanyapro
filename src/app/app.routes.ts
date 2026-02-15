import { Zayed2Component } from './components/zayed2/zayed2.component';
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
import { Sadat1Component } from './components/sadat1/sadat1.component';
import { Sadat2Component } from './components/sadat2/sadat2.component';
import { South90Component } from './components/south90/south90.component';
import { AirHosbitalComponent } from './components/air-hosbital/air-hosbital.component';
import { Rehab2Component } from './components/rehab2/rehab2.component';
import { Details2Component } from './components/details2/details2.component';
import { Obour1Component } from './components/obour1/obour1.component';
import { Obour2Component } from './components/obour2/obour2.component';
import { OctoberDetailsComponent } from './components/october-details/october-details.component';
import { October2Component } from './components/october2/october2.component';
import { October1Component } from './components/october1/october1.component';
import { October3Component } from './components/october3/october3.component';
import { October4Component } from './components/october4/october4.component';
import { October5Component } from './components/october5/october5.component';
import { October6Component } from './components/october6/october6.component';
import { October7Component } from './components/october7/october7.component';
import { ZayedDetailsComponent } from './components/zayed-details/zayed-details.component';
import { Zayed1Component } from './components/zayed1/zayed1.component';
import { ElshoroukDetailsComponent } from './components/elshorouk-details/elshorouk-details.component';
import { Shorouk1Component } from './components/shorouk1/shorouk1.component';
import { ShopsComponent } from './components/shops/shops.component';
import { Shorouk2Component } from './components/shorouk2/shorouk2.component';
import { Shorouk3Component } from './components/shorouk3/shorouk3.component';
import { Shorouk4Component } from './components/shorouk4/shorouk4.component';
import { NewAlameinComponent } from './components/new-alamein/new-alamein.component';
import { Alamin1Component } from './components/alamin1/alamin1.component';
import { Alamin2Component } from './components/alamin2/alamin2.component';
import { Alamin3Component } from './components/alamin3/alamin3.component';
import { Suez1Component } from './components/suez1/suez1.component';
import { SuezDetailsComponent } from './components/suez-details/suez-details.component';
import { Suez4Component } from './components/suez4/suez4.component';
import { Suez3Component } from './components/suez3/suez3.component';
import { Suez2Component } from './components/suez2/suez2.component';
import { GezaDetailsComponent } from './components/geza-details/geza-details.component';
import { Giza1Component } from './components/giza1/giza1.component';
import { Giza2Component } from './components/giza2/giza2.component';
import { Giza3Component } from './components/giza3/giza3.component';
import { Giza2DetailsComponent } from './components/giza2-details/giza2-details.component';
import { GizaC3Component } from './components/giza-c3/giza-c3.component';
import { GizaC2Component } from './components/giza-c2/giza-c2.component';
import { GizaC1Component } from './components/giza-c1/giza-c1.component';
import { Torism2Component } from './components/torism2/torism2.component';
import { Torism1Component } from './components/torism1/torism1.component';
import { TorismComponent } from './components/torism/torism.component';
import { RedSeaComponent } from './components/red-sea/red-sea.component';
import { RedSeaDetailsComponent } from './components/red-sea-details/red-sea-details.component';
import { CairoComponent } from './components/cairo-details/cairo.component';
import { Cairo6Component } from './components/cairo6/cairo6.component';
import { Cairo1Component } from './components/cairo1/cairo1.component';
import { Cairo5Component } from './components/cairo5/cairo5.component';
import { Cairo4Component } from './components/cairo4/cairo4.component';
import { Cairo3Component } from './components/cairo3/cairo3.component';
import { Cairo2Component } from './components/cairo2/cairo2.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    { path: 'home', component: HomeComponent, title: 'Home' },
    { path: 'nearest', component: NearestComponent, title: 'nearest' },
    { path: 'navbar', component: NavbarComponent, title: 'navbar' },
    { path: 'details', component: DetailsComponent, title: 'details' },
    { path: 'details2', component: Details2Component, title: 'details2' },
    { path: 'app-october-details', component: OctoberDetailsComponent, title: 'OctoberDetails' },
    { path: 'app-zayed-details', component: ZayedDetailsComponent, title: 'ZayedDetails' },
    { path: 'app-elshorouk-details', component: ElshoroukDetailsComponent, title: 'ElshoroukDetails' },
    { path: 'app-new-alamein', component: NewAlameinComponent, title: 'NewAlamein' },
    { path: 'app-geza-details', component: GezaDetailsComponent, title: 'GezaDetails' },
    { path: 'app-suez-details', component: SuezDetailsComponent, title: 'SuezDetails' },
    { path: 'app-giza2-details', component: Giza2DetailsComponent, title: 'Giza2Details' },
    { path: 'app-red-sea-details', component: RedSeaDetailsComponent, title: 'RedSeaDetails' },
    { path: 'app-cairo', component: CairoComponent, title: 'CairoDetails' },
    
    { path: 'app-torism', component: TorismComponent, title: 'Torism' },
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
    { path: 'app-sadat1', component: Sadat1Component, title: 'Sadat1' },
    { path: 'app-sadat2', component: Sadat2Component, title: 'Sadat2' },
    { path: 'app-south90', component: South90Component, title: 'South90' },
    { path: 'app-air-hosbital', component: AirHosbitalComponent, title: 'AirHosbital' },
    { path: 'app-rehab2', component: Rehab2Component, title: 'Rehab2' },
    { path: 'app-obour1', component: Obour1Component, title: 'Obour1' },
    { path: 'app-obour2', component: Obour2Component, title: 'Obour2' },
    { path: 'app-october2', component: October2Component, title: 'October2' },
    { path: 'app-october1', component: October1Component, title: 'October1' },
    { path: 'app-october3', component: October3Component, title: 'October3' },
    { path: 'app-october4', component: October4Component, title: 'October4' },
    { path: 'app-october5', component: October5Component, title: 'October5' },
    { path: 'app-october6', component: October6Component, title: 'October6' },
    { path: 'app-october7', component: October7Component, title: 'October7' },
    { path: 'app-zayed1', component: Zayed1Component, title: 'Zayed1' },
    { path: 'app-zayed2', component: Zayed2Component, title: 'Zayed2' },
    { path: 'app-shorouk1', component: Shorouk1Component, title: 'Shorouk1' },
    { path: 'app-shorouk2', component: Shorouk2Component, title: 'Shorouk2' },
    { path: 'app-shorouk3', component: Shorouk3Component, title: 'Shorouk3' },
    { path: 'app-shorouk4', component: Shorouk4Component, title: 'Shorouk4' },
    { path: 'app-alamin1', component: Alamin1Component, title: 'Alamin1' },
    { path: 'app-alamin2', component: Alamin2Component, title: 'Alamin2' },
    { path: 'app-alamin3', component: Alamin3Component, title: 'Alamin3' },
    { path: 'app-suez1', component: Suez1Component, title: 'Suez1' },
    { path: 'app-suez2', component: Suez2Component, title: 'Suez2' },
    { path: 'app-suez3', component: Suez3Component, title: 'Suez3' },
    { path: 'app-suez4', component: Suez4Component, title: 'Suez4' },
    { path: 'app-giza1', component: Giza1Component, title: 'Giza1' },
    { path: 'app-giza2', component: Giza2Component, title: 'Giza2' },
    { path: 'app-giza3', component: Giza3Component, title: 'Giza3' },
    { path: 'app-giza-c1', component: GizaC1Component, title: 'GizaC1' },
    { path: 'app-giza-c2', component: GizaC2Component, title: 'GizaC2' },
    { path: 'app-giza-c3', component: GizaC3Component, title: 'GizaC3' },
    { path: 'app-torism2', component: Torism2Component, title: 'Torism2' },
    { path: 'app-torism1', component: Torism1Component, title: 'Torism1' },
    { path: 'app-red-sea', component: RedSeaComponent, title: 'RedSea' },
    { path: 'app-cairo1', component: Cairo1Component, title: 'Cairo1' },
    { path: 'app-cairo2', component: Cairo2Component, title: 'Cairo2' },
    { path: 'app-cairo3', component: Cairo3Component, title: 'Cairo3' },
    { path: 'app-cairo4', component: Cairo4Component, title: 'Cairo4' },
    { path: 'app-cairo5', component: Cairo5Component, title: 'Cairo5' },
    { path: 'app-cairo6', component: Cairo6Component, title: 'Cairo6' },

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
    { path: 'shops/:stationId', component: ShopsComponent, title: 'shops' },





    { path: '**', redirectTo: 'home' },
];