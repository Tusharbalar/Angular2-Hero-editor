import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
            <h1>My First Angular 2 App</h1>
            <h2>{{title}}</h2>
            <h3>{{hero.name}} details!</h3>
        `
})
export class AppComponent {
    title = "Tour of Heroes";
    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };
}
export class Hero {
  id: number;
  name: string;
}
