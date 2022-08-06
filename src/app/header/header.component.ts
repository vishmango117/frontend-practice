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
    this.navigationEmitter.emit(location);
    console.log(`Navigating to ${location}`);
  }
}
