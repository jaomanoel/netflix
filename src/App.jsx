import React, {useEffect, useState} from 'react'
import Header from './Components/Header';
import PreviewMovie from './Components/PreviewMovie';
import Movies from './Components/MoviesRow';
import Footer from './Components/Footer';

import categorias from './tmdb';

import './CSS/App.css'

function App() {
  return (
    <div className='page'>
      <Header />
      <PreviewMovie />
      <section className='lists'>
        {categorias.map((categoria) => (
          <Movies 
          key={categoria.name} 
          title={categoria.title} 
          path={categoria.path} />
        ))}
      </section>
      <Footer />
</div>
  )
}

export default App
