import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { HomeView } from "./views/HomeView"
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <NavbarWrapper />,
      children: [
        {
          path: "/",
          element: <HomeView />
        },
      ]
    },
  ])

  function NavbarWrapper() {
    return (
      <>
        <header>
          <Navbar />
        </header>

        <main>
          <Outlet />
        </main>

        <footer>
          <Footer />
        </footer>

      </>
    )
  }


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
