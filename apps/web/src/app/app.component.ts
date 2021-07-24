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
  result: any;

  constructor(private readonly http: HttpClient) {}

  load() {
    fetch('http://localhost:3333/api/users')
      .then((res) => res.json())
      .then((res) => (this.result = res));

    // this.http.get('http://localhost:3333/api/users').subscribe((res) => {
    //   this.result = res;
    // });

    // this.result = [
    //   //
    //   { hello: 'World', time: Date.now() },
    // ];
  }
}
