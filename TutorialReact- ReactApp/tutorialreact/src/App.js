
import './App.css';
import FirstComponent from './components/FirstCompanent'
import AnotherComponent from './components/AnotherComponent'

import Images from "./components/Images"
import Hooks from "./components/Hooks.js"

import Lists from "./components/Lists.js"

import RenderCond from './components/RenderCond'

import Fragment from './components/Fragment.js'

import Container from "./components/Container.js";



function App() {
	
	return (
		<div className="App">
			<h2>Helo World!</h2>
			<FirstComponent />
			<AnotherComponent />
			<Images />
      <Hooks />
      <Lists />
      <RenderCond x={8} y={10} />
      <Fragment />
      <Container>
        <h1>Este é filho do container</h1>
      </Container>
		</div>
	);
}

export default App;
