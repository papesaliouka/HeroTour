import {Component, OnInit} from '@angular/core';

import {Hero} from '../hero';

import {MessageService} from '../message.service';

import {HeroService} from '../hero.service';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

    heroes: Hero[] = [];


    constructor(private heroService: HeroService, private messageService: MessageService) {}

    selectedHero?: Hero;
    onSelect(hero: Hero): void {
        this.selectedHero = hero
        this.messageService.add(`HeroesComponent: selected hero id=${hero.id}`)
    }

    getHeroes(): void {
        this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes)
    }

    ngOnInit(): void {
        this.getHeroes()
    }

}
