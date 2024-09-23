import { useState } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Contact from './pages/Contact'
import About from './pages/AboutPage'
import Home from "./pages/Home"
import ErrorPage from './pages/ErrorPage'
import Header from './components/Layout/Header'
import FeaturePage from "./pages/FeaturePage"
import Hero from './pages/Hero'

// const router = createBrowserRouter([ 
//  {
//   errorElement:<ErrorPage/>,
//   children:[
//     {
//       path:'/',
//       element:<Home />,
//     },
//     {
//       path:'contact',
//       element:<Contact/>,
//     },
//     {
//       path:'about',
//       element:<About/>,
//     },
//    ]
//  }
// ])
function App() {
  const [count, setCount] = useState(0)

  return (
    //  <RouterProvider router={router}></RouterProvider>
    <>
    <Header />
    <Hero />
    <About/>
    <FeaturePage />
    </>
  
  )
}

export default App
