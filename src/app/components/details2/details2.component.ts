import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-details2',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './details2.component.html',
  styleUrl: './details2.component.css',
  animations: [
    trigger('fadeUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('500ms ease-in')
      ])
    ])
  ]
})
export class Details2Component {

}
