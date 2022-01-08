import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon.interface';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  pokemon: Pokemon | undefined;
  sprites: any;
  abilities: any;
  abilitiesArray: any;
  abilitiesStringArray: any;
  moves: any;
  movesStringArray: any;
  showAllDetails = false;
  constructor(
    private pokemonsService: PokemonsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get(
      'id'
    ) as string;
    this.pokemonsService.getPokemonById(identifier).subscribe((pokemon) => {
      if (!pokemon) {
        return this.router.navigateByUrl('/');
      }
      this.pokemon = pokemon;
      this.sprites = pokemon.sprites;
      this.abilities = pokemon.abilities;
      this.abilitiesStringArray = this.abilities.map(
        (abilitiesObject: { ability: { abilityName: any } }) => {
          return abilitiesObject.ability;
        }
      );
      this.moves = pokemon.moves;
      this.movesStringArray = this.moves.map(
        (movesObject: { move: { moveName: any } }) => {
          return movesObject.move;
        }
      );
    });
  }

  loadData() {
    if (this.showAllDetails === false) {
      this.showAllDetails = true;
    } else {
      this.showAllDetails = false;
    }
  }
}
