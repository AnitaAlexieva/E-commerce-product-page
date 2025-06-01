import { useState } from "react";

export default function Lightbox({
    isOpenLarge
}) {
     const [largeImage, setLargeImage] = useState('/assets/images/image-product-1.jpg')
      const [activeMiniImg, setActiveMiniImg] = useState("\assets\images\image-product-1-thumbnail.jpg")
    return (
        <div className={isOpenLarge ? "lightbox-active" : "lightbox-hidden"}>
            <button><img src="\assets\images\icon-close.svg" className="close-img" alt="" /></button>
            <div className="sneakers">
                <img className="large-sneakers" src={largeImage} alt="" />
                <button className="next-btn"><img src="\assets\images\icon-next.svg" alt="" /></button>
                <button className="previous-btn"><img src="\assets\images\icon-previous.svg" alt="" /></button>
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
        </div>
    )
}