import React from 'react'
import Pokemon from './Pokemon'

const PokemonCards = ({PokemonData ,key}) => {
  return (
    <div>
      <li className='pokemon-card' key={key}>
        <figure>
          <img 
          src={PokemonData.sprites.other.dream_world.front_default}
          alt={PokemonData.name}
          className='pokemon-image'
          />
        </figure>
        <h1 className='pokemon-name'>{PokemonData.name}</h1>
        <div className='pokemon-info pokemon-highlight'>
        <p>
        {PokemonData.types.map((curElem)=>(curElem.type.name)).join(", ")}
        </p>
        </div>

        <div className='grid-three-cols'>
        <p className='pokemon-info'>
          Height: <span>{PokemonData.height}</span>
        </p>
        <p className='pokemon-info'>
          Weight: <span>{PokemonData.weight}</span>
        </p>
        <p className='pokemon-info'>
          Speed: <span>{PokemonData.stats[5].base_stat}</span>
        </p>
      </div>

      <div className='grid-three-cols'>
      <div className='pokemon-info'>
        <p>{PokemonData.base_experience}</p>
        <span>Experience: </span>
      </div>
      <div className='pokemon-info'>
        <p>{PokemonData.stats[1].base_stat}</p>
        <span>Attack: </span>
      </div>
      <div className='pokemon-info'>
        <p>
          {PokemonData.abilities.map((curElem)=>(curElem.ability.name))
          .slice(0,1)
          .join(", ")}
        </p>
        <span>Abilities: </span>
      </div>
      </div>
      </li>
    </div>
  )
}

export default PokemonCards
