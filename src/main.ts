import { Component, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { Mainpage } from './app/mainpage/mainpage';

@Component({
  selector: 'app-root',
  template: `
   <app-mainpage></app-mainpage>
  `,
  imports:[Mainpage]
})
export class App {
  name = 'Angular';
  counter = signal(0);
}

bootstrapApplication(App);
