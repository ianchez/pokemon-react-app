import { IPokemon } from "../types/pokemon.types";
import PokemonTableRow from "./PokemonTableRow";

interface PokemonTableProps {
  dataArray: IPokemon[],
  handleDelete: (id: number | undefined) => void,
  handleOpenEdit: (id: number | undefined) => void;
}

const PokemonTable: React.FC<PokemonTableProps> = ({
  dataArray,
  handleDelete,
  handleOpenEdit
}) => {
  return (
    <section className="pokemon-table">
      <div className="item col-header">Nombre</div>
      <div className="item col-header">Imagen</div>
      <div className="item col-header">Ataque</div>
      <div className="item col-header">Defensa</div>
      <div className="item col-header">Acciones</div>

      {dataArray.map(pokemon =>
        <PokemonTableRow
          key={`poke-${pokemon.id}-row`}
          pokemon={pokemon}
          onDelete={handleDelete}
          onEdit={handleOpenEdit}
        />
      )}
    </section>
  );
}

export default PokemonTable;