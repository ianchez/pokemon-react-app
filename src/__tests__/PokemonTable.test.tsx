import { render, screen } from '@testing-library/react';
import PokemonTable from '../components/PokemonTable';

describe('renders the pokemon table section', () => {
  test('shows name col-header', () => {
    render(<PokemonTable dataArray={[]}/>);
    const nameHeader = screen.getByText(/nombre/i);
    expect(nameHeader).toBeInTheDocument();
  });

  test('shows image col-header', () => {
    render(<PokemonTable dataArray={[]}/>);
    const imageHeader = screen.getByText(/imagen/i);
    expect(imageHeader).toBeInTheDocument();
  });

  test('shows attack col-header', () => {
    render(<PokemonTable dataArray={[]}/>);
    const attackHeader = screen.getByText(/ataque/i);
    expect(attackHeader).toBeInTheDocument();
  });

  test('shows defense col-header', () => {
    render(<PokemonTable dataArray={[]}/>);
    const defenseHeader = screen.getByText(/defensa/i);
    expect(defenseHeader).toBeInTheDocument();
  });

  test('shows actions col-header', () => {
    render(<PokemonTable dataArray={[]}/>);
    const actionsHeader = screen.getByText(/acciones/i);
    expect(actionsHeader).toBeInTheDocument();
  });
});