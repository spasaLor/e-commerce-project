import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './components/Landing.jsx'
import Catalogue from './components/Catalogue.jsx'
import App from './App.jsx'
import Cart from './components/Cart.jsx'

const routes = createBrowserRouter([{
  path:"/",
  element: <App/>,
  children:[{path:"/home", element:<Landing/>},{path:"/catalogue/:section",element : <Catalogue/>},{path:"/basket", element: <Cart/>}]
},

{
  path:"/about",
  //element:about
},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)
