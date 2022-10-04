import React, { useState, useMemo } from 'react';
import { createPokemon, deletePokemon, updatePokemon } from '../api/pokemon.api';
import usePokemonData from '../hooks/usePokemon';
import PokemonForm from '../components/PokemonForm';
import PokemonTable from '../components/PokemonTable';
import { IPokemon } from '../types/pokemon.types';
import PlusIcon from './../assets/plus.svg';
import SearchIcon from './../assets/search.svg';
import './Main.css';

const MainScreen: React.FC = () => {
  const { pokemonArr, refetch: refetchPokemonData } = usePokemonData();
  const [ createNewPoke, setCreateNewPoke ] = useState(false);
  const [ searchString, setSearchString ] = useState('');
  const [ selectedPokeId, setSelectedPokeId ] = useState(0);

  const selectedPoke = Boolean(selectedPokeId) && pokemonArr.find(poke => poke.id === selectedPokeId);
  const filteredPokeList = useMemo(() =>
    pokemonArr.filter(poke => poke.name.toLowerCase().includes(searchString.toLowerCase()))
  , [pokemonArr, searchString]);

  const handleCreateNewPoke = (newPokemon: IPokemon) => {
    createPokemon(newPokemon)
      .then(() => {
        setCreateNewPoke(false);
      }).then(() => {
        refetchPokemonData();
      });
  }

  const handleDeletePoke = (id: number | undefined) => {
    if (!id) return;
    
    deletePokemon(id)
      .then((response) => {
        if (response.success) {
          refetchPokemonData();
        }
      });
  }

  const handleEditPoke = (pokemon: IPokemon, id: number | undefined) => {
    if (!id) return;

    updatePokemon(pokemon, id)
      .then(() => {
        setSelectedPokeId(0);
        refetchPokemonData();
      });
  }

  const handleOpenEditPoke = (id: number | undefined) => {
    const selectedPoke = pokemonArr.find(pkm => pkm.id === id);
    if (id && selectedPoke) {
      setSelectedPokeId(id);
    }
  }

  const handleCloseNewPokeForm = () => {
    setCreateNewPoke(false);
    setSelectedPokeId(0);
  };

  return (
    <div className="main-screen">
      <h2>Listado de Pokemon</h2>

      <section className="input-section">
        <div className="icon-input-container">
          <img src={SearchIcon} alt="search" className="icon gray" />
          <input
            className="icon-input"
            placeholder="Buscar"
            value={searchString}
            onChange={({ target }) => setSearchString(target.value)}
          />
        </div>
        <button onClick={() => setCreateNewPoke(true)}>
          <img src={PlusIcon} alt="+" className="icon white"/>
          Nuevo
        </button>
      </section>

      {(createNewPoke || Boolean(selectedPokeId)) && 
        <PokemonForm
          handleCreate={handleCreateNewPoke}
          handleEdit={handleEditPoke}
          handleClose={handleCloseNewPokeForm}
          selectedPoke={selectedPoke}
        />
      }

      {Boolean(pokemonArr.length) &&
        <PokemonTable
          dataArray={filteredPokeList}
          handleDelete={handleDeletePoke}
          handleOpenEdit={handleOpenEditPoke}
        />
      }
    </div>
  );
}

export default MainScreen;
