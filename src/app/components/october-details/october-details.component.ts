import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-october-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './october-details.component.html',
  styleUrl: './october-details.component.css',
  animations: [
    trigger('fadeUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('500ms ease-in')
      ])
    ])
  ]
})
export class OctoberDetailsComponent {

}
