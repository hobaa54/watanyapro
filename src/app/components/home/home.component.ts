import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { NavmainComponent } from "../navmain/navmain.component";
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NavmainComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
 
    
})
export class HomeComponent {

}
