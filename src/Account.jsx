import React from 'react'
import { Route, Routes } from 'react-router'
import { accountRoutes } from './routes/routes'

const Account = () => {
  return (
    <div>
        <Routes>
            {accountRoutes.map(({ path, element }, key) => (
              <Route {...{ path, element, key }} />
            ))}
          </Routes>
    </div>
  )
}

export default Account