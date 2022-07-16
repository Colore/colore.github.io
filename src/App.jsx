import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router'
import { HashRouter } from 'react-router-dom'
import Layout from 'components/Layout/Layout'

import Loading from 'pages/Loading/Loading'

import './App.css'

const Documentation = lazy(() => import('pages/Documentation/Documentation'))
const Wiki = lazy(() => import('pages/Wiki/Wiki'))

function App () {
  return (
    <Suspense fallback={<Loading />}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Wiki page="Home" />} />
            <Route path="documentation" element={<Documentation />} />
            <Route path="/:page" element={<Wiki />} />
            <Route path="/*" element={<Wiki />} />
          </Route>
        </Routes>
      </HashRouter >
    </Suspense>
  )
}

export default App
