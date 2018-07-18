import { Component, ViewChild } from '@angular/core';
import { Hero } from './hero';
import { NgForm } from '../../node_modules/@angular/forms';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  newHeroName: string;
  @ViewChild(HeroesComponent)
  heroesComponent: HeroesComponent;

  constructor(private heroService: HeroService) {
    this.title = 'Tour Of Heroes';
    this.newHeroName = '';
  }

  validateHero(event: any, form: NgForm) {
    let hero: Hero = new Hero();
    hero.name = this.newHeroName;
    this.heroesComponent.heroes.push(hero);
    form.resetForm();
  }

  ngOnInit() {
    this.heroService.loadMock();
  }
}
