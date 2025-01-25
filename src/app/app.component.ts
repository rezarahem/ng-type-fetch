import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpWrapperService } from './http-wrapper.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  http = inject(HttpWrapperService);

  constructor() {
    
  }
}
