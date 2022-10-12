import AnotherComponent from "./AnotherComponent"

function FirstComponent() {
	// comentário!

	// aqui fica a implementação da função (o que eu quero que aconteça)

	const name = "Charlie";
  return (
		// aqui fica o que vai acontecer e onde vai aparecer a mudança que eu implementei acima

		<div className="firstComponent">
			{/* esse modo de escrever tag aqui dentro é o JSX */}
			<p>meu primeiro componente!</p>
			{2 + 2}
			<p>Nome: {name}</p>
			<AnotherComponent />
		</div>
	);
}

export default FirstComponent