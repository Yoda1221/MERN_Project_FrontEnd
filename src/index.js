import App            from './App'
import React          from 'react'
import { store }      from './app/store'
import { Provider }   from 'react-redux'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './sass/style.scss'

createRoot(document.getElementById('root'))
.render(
  <React.StrictMode>
    <Provider store={ store } >
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
