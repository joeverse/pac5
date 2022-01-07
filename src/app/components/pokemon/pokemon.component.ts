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
  constructor(
    private pokemonsService: PokemonsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get(
      'id'
    ) as string;
    console.log('Identifier -->', identifier);
    this.pokemonsService.getPokemonById(identifier).subscribe((pokemon) => {
      if (!pokemon) {
        return this.router.navigateByUrl('/');
      }

      this.pokemon = pokemon;
      console.log('Pokemon -->', this.pokemon);
      this.sprites = pokemon.sprites;
      console.log('Image -->', this.sprites);
    });
  }
}
