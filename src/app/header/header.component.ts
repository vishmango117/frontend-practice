import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() navigationEmitter = new EventEmitter<string>();

  public isMenuCollapsed = true;

  constructor() {}

  ngOnInit(): void {}

  navigateToPage(location: string) {
    // This navigationEmitter is present in the App component so that via the App component it will switch between recipe and shopping list.
    this.navigationEmitter.emit(location);
    console.log(`Navigating to ${location}`);
  }
}
