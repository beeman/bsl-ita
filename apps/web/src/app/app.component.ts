import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'bsl-ita-root',
  template: `
    <main class="p-2">
      <button class="btn btn-secondary" (click)="load()">GO</button>
      <pre class="my-2">{{ result | json }}</pre>
    </main>
  `,
})
export class AppComponent {
  result: unknown[] = [];

  constructor(private readonly http: HttpClient) {}

  load() {
    this.result = [
      //
      { hello: 'World', time: Date.now() },
    ];
  }
}
