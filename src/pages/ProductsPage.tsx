import React, { useContext } from 'react';
import { useProducts } from '../hooks/products';
import { ModalContext } from '../context/ModalContext';
import { IProduct } from '../models';
import Product from '../components/Product';
import ErrorMessage from '../components/ErrorMessage';
import Loader from '../components/Loader';
import Modal from '../components/Modal';
import CreateProduct from '../components/CreateProduct';

const ProductsPage = () => {
    const { products, loading, error, addProduct } = useProducts()

    const {modal, closeModal, openModal} = useContext(ModalContext)
   
     const createHandler = (product: IProduct) => {
       closeModal()
       addProduct(product) 
     }
   
     return (
       <div className="container mx-auto max-w-2xl pt-5">
         { loading && <Loader /> }
         { error && <ErrorMessage error={error} /> }
         { products.map( product => (
            <Product key={product.id} product={product} />
         ))}
   
         {modal && <Modal title='Create new product' onClose={() => closeModal()}>
           <CreateProduct onCreate={createHandler}/>
         </Modal>}
         
         <button 
           className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-3.5 py-1" 
           style={{fontFamily: "-moz-initial"}}
           onClick={() => openModal()}
         >
           +
         </button>
         
         {/* <Product product={ products[0] } />
         <Product product={ products[1] } /> */}
       </div>
     )
};

export default ProductsPage;