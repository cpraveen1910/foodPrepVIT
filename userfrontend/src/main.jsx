import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from "react-router-dom"; // ⬅ change this
import './index.css'
import App from './App.jsx'
import StoreContextProvider from './context/StoreContext.jsx'

createRoot(document.getElementById('root')).render(
  <HashRouter>
      <StoreContextProvider>
        <App />
      </StoreContextProvider>
  </HashRouter>,
)
