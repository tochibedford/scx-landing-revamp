import type { NextPage } from 'next'
import React from 'react'
import IndexHome from './IndexHome'
import dynamic from 'next/dynamic'

const DynamicIndexHome = dynamic<React.ComponentProps<typeof IndexHome>>(()=>import('./IndexHome'))

const Home: NextPage = () => {

  return (
  <>
    <DynamicIndexHome />
  </>
  )
}

export default Home
