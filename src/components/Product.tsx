import React, { useState } from 'react';
import { IProduct } from '../models';

interface ProductProps {
    product: IProduct
}

function Product({product}: ProductProps) {

    const [details, setDetails] = useState(false)

    const btnBgClassName = details ? 'bg-blue-200' : 'bg-yellow-200'
    const btnClasses = ['py-1 px-3 border', btnBgClassName].join(' ')


    return (
        <div
            className='border py-2 px-4 rounded flex flex-col items-center mb-2'
        >
            <img src={product.image} className="w-1/6" alt={product.title} />
            <p>{product.title}</p>
            <span className='font-bold'>{product.price}</span>
            <button className={btnClasses} onClick={() => setDetails(prev => !prev)}>
                {details ? 'Hide Details' : 'Show Details'}
            </button>
            { details && 
                <div>
                    <p>{product.description}</p>
                    <p>Rate: <span style={{ fontWeight: 'bold'}}>{product?.rating?.rate}</span></p>
                </div> }
        </div>
    );
}

export default Product; 