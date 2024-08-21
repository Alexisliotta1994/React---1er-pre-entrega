import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="d-flex">
      <NavBar />
      <div className="flex-grow-1 p-3">
        <ItemListContainer greetings="Bienvenido al ecommerce"/>
      </div>
  </div>
  )
}

export default App
