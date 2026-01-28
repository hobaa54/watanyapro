import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-zayed-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './zayed-details.component.html',
  styleUrl: './zayed-details.component.css',
  animations: [
    trigger('fadeUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('500ms ease-in')
      ])
    ])
  ]
})
export class ZayedDetailsComponent {

}
