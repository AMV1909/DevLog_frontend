import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getTenProductsRequest } from '../api/products';

export const Cards = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getTenProductsRequest().then((response) => {
      setProducts(response);
    }).catch((error) => {
      console.log(error);
    })
  }, [])

  return (
    <>
      <div class="row cardA">
        {products.map((product) => (
          <div className='card cardProducto'>
            <img src={product.image.url} className="card-img-top" alt="..." />
            <div className="card-body body-card">
              <div>
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.shortDescription}</p>
              </div>
              <Link to={`Detalles/${product._id}`} className="btn btn-outline colorBtnCard">Ver producto</Link>
            </div>
          </div>
        ))}
      </div>

    </>
  );
};

