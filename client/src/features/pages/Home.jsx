import React from 'react'
import Navbar from '../navbar/Navbar'
import ProductList from '../produce-list/components/ProductList'

function Home() {
  return (
    <div>
        <Navbar>
            <ProductList></ProductList>
        </Navbar>
    </div>
  )
}

export default Home