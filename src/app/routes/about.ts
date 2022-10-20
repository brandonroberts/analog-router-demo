import { defineRouteMeta } from "@analogjs/router";
import { Component } from "@angular/core";

export const routeMeta = defineRouteMeta({
  title: 'About Analog',
  canActivate: [
    () => {
      console.log('about canactivate guard');
      return true;
    }
  ]
});

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <h2>About Analog</h2>
  `
})
export default class AboutPageComponent { }
