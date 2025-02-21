import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import Post from './components/Post'
import Section from './components/Section'
import Footer from './components/Footer'
import Text from './components/Text'



function App() {

  return (
    <>
    <div className='mt-3 xl:px-50 flex flex-col justify-center gap-10 w-full'>
      <Header />
      <div className='mx-3 flex flex-col gap-5'>
        <Post />
        <Section />
        <Text />
        <Footer/>
      </div>
    </div>
    </>
  )
}

export default App


