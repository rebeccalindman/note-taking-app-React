import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { JSX } from 'react';

function App(): JSX.Element {

  return (
    <>
      <Header /> {/* includes Navbar */}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
