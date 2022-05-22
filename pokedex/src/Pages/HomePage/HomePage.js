import React, { useContext, useEffect } from "react";
import GlobalContext from "../../contexts/GlobalContext";
import { useHistory } from 'react-router-dom'
import {Div} from './style'
import CardHome from '../../components/Card/Card'


function HomePage() {
  const {states, requests} = useContext(GlobalContext)
  const history = useHistory();

  const goToDetalhes = (name)=>{
    history.push(`/detail/${name}`)
  }

  useEffect(()=>{
    requests.getPokemons()
  }, [requests])

  let arrayPokemons = states.pokemons.results && states.pokemons.results
  .filter((pokemon) => {
    const onPokedex = states.pokedex && states.pokedex.some((pokemonPokedex) => {
        return pokemonPokedex.name === pokemon.name
    })
    if (onPokedex) {
        return false
    } else {
        return true
    }
})

  return (
    <>
    <Div >
    
    {arrayPokemons === [] ? <p>Loading</p> : arrayPokemons && arrayPokemons.map((pokemon)=>{
    return(
      <CardHome key={pokemon.name}
        name={pokemon.name}
        order={pokemon.order}
        url={pokemon.url}
        add={()=> requests.addPokemon(pokemon)}
        det={()=> goToDetalhes(pokemon.name)}
        
      />
    )
  })} 
    </Div>
    </>
  );
}

export default HomePage;