import { render, screen } from '@testing-library/react';
import PokemonTableRow from '../components/PokemonTableRow';
import EditIcon from '../assets/edit.svg';
import DeleteIcon from '../assets/delete.svg';

const mockPokemon = {
  id: 1,
  name: 'Charmander',
  type: 'Fire',
  image: 'https://w7.pngwing.com/pngs/9/929/png-transparent-pokemon-charmander-pikachu-pokemon-x-and-y-charmander-charizard-charmander-food-orange-vertebrate-thumbnail.png',
  attack: 40,
  defense: 32,
  hp: 10,
}

describe('renders pokemon row', () => {
  test('shows pokemon name', () => {
    render(<PokemonTableRow pokemon={mockPokemon}/>);
    const pokemonName = screen.getByText(/charmander/i);
    expect(pokemonName).toBeInTheDocument();
  });

  test('shows pokemon image', () => {
    render(<PokemonTableRow pokemon={mockPokemon}/>);
    const pokemonImage = screen.getByAltText(/charmander/i);
    expect(pokemonImage).toBeInTheDocument();
    expect(pokemonImage).toHaveAttribute('src', mockPokemon.image);
  });

  test('shows pokemon attack', () => {
    render(<PokemonTableRow pokemon={mockPokemon}/>);
    const pokemonAttack = screen.getByText(/40/i);
    expect(pokemonAttack).toBeInTheDocument();
  });

  test('shows pokemon defense', () => {
    render(<PokemonTableRow pokemon={mockPokemon}/>);
    const pokemonDefense = screen.getByText(/32/i);
    expect(pokemonDefense).toBeInTheDocument();
  });

  test('shows edit icon button', () => {
    render(<PokemonTableRow pokemon={mockPokemon}/>);
    const editIconButton = screen.getByAltText(/edit-1/i);
    expect(editIconButton).toBeInTheDocument();
    expect(editIconButton).toHaveAttribute('src', EditIcon);
  });

  test('shows delete icon button', () => {
    render(<PokemonTableRow pokemon={mockPokemon}/>);
    const deleteIconButton = screen.getByAltText(/delete-1/i);
    expect(deleteIconButton).toBeInTheDocument();
    expect(deleteIconButton).toHaveAttribute('src', DeleteIcon);
  });
});