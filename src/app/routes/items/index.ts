import { Component, Type } from '@angular/core';

const COMPONENT_IMPORTS: Type<any>[] = [










];

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [COMPONENT_IMPORTS],
  template: `
    <h2>Items List</h2>
  `,
})
export default class ItemsListComponent {}
