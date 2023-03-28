import { useRoutes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Home from './components/Home/Home'
import Book from './components/Book/Book'
import Footer from './components/footer/Footer'
import Select from './components/Select/Select'

function App () {
  const routes = useRoutes([
    { path: '', element: <Home /> },
    { path: 'book', element: <Book /> }
  ])

  return (
    <>
      <Header />
      <div className='content'>
        <Select />
        {routes}
      </div>
      <Footer />
    </>
  )
}

export default App
