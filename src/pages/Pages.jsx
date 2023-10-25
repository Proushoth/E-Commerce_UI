import React from 'react'
import Home from '../components/mainPage/Home'
import FlashDeals from '../components/flashDeals/flashDeals'
import TopCate from '../components/top/TopCate'
import NewArrivals from '../Common/newarrivals/NewArrivals'
import Discount from '../components/discount/Discount'


const Pages = ({productItems,cartItem,addToCart,shopItems}) => {
  return (
    <>
        <Home cartItem={cartItem}/>
        <FlashDeals productItems ={productItems} addToCart={addToCart}/>
        <TopCate/>
        <NewArrivals/>
        <Discount/>
    </>
  )
}

export default Pages