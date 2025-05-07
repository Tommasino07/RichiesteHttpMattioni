import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooComponent } from './foo/foo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EsMattioni';
}
