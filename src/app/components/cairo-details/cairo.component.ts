import { AfterViewInit, Component, ElementRef, QueryList, signal, ViewChildren } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cairo',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cairo.component.html',
  styleUrl: './cairo.component.css'
})
export class CairoComponent implements AfterViewInit {
  @ViewChildren('stationCard') cards!: QueryList<ElementRef>;
  
  stationCount = signal(0);

  ngAfterViewInit() {
    // بنحدث العداد بعد ما الصفحة تحمل
    // عملنا timeout بسيط عشان نتجنب خطأ ExpressionChangedAfterItHasBeenCheckedError
    setTimeout(() => {
      this.stationCount.set(this.cards.length);
    });
  }
}
