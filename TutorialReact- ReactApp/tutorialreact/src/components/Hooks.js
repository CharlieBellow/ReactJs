import { useState, useEffect } from "react"

// implementação da função (o que eu quero que aconteça)
const Hooks = () => {
  
  let idade = 30;

  const [novaIdade, setNovaIdade] = useState(40); 


  const changeAge = () => {
    idade = 40
    console.log(idade);
  }

  const changeNewAge = () => {
    setNovaIdade(45)
    console.log(idade);
  }

  useEffect(() => {
    console.log("testando");
  })
  
  return (
    // o que vai acontecer e onde vai aparecer a mudança que eu implementei acima
    <div>
      <p>Idade: {idade}</p>
      <button onClick={changeAge}>Mudar Idade</button>

      <p>IdadeHook: {novaIdade}</p>
      <button onClick={changeNewAge}>Mudar nova Idade</button>
    </div>
  )
}
export default Hooks