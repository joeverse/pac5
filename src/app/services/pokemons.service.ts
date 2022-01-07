import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  constructor(private http: HttpClient) {}

  getAllPokemons(): Observable<Pokemon> {
    return this.http.get<Pokemon>(
      'https://pokeapi.co/api/v2/pokemon?limit=50&offset=200'
    );
  }
  getPokemonById(id: String): Observable<Pokemon> {
    return this.http.get<Pokemon>('https://pokeapi.co/api/v2/pokemon/' + id);
  }
}

/* 

  getAllPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(
      'https://pokeapi.co/api/v2/pokemon?limit=50&offset=200'
    );
  }

  getPokemonById(id: String): Observable<Pokemon> {
    return this.http.get<Pokemon>('https://picsum.photos/id/' + id + '/info');
  }
"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
*/
