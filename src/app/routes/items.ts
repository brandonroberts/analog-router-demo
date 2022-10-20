import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h2>Items</h2>

    <router-outlet></router-outlet>
  `,
})
export default class ItemsComponent {}