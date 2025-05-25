export default function Content() {
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
              <img className="minus" src="\assets\images\icon-minus.svg" alt="" />
              <p className="count-number">0</p>
              <img className="plus" src="\assets\images\icon-plus.svg" alt="" />
            </div>
            <button className="add-cart"><img src="\assets\images\icon-cart.svg" alt="" />Add to cart</button>
          </div>
        </div>
      </div>
    )
}