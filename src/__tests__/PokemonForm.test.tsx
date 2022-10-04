import { render, screen } from '@testing-library/react';
import PokemonForm from '../components/PokemonForm';

describe('renders form section', () => {
  test('shows the form title', () => {
    render(<PokemonForm />);
    const formTitle = screen.getByText(/nuevo pokemon/i);
    expect(formTitle).toBeInTheDocument();
  });

  test('shows the name input', () => {
    render(<PokemonForm />);
    const nameLabel = screen.getByText(/nombre/i);
    expect(nameLabel).toBeInTheDocument();
    const nameInput = screen.getByLabelText(/nombre/i);
    expect(nameInput).toBeInTheDocument();
  });

  test('shows the image input', () => {
    render(<PokemonForm />);
    const imageLabel = screen.getByText(/imagen/i);
    expect(imageLabel).toBeInTheDocument();
    const imageInput = screen.getByPlaceholderText(/url/i);
    expect(imageInput).toBeInTheDocument();
  });

  test('shows the type input', () => {
    render(<PokemonForm />);
    const typeLabel = screen.getByText(/tipo/i);
    expect(typeLabel).toBeInTheDocument();
    const typeInput = screen.getByLabelText(/tipo/i);
    expect(typeInput).toBeInTheDocument();
  });

  test('shows the attack range input', () => {
    render(<PokemonForm />);
    const attackLabel = screen.getByText(/ataque/i);
    expect(attackLabel).toBeInTheDocument();
    const attackInput = screen.getByLabelText(/ataque/i);
    expect(attackInput).toBeInTheDocument();
  });

  test('shows the defense range input', () => {
    render(<PokemonForm />);
    const defenseLabel = screen.getByText(/defensa/i);
    expect(defenseLabel).toBeInTheDocument();
    const defenseInput = screen.getByLabelText(/defensa/i);
    expect(defenseInput).toBeInTheDocument();
  });

  test('shows the hp range inputt', () => {
    render(<PokemonForm />);
    const hpLabel = screen.getByText(/hp/i);
    expect(hpLabel).toBeInTheDocument();
    const hpInput = screen.getByLabelText(/hp/i);
    expect(hpInput).toBeInTheDocument();
  });

  test('shows the save button', () => {
    render(<PokemonForm />);
    const saveButton = screen.getByText(/guardar/i);
    expect(saveButton).toBeInTheDocument();
  });

  test('shows the cancel button', () => {
    render(<PokemonForm />);
    const cancelButton = screen.getByText(/cancelar/i);
    expect(cancelButton).toBeInTheDocument();
  });
});
