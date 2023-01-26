import React from 'react'
import "./Product.css"

export default function Product() {
    const ProductData = [
        {
            title:"Card Title",
            CardText:"Some quick example text to build on the card title and make up the bulk of the card's content",
            cardImage:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            title:"Card Title",
            CardText:"Some quick example text to build on the card title and make up the bulk of the card's content",
            cardImage:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            title:"Card Title",
            CardText:"Some quick example text to build on the card title and make up the bulk of the card's content",
            cardImage:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        },
        
        
    ]
  return (
    <div className='Product w-full h-auto '>
        <div className="title">
            <h2 className='lg:text-4xl md:text-xl sm:text-[16px] font-bold'>Featured Products</h2>
        </div>
        <div className="productCard w-full h-auto  grid lg:grid-cols-3 md:grid-cols-2 gap-2 sm:grid-cols-1 place-items-center">
        
            {ProductData.map((item)=>{
                return(
                    <div class="card" style={{width: "18rem"}}>
                    <img src={item.cardImage} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{item.title}</h5>
                        <p class="card-text">{item.CardText}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                )
            })}
        
      
        
            
            
        </div>
    </div>
  )
}
