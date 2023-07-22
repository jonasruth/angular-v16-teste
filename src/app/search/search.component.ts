import {Component, computed, effect, OnInit, Signal, signal} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  count = signal(0);
  doubleCount: Signal<number> = computed(() => this.count() * 2);

  constructor() {
    effect(() => {
      console.log(`The current double count is: ${this.doubleCount()}`);
    });
  }

  ngOnInit() {
  }

  decrementar() {
    this.count.update(i => i - 1)
  }

  incrementar() {
    this.count.update(i => i + 1)
  }


}
