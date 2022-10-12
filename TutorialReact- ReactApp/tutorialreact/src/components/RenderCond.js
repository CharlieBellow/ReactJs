// ao colocar o props aqui, o componente fica aceitando propriedades. Que devem ser passadas lá onde implementa o componente <RenderCond x={5}/> e esse props vira um objeto. pra acessar coloca props.x
const RenderCond = ({x, y}) => {
  

  return (
    //&& = então execute isso
    <div>{x > 5 && <p>x é maior que 5</p>}
      
		{/*// if else: usa if ternário*/}
    {x > 5 ? <p>x é um número alto</p> : <p>x é um número baixo</p>}
      <p> O valor de Y é: {y}</p>
    </div>
    
  
  );
}

export default RenderCond