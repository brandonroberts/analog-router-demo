import { defineRouteMeta } from "@analogjs/router";
import { Component } from "@angular/core";

export const routeMeta = defineRouteMeta({
  title: 'Page Not Found'
});

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <h2>Page Not Found</h2>
  `
})
export default class NotFoundPageComponent { }
