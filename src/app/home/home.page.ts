import { Component, Renderer2 } from '@angular/core';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  isDarkMode: boolean = false;

  constructor(private renderer: Renderer2, private platform: Platform) {}

  // Lifecycle method called after the component has been initialized
  ionViewDidEnter() {
    // Get the saved theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isDarkMode = savedTheme === 'dark';  // Set dark mode based on saved preference
    }
    this.applyTheme(); // Apply the theme based on the saved preference
  }

  // Method to toggle between light and dark theme
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode; // Toggle theme
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light'); // Save theme to localStorage
    this.applyTheme(); // Apply the new theme
  }

  // Apply the theme by adding/removing the 'dark' class on the body
  applyTheme() {
    if (this.isDarkMode) {
      document.body.classList.add('dark'); // Add the 'dark' class for dark mode
    } else {
      document.body.classList.remove('dark'); // Remove the 'dark' class for light mode
    }
  }
}
