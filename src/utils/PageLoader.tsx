import { Suspense } from 'react'

import { Outlet } from 'react-router-dom'

import Preloader from './Preloader'

const PageLoader = () => {
  return (
    <Suspense fallback={<Preloader />}>
      <Outlet />
      <h1>Hello</h1>
    </Suspense>
  )
}

export default PageLoader
