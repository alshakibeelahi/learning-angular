import { Component, WritableSignal, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'learning-angular';

  // Define a signal for the selected language
  selectedLanguage: WritableSignal<string>;

  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('language') || 'en';
    
    // Initialize the signal
    this.selectedLanguage = signal(savedLang);

    this.translate.addLangs(['en', 'fr']);
    this.translate.setDefaultLang('fr');
    this.translate.use(savedLang);
  }

  changeLanguage(event: Event) {
    const newLang = (event.target as HTMLSelectElement).value;

    // Update the signal value
    this.selectedLanguage.update(() => newLang);

    console.log('Selected Language:', newLang);
    localStorage.setItem('language', newLang);
    this.translate.use(newLang);
  }
}
