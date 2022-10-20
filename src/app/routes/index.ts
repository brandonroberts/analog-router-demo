import { defineRouteMeta } from "@analogjs/router";
import { Component } from "@angular/core";

export const routeMeta = defineRouteMeta({
  title: 'Welcome'
});

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <h2>Welcome</h2>
  `
})
export default class HomePageComponent { }
