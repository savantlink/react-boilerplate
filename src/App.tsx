import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import * as Page from './pages'
import { AppRoutes } from './services/routes'
import { ScrollToTop } from './utils'

function App() {
  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path={AppRoutes.home} element={<Page.HomePage />} />
            <Route path="*" element={<Navigate to={AppRoutes.home} replace />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  )
}

export default App
