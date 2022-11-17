import React, { useState } from 'react'
import { useEffect } from 'react';
import { getThreeProductsRequest } from '../api/products';

export const Carousel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getThreeProductsRequest().then((response) => {
      setProducts(response);
    })
  }, [])

  return (
    <>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          {products.map((product, index) => {
            return (
              <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <img src={product.image.url} class="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block colorDes mx-auto">
                  <h5 >{product.name}</h5>
                  <br />
                  <p>{product.shortDescription}</p>
                </div>
              </div>
            )
          })}
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>



    </>
  );
};


