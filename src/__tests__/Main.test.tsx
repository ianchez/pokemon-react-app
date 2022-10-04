import { render, screen } from '@testing-library/react';
import MainScreen from '../screens/Main.screen';

describe('renders main screen', () => {
  test('shows main screen title', () => {
    render(<MainScreen />);
    const screenTitle = screen.getByText(/listado de pokemon/i);
    expect(screenTitle).toBeInTheDocument();
  });

  test('renders search input', () => {
    render(<MainScreen />);
    const searchInput = screen.getByPlaceholderText(/buscar/i);
    expect(searchInput).toBeInTheDocument();
  });

  test('renders new pokemon button', () => {
    render(<MainScreen />);
    const newPokemonButton = screen.getByText(/nuevo/i);
    expect(newPokemonButton).toBeInTheDocument();
  });
});

