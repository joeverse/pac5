import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.interface';
import { PokemonsService } from 'src/app/services/pokemons.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(600),
      ]),
      transition('* => void', [
        animate(600, style({ transform: 'translateX(100%)' })),
      ]),
    ]),
  ],
})
export class PokemonsComponent implements OnInit {
  pokemons: any;
  showSpinner = false;
  pokemon: Pokemon | undefined;
  sprites: any;
  constructor(private pokemonsService: PokemonsService) {}

  ngOnInit(): void {
    this.showSpinner = true;
    this.pokemonsService.getAllPokemons().subscribe((pokemons) => {
      if (pokemons) {
        this.pokemons = pokemons;
        this.showSpinner = false;
      }
    });
  }
}

/*

setTimeout(() => {
      this.pokemonsService
        .getAllPokemons()
        .subscribe((pokemons) => (this.pokemons = pokemons));
      this.showSpinner = false;
    }, 5000);

*/
