import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import Post from './components/Post'
import Section from './components/Section'
import Footer from './components/Footer'




function App() {

  return (
    <>
    <Header />
    <Post />
    <Section />
    <Footer/>
    
      
    </>
  )
}

export default App


