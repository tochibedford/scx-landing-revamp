import type { NextPage } from 'next'
import React, { useEffect } from 'react'
import IndexHome from './IndexHome'
import dynamic from 'next/dynamic'


// const buy_button = dynamic(() => import('@shopify/buy-button-js'), {
//   ssr: false,
// })
const DynamicIndexHome = dynamic<React.ComponentProps<typeof IndexHome>>(() => import('./IndexHome'))

const Home: NextPage = () => {
  useEffect(() => {

    // console.log(Client)
  })

  return (
    <>
      <DynamicIndexHome />
    </>
  )
}

export default Home
