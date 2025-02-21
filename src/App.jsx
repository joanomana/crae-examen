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
      <div className="fixed top-0 xl:left-50 left-0 right-0 xl:right-50 shadow-md rounded-b-lg bg-white xl:pr-3">
        <Header />
      </div>
      <div className="mt-20 xl:px-50 flex flex-col justify-center gap-10 w-full">
        <div className="mx-3 flex flex-col gap-5">
          <Post/>
          <Section />
          <Text />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;



