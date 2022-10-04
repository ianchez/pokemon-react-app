import { useState, useEffect } from 'react';
import { IPokemon } from '../types/pokemon.types';
import { getAllPokemon } from '../api/pokemon.api';

const usePokemonData = () => {
  const [ pokemonArr, setPokemonArr ] = useState<IPokemon[]>([]);

  const fetch = () =>
    getAllPokemon().then(json => setPokemonArr(json));

  useEffect(() => {
    fetch();
  }, [])

  return { pokemonArr, setPokemonArr, refetch: fetch };
};

export default usePokemonData;