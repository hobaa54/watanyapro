import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-stations',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './stations.component.html',
  styleUrl: './stations.component.css'
})
export class StationsComponent {

}

