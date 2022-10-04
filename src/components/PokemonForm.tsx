import { useState, FormEvent } from "react";
import { IPokemon } from "../types/pokemon.types";
import SaveIcon from '../assets/save.svg'
import CloseIcon from '../assets/close.svg'

interface NewPokemonFormProps {
  handleCreate: (newPokemon: IPokemon) => void,
  handleEdit: (pokemon: IPokemon, id: number | undefined) => void,
  handleClose: () => void,
  selectedPoke: IPokemon | false | undefined,
}

const PokemonForm: React.FC<NewPokemonFormProps> = ({
  handleCreate,
  handleEdit,
  handleClose,
  selectedPoke,
}) => {
  const [ pokemon, setPokemon ] = useState<IPokemon>(selectedPoke || INITIAL_POKEMON_STATE);
  const disableSubmit = !pokemon.name || !pokemon.image || !pokemon.type;

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedPoke) {
      handleEdit(pokemon, selectedPoke.id);
    } else {
      handleCreate(pokemon);
    }
  }

  const handleChange = (key: string, value: string | number) => {
    setPokemon({ ...pokemon, [key]: value });
  }

  return (
    <section className="new-pokemon-form">
      <form onSubmit={handleFormSubmit}>
        <h3>{`${selectedPoke ? 'Editar' : 'Nuevo'} Pokemon`}</h3>

        <div className="full-width-row">
          <div className="input-section">
            <div>
              <label htmlFor="name">Nombre:</label>
              <input
                id="name"
                value={pokemon.name}
                onChange={({ target }) => handleChange('name', target.value)}
              />
            </div>
            <div>
              <label htmlFor="img-url">Imagen:</label>
              <input
                placeholder="url"
                id="img-url"
                value={pokemon.image}
                onChange={({ target }) => handleChange('image', target.value)}
              />
            </div>
            <div>
              <label htmlFor="type">Tipo:</label>
              <input
                placeholder="Bug, Fire, Water, etc..."
                id="type"
                value={pokemon.type}
                onChange={({ target }) => handleChange('type', target.value)}
              />
            </div>
          </div>

          <div className="input-section">
            <div>
              <label htmlFor="atk-range">Ataque:</label>
              {pokemon.attack}
              <input
                type="range"
                id="atk-range"
                step={1}
                value={pokemon.attack}
                onChange={({ target }) => handleChange('attack', parseInt(target.value))}
              />
              100
            </div>
            <div>
              <label htmlFor="def-range">Defensa:</label>
              {pokemon.defense}
              <input
                type="range"
                id="def-range"
                step={1}
                value={pokemon.defense}
                onChange={({ target }) => handleChange('defense', parseInt(target.value))}
              />
              100
            </div>
            <div>
              <label htmlFor="hp-range">HP:</label>
              {pokemon.hp}
              <input
                type="range"
                id="hp-range"
                min={10}
                max={1000}
                step={10}
                value={pokemon.hp}
                onChange={({ target }) => handleChange('hp', parseInt(target.value))}
              />
              1000
            </div>
          </div>
        </div>

        <div className="buttons-section">
          <button
            type="submit"
            disabled={disableSubmit}
            style={{ backgroundColor: disableSubmit ? "lightgray" : "mediumslateblue" }}
          >
            <img src={SaveIcon} alt="[⬇]" className="icon white"/>
            {selectedPoke ? 'Editar' : 'Guardar'}
          </button>
          <button type="button" onClick={handleClose}>
            <img src={CloseIcon} alt="X" className="icon white"/>
            Cancelar
          </button>
        </div>
      </form>
    </section>
  );
}

export default PokemonForm;

const INITIAL_POKEMON_STATE = {
  name: '',
  image: '',
  type: '',
  attack: 0,
  defense: 0,
  hp: 10,
};