import React from 'react'

const ProductGallery = () => {
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
    <div className='w-[80%] h-screen  overflow-auto'>
        <div className="swicth w-full h-11 border-2 border-black"></div>
        <div className="product w-full h-auto   grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center gap-4">



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

export default ProductGallery