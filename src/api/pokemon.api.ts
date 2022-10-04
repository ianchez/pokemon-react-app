import { IPokemon } from "../types/pokemon.types";

const BASE_URL = 'https://bp-pokemons.herokuapp.com/';
const ID_AUTHOR = 1;

export const getAllPokemon = () => 
  fetch(`${BASE_URL}?idAuthor=${ID_AUTHOR}`)
    .then(res => res.json())
    .catch(err => console.log('Error', err));

export const createPokemon = (data: IPokemon) =>
  fetch(`${BASE_URL}?idAuthor=${ID_AUTHOR}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...data,
      idAuthor: ID_AUTHOR,
    })
  })
    .then(res => res.json())
    .catch(err => console.log('Error', err));

export const deletePokemon = (id: number) =>
  fetch(`${BASE_URL}${id}`, {
    method: 'DELETE'
  })
    .then(res => res.json())
    .catch(err => console.log('Error', err));

export const updatePokemon = (data: IPokemon, id: number) => {
  const payload = data;
  delete payload.id;
  delete payload.id_author;

  return fetch(`${BASE_URL}${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...payload,
      idAuthor: ID_AUTHOR,
    })
  })
    .then(res => res.json())
    .catch(err => console.log('Error', err));
};

