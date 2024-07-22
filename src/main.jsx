import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import Notfound from './components/Notfound.jsx'
import Mainpage from './components/Mainpage.jsx'
import CartPage from './components/Cartpage.jsx'
import Shoppage from './components/Shoppage.jsx'
import Defaultshop from './components/Deafultshop.jsx'

const router = createBrowserRouter([{
    path:"/",
    element:<App/>,
    children:[{index:true,element:<Mainpage/>}, {path:'cart', element:<CartPage/>},{path:'shop/:name',element:<Shoppage/>},{path:'shop',element:<Defaultshop/>}],
    errorElement:<Notfound/>
},
])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}/>)
