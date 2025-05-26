import { useState } from "react"

export default function Content() {
  const [count, setCount] = useState(0)

  const isUndurNull = () =>{
    if(count <= 0){
      setCount(0);
    }else{
      setCount(count-1);
    }
  }
    return(
        <div className="content">
        <div className="sneakers">
          <img className="large-sneakers" src="\assets\images\image-product-1.jpg" alt="" />
          <div className="mini-sneakers">
            <img className="mini" src="\assets\images\image-product-1-thumbnail.jpg" alt="" />
            <img className="mini" src="\assets\images\image-product-2-thumbnail.jpg" alt="" />
            <img className="mini" src="\assets\images\image-product-3-thumbnail.jpg" alt="" />
            <img className="mini" src="\assets\images\image-product-4-thumbnail.jpg" alt="" />
          </div>
        </div>
        <div className="sneakers-info">
          <h3>SNEAKER COMPANY</h3>
          <h1>Fall Limited Edition Sneakers</h1>
          <p className="descr">These low-profile sneakers are your perfect casual wear companion. Featuring a 
          durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
          <div className="promotion">
          <h2>$125.00</h2>
          <p>50%</p>
          </div>
          <h6>$250.00</h6>
          <div className="buying">
            <div className="count">
              <button><img className="minus" onClick={isUndurNull} src="\assets\images\icon-minus.svg" alt="" /></button>
              <p className="count-number">{count}</p>
              <button><img className="plus" onClick={() => setCount(count+1)} src="\assets\images\icon-plus.svg" alt="" /></button>
            </div>
            <button onClick={()=>setCount(count+1)} className="add-cart"><img src="\assets\images\icon-cart.svg" alt="" />Add to cart</button>
          </div>
        </div>
      </div>
    )
}