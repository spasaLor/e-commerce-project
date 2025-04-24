import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './components/Landing.jsx'

const routes = createBrowserRouter([{
  path:"/",
  element: <Landing/>
},
{
  path:"/catalogue/:section",
  //element : <Catalog/> (woman men kids)
},
{
  path:"/about",
  //element:about
},
{
  path:"/basket",
  //element:basket
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)
