import React from "react";
import { useContext } from "react";
import { goToDetail} from "../../Router/coordinator";
import GlobalContext from "../../contexts/GlobalContext";
import { useHistory } from 'react-router-dom';
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import styled from "styled-components";


const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
`

function PokedexPage() {
  const history = useHistory()
  const {states, requests} = useContext(GlobalContext)


  const pokedexList = states.pokedex.map((pokemon)=>{
    return(
      <PokemonCard key={pokemon.url}
      name={pokemon.name}
      order={pokemon.order}
      url={pokemon.url}
      add={()=> requests.addPokemon(pokemon)}
      det={()=> goToDetail(history, pokemon.name)}
      del={()=> requests.removePokedex(pokemon)}
    />
    )
  })

  return (
    <Div >
      {pokedexList === [] ? <p>Loading</p> : pokedexList}
    </Div>
  );
}

export default PokedexPage;
