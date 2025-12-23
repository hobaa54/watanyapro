import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NearestComponent } from "./components/nearest/nearest.component";
import { NavbarComponent } from './components/navbar/navbar.component';
import {
  trigger,
  transition,
  style,
  animate,
  query
} from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[HomeComponent, NearestComponent,RouterOutlet,NavbarComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('routeAnimation', [
      transition('* <=> *', [
        query(':enter', [
          style({
            opacity: 1,
            transform: 'translateY(30px)'
          }),
          animate(
            '1s zoom-in',
            style({
              opacity: 1,
              transform: 'translateY(30px)'
            })
          )
        ], { optional: true })
      ])
    ])
  ]
})
export class AppComponent { }