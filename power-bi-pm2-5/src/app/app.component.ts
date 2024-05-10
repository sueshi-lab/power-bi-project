import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../env';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PM2.5 Dashboard';
  src = environment.src;

  constructor(private sanitizer: DomSanitizer) { }
  
  sanitizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
