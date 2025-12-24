import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavmainComponent } from "../navmain/navmain.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-nearest',
  standalone: true,
  imports: [RouterLink, NavbarComponent],
  templateUrl: './nearest.component.html',
  styleUrl: './nearest.component.css',
  
animations: [
  trigger('fadeUp', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(15px)' }),
      animate('400ms ease-in')
    ])
  ])
]
  
})

export class NearestComponent {

}
