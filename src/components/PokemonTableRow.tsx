import { IPokemon } from "../types/pokemon.types";
import EditIcon from '../assets/edit.svg';
import DeleteIcon from '../assets/delete.svg';

interface PokemonTableRowProps {
  pokemon: IPokemon,
  onDelete: (id: number | undefined) => void,
  onEdit: (id: number | undefined) => void;
}

const PokemonTableRow: React.FC<PokemonTableRowProps> = ({
  pokemon,
  onDelete,
  onEdit
}) => (
  <>
    <div className="item">{pokemon.name}</div>
    <div className="item"><img alt={pokemon.name} src={pokemon.image}/></div>
    <div className="item">{pokemon.attack}</div>
    <div className="item">{pokemon.defense}</div>
    <div className="item action-item">
      <div className="action-icon" onClick={() => onEdit(pokemon.id)}>
        <img src={EditIcon} className="icon purpleish" alt={`edit-${pokemon.id}`}/>
      </div>
      <div className="action-icon" onClick={() => onDelete(pokemon.id)}>
        <img src={DeleteIcon} className="icon purpleish" alt={`delete-${pokemon.id}`}/>
      </div>
    </div>
  </>
);

export default PokemonTableRow;