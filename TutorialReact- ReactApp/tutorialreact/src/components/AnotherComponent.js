const AnotherComponent = () => {
  
  let contador = 0
  const handleClick = () => {
    contador+=1
    console.log(contador);
  }

  return (
    <div>
      <p>Segundo componente</p>
      <button onClick={handleClick}>Evento de clique</button>
      <hr />
      <button onClick={() => console.log("teste")}>Evento no elemento</button>
    </div>
  )
} 

export default AnotherComponent;