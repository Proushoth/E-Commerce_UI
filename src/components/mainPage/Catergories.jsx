import React from 'react'

const Catergories = () => {
    const data =[
        {
            CatImg:"./images/catergories/cat1.png",
            cateName:"Fashion",
        },

        {
            CatImg:"./images/catergories/cat2.png",
            cateName:"Electronics",
        },
        {
            CatImg:"./images/catergories/cat3.png",
            cateName:"Cars",
        },
        {
            CatImg:"./images/catergories/cat4.png",
            cateName:"Home & Garden",
        },
        {
            CatImg:"./images/catergories/cat5.png",
            cateName:"Gifts",
        },
        {
            CatImg:"./images/catergories/cat6.png",
            cateName:"Music",
        },
        {
            CatImg:"./images/catergories/cat7.png",
            cateName:"Health & Beuty",
        },
        {
            CatImg:"./images/catergories/cat8.png",
            cateName:"Pets",
        },
        {
            CatImg:"./images/catergories/cat9.png",
            cateName:"Baby Toys",
        },
        {
            CatImg:"./images/catergories/cat10.png",
            cateName:"Groceries",
        },
        {
            CatImg:"./images/catergories/cat11.png",
            cateName:"Books",
        },


    ]
  return (
    <>
        <div className="catergory">
            {
                data.map((value,index)=>{
                    return(
                    <div className="box f_flex" key={index}>
                        <img src={value.CatImg} alt="" />
                        <span>{value.cateName}</span>
                    </div>
                )
                })
                
            }
        </div>
    </>
  )
}

export default Catergories