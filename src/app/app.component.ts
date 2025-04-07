import { Component, WritableSignal, signal, Renderer2 } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learning-angular';

  // Define a signal for the selected language
  selectedLanguage: WritableSignal<string>;

  constructor(private translate: TranslateService, private renderer: Renderer2) {
    const savedLang = localStorage.getItem('language') || 'en';
    
    // Initialize the signal
    this.selectedLanguage = signal(savedLang);

    this.translate.addLangs(['en', 'ar', 'fr']);
    this.translate.setDefaultLang('en');
    this.translate.use(savedLang);

    // Set initial language and alignment based on saved language
    this.setLanguage(savedLang);
  }

  changeLanguage(event: Event) {
    const newLang = (event.target as HTMLSelectElement).value;

    // Update the signal value
    this.selectedLanguage.update(() => newLang);

    console.log('Selected Language:', newLang);
    localStorage.setItem('language', newLang);
    this.translate.use(newLang);

    this.setLanguage(newLang);
  }

  private setLanguage(lang: string) {
    // Add or remove RTL and LTR classes based on the selected language
    if (lang === 'ar') {
      this.renderer.addClass(document.body, 'rtl');
      this.renderer.removeClass(document.body, 'ltr');
    } else {
      this.renderer.removeClass(document.body, 'rtl');
      this.renderer.addClass(document.body, 'ltr');
    }
  }
}
