import React from 'react'

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom'

// Layouts
import RootLayout from './layouts/RootLayout.tsx'

// Pages
import Home from './features/home/Home.tsx'
import UsersList from './features/users/UsersList.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='users'>
          <Route index element={<UsersList />} />
        </Route>
      </Route>
      <Route path='*' element={<h1>Page not found.</h1>} />
    </>
  )
)

const App: React.FC = () => {
  return <RouterProvider router={router} />
}

export default App
