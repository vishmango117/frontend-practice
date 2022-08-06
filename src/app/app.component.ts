import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CourseProject';
  currentNav = 'recipe';

  switchNavigation(location: string) {
    this.currentNav = location;
  }
}
