import Item from './components/item';
import Card from './components/Card';

const App = () => {
  return (
    <>
      <h1>minha primeira aplicação com React</h1>
      <ul>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </ul>
      <Card />
      
      <div class="input-group">
        <span class="input-group-text">Cálculo</span>
        <textarea class="form-control" aria-label="With textarea"></textarea>
      </div>
    </>
  )
}

export default App;

/* export default function App (){
return (
  <h1>Hello word</h1>
)
} */
