import { useEffect, useState } from "react"
import Lightbox from "./Lightbox";
import Attribution from "./Attribution"


export default function Content() {
  const [count, setCount] = useState(0)
  const [isCartActive, setIsCartActive] = useState(false)
  const [price, setPrice] = useState('125.00');
  const [sum, setSum] = useState(price)
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  

  useEffect(() => {
    setSum(price * count)
  }, [count])

  const isUndurNull = () => {
    if (count <= 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  }

    const images = [
    "/assets/images/image-product-1.jpg",
    "/assets/images/image-product-2.jpg",
    "/assets/images/image-product-3.jpg",
    "/assets/images/image-product-4.jpg"
  ];

  const thumbnails = [
    "/assets/images/image-product-1-thumbnail.jpg",
    "/assets/images/image-product-2-thumbnail.jpg",
    "/assets/images/image-product-3-thumbnail.jpg",
    "/assets/images/image-product-4-thumbnail.jpg"
  ];

    const [largeImage, setLargeImage] = useState(images[0])
    const [activeMiniImg, setActiveMiniImg] = useState(thumbnails[0])
    const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() =>{
    setActiveMiniImg(thumbnails[currentIndex]);
    setLargeImage(images[currentIndex])
  },[currentIndex])

  const goToNext = () =>{
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

 const goToPrevious = () =>{
    setCurrentIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1)
  }
  
  return (
    <>

        <div className={(openMenu) ? "dark-mobile" : ""}>
          <div className={(isOpen) ? "dark-app-wrapper" : "app-wrapper"}>
        <nav>
          <div className="left-nav">
            <img src="\assets\images\icon-menu.svg" onClick={() => setOpenMenu(true)} className="menu-icon" alt="" />
            <img src="\assets\images\logo.svg" className="logo" alt="logo" />
          <ul className="pages">
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          </div>
         
          <div className={count <= 0 ? 'cart-count-0' : 'cart-count'}>
            <p>{count}</p>
          </div>
          <ul className="profile">
            <li><img onClick={() => setIsCartActive(prev => !prev)} className="bacsket" src="\assets\images\icon-cart.svg" alt="basket" /></li>
            <li><img className="avatar" src="\assets\images\image-avatar.png" alt="person-photo" /></li>
          </ul>
          {isCartActive && (

            count <= 0 ? (
              <div className="empty-cart">
                <h5>Cart</h5>
                <h6>Your cart is empty</h6>
              </div>
            ) : (
              <div className="filled-cart">
                <h5>Cart</h5>
                <div className="content-cart">
                  <img className="item-img" src="\assets\images\image-product-1-thumbnail.jpg" alt="" />
                  <div className="info">
                    <h6>Fall Limited Edition Sneaker</h6>
                    <h6>${price} x {count} <span>${sum}</span></h6>
                  </div>
                  <img onClick={() => setCount(count - 1)} className="delete-img" src="\assets\images\icon-delete.svg" alt="" />
                </div>
                <button>Checkout</button>
              </div>
            )
          )}
        </nav>
        <div className="content">
          <div className="sneakers">
            <button><img className="large-sneakers" src={largeImage} onClick={() => setIsOpen(true)} alt="" /></button>
             <button className="next-btn-mobile" onClick={goToNext}><img src="\assets\images\icon-next.svg" alt="" /></button>
                <button className="previous-btn-mobile" onClick={goToPrevious}><img src="\assets\images\icon-previous.svg" alt="" /></button>
            <div className="mini-sneakers">
              <button
                onClick={() => {
                  setLargeImage("/assets/images/image-product-1.jpg");
                  setActiveMiniImg("/assets/images/image-product-1-thumbnail.jpg");
                }}
              >
                <div className={activeMiniImg === "/assets/images/image-product-1-thumbnail.jpg" ? "active-wrapper" : "mini-wrapper"}>
                  <img
                    className={activeMiniImg === "/assets/images/image-product-1-thumbnail.jpg" ? "mini-active" : "mini"}
                    src="/assets/images/image-product-1-thumbnail.jpg"
                    alt=""
                  />
                </div>
              </button>

              <button
                onClick={() => {
                  setLargeImage("/assets/images/image-product-2.jpg");
                  setActiveMiniImg("/assets/images/image-product-2-thumbnail.jpg");
                }}
              >
                <div className={activeMiniImg === "/assets/images/image-product-2-thumbnail.jpg" ? "active-wrapper" : "mini-wrapper"}>
                  <img
                    className={activeMiniImg === "/assets/images/image-product-2-thumbnail.jpg" ? "mini-active" : "mini"}
                    src="/assets/images/image-product-2-thumbnail.jpg"
                    alt=""
                  />
                </div>
              </button>

              <button
                onClick={() => {
                  setLargeImage("/assets/images/image-product-3.jpg");
                  setActiveMiniImg("/assets/images/image-product-3-thumbnail.jpg");
                }}
              >
                <div className={activeMiniImg === "/assets/images/image-product-3-thumbnail.jpg" ? "active-wrapper" : "mini-wrapper"}>
                  <img
                    className={activeMiniImg === "/assets/images/image-product-3-thumbnail.jpg" ? "mini-active" : "mini"}
                    src="/assets/images/image-product-3-thumbnail.jpg"
                    alt=""
                  />
                </div>
              </button>

              <button
                onClick={() => {
                  setLargeImage("/assets/images/image-product-4.jpg");
                  setActiveMiniImg("/assets/images/image-product-4-thumbnail.jpg");
                }}
              >
                <div className={activeMiniImg === "/assets/images/image-product-4-thumbnail.jpg" ? "active-wrapper" : "mini-wrapper"}>
                  <img
                    className={activeMiniImg === "/assets/images/image-product-4-thumbnail.jpg" ? "mini-active" : "mini"}
                    src="/assets/images/image-product-4-thumbnail.jpg"
                    alt=""
                  />
                </div>
              </button>
            </div>

          </div>
          <div className="sneakers-info">
            <h3>SNEAKER COMPANY</h3>
            <h1>Fall Limited Edition Sneakers</h1>
            <p className="descr">These low-profile sneakers are your perfect casual wear companion. Featuring a
              durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            <div className="promotion">
              <div className="discount">
                <h2>$125.00</h2>
                <p>50%</p>
              </div>
            <h6>${price}</h6>
            </div>
            <div className="buying">
              <div className="count">
                <button><img className="minus" onClick={isUndurNull} src="\assets\images\icon-minus.svg" alt="" /></button>
                <p className="count-number">{count}</p>
                <button><img className="plus" onClick={() => setCount(count + 1)} src="\assets\images\icon-plus.svg" alt="" /></button>
              </div>
              <button onClick={() => setCount(count + 1)} className="add-cart"><img src="\assets\images\icon-cart.svg" alt="" />Add to cart</button>
            </div>
          </div>
        </div>
      <Attribution isOpenLarge={isOpen}/>

        </div>
      </div>
       <div className={openMenu ? "menu-nav-active" : "menu-nav-hidden"}>
           <button><img onClick={() => setOpenMenu(false)} className="close-menu" src="\assets\images\icon-close.svg" alt="" /></button>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </div>
      <Lightbox isOpenLarge={isOpen}  isOpenFunct = {setIsOpen}/>
    </>
  )
}