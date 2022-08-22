import { Component, Input, OnInit, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, 
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() value: string = 'Marcell';

  constructor() { 
    console.log("Constructor called.")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called.");

    if (changes['value'].isFirstChange()) {
      console.log(`Current value: ${ changes['value'].currentValue }`);
    } else {
      console.log(`Previous value: ${ changes['value'].previousValue } Current value: ${ changes['value'].currentValue }`);
    }
  }

  ngOnInit(): void {
    console.log("ngOnInit called.")
  }

  ngDoCheck(): void {
    console.log("ngDoCheck called.")
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called.");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called.")
  }

  ngAfterViewInit(): void {
    console.log("afterViewInit called.")
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked called.");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy called.");
  }
}
