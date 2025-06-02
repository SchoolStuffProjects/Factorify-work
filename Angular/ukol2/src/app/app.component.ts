import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from './family/parent/parent.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ParentComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ukol2';
}
