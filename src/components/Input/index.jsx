import './style.css'
import {useEffect, useState} from 'react'

const Input = props => {
  const { defaultState } = props;
  const [state, setState] = useState(defaultState);

  useEffect(()=>{
    console.log('useEffect');
  },[])
  useEffect(()=>{
    console.log('useEffect do state');
  },[state])

  const teste = parametro => {
    setState(parametro)
  }

  return (
    <>
      <p>{state}</p>
      <input 
        type="text"
        className="input"
        value={state}
        onChange={e => teste(e.target.value)}
      />
    </>
  )
}

export default Input;