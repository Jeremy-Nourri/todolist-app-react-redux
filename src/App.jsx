import NewProductForm from './components/NewProductForm'
import ProductList from './components/ProductList'

import './App.css'

function App() {

  return (
    <>
      <header>
        <h1>Application de gestion de produits</h1>
      </header>
      <main>
        <NewProductForm />
        <ProductList />
      </main>

    </>
  )
}

export default App
