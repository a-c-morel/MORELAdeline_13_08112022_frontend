import React from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from "./app/store"
import App from './App'
import './index.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar';

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <BrowserRouter>
    <Provider store={ store }>
      <React.StrictMode>
          <Navbar />
          <App />
          <Footer />
      </React.StrictMode>
    </Provider>
  </BrowserRouter>
)
