export interface IPokemon {
  id?: number,
  name: string;
  image: string;
  type: string;
  attack: number;
  defense: number;
  hp: number;
  id_author?: number;
}