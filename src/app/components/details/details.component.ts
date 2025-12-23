import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
  animations: [
      trigger('fadeUp', [
        transition(':enter', [
          style({ opacity: 0, transform: 'translateY(10px)' }),
          animate('500ms ease-in')
        ])
      ])
    ]
})
export class DetailsComponent {

}
