import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';

const ProductDetails = () => {

  const {id} = useParams();
  const {products} = useContext(ProductContext);
  const {addToCart} = useContext(CartContext);

  const product = products.find(item => {
    return item.id === parseInt(id);
  })

  if(!product){

  return (
    <section className='h-screen flex justify-center '>
      Loading......
    </section>
  );
  }

  const {title, price, description, image, category} = product;

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-lg px-4 md:px-8">
    <div className="grid gap-8 md:grid-cols-2">
      {/* images - start */}
      <div className="space-y-4">
        <div className="relative overflow-hidden rounded-lg bg-gray-100">
          <img
            src={image}
            loading="lazy"
            alt="Photo by Himanshu Dewangan"
            className="h-full w-full object-cover object-center"
          />
          <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
            sale
          </span>
        </div>
      </div>
      {/* images - end */}
      {/* content - start */}
      <div className="md:py-8">
        {/* name - start */}
        <div className="mb-2 md:mb-3">
          <span className="mb-0.5 inline-block text-gray-500 uppercase">{category}</span>
          <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
            {title}
          </h2>
        </div>
        {/* name - end */}
        
        {/* color - start */}
        <div className="mb-4 md:mb-6">
          <span className="mb-3 inline-block text-sm font-semibold text-gray-500 md:text-base">
            Color
          </span>
          <div className="flex flex-wrap gap-2">
            <span className="h-8 w-8 rounded-full border bg-gray-800 ring-2 ring-gray-800 ring-offset-1 transition duration-100" />
            <button
              type="button"
              className="h-8 w-8 rounded-full border bg-gray-500 ring-2 ring-transparent ring-offset-1 transition duration-100 hover:ring-gray-200"
            />
            <button
              type="button"
              className="h-8 w-8 rounded-full border bg-gray-200 ring-2 ring-transparent ring-offset-1 transition duration-100 hover:ring-gray-200"
            />
            <button
              type="button"
              className="h-8 w-8 rounded-full border bg-white ring-2 ring-transparent ring-offset-1 transition duration-100 hover:ring-gray-200"
            />
          </div>
        </div>
        {/* color - end */}
        {/* size - start */}
        <div className="mb-8 md:mb-10">
          <span className="mb-3 inline-block text-sm font-semibold text-gray-500 md:text-base">
            Size
          </span>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              className="flex h-8 w-12 items-center justify-center rounded-md border bg-white text-center text-sm font-semibold text-gray-800 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
            >
              XS
            </button>
            <button
              type="button"
              className="flex h-8 w-12 items-center justify-center rounded-md border bg-white text-center text-sm font-semibold text-gray-800 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
            >
              S
            </button>
            <span className="flex h-8 w-12 cursor-default items-center justify-center rounded-md border border-indigo-500 bg-indigo-500 text-center text-sm font-semibold text-white">
              M
            </span>
            <button
              type="button"
              className="flex h-8 w-12 items-center justify-center rounded-md border bg-white text-center text-sm font-semibold text-gray-800 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
            >
              L
            </button>
            <span className="flex h-8 w-12 cursor-not-allowed items-center justify-center rounded-md border border-transparent bg-white text-center text-sm font-semibold text-gray-400">
              XL
            </span>
          </div>
        </div>
        {/* size - end */}
        {/* price - start */}
        <div className="mb-4">
          <div className="flex items-end gap-2">
            <span className="text-xl font-bold text-gray-800 md:text-2xl">
              ${price}
            </span>
            
          </div>
          <span className="text-sm text-gray-500">incl. VAT plus shipping</span>
        </div>
        {/* price - end */}
        {/* shipping notice - start */}
        <div className="mb-6 flex items-center gap-2 text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
            />
          </svg>
          <span className="text-sm">2-4 day shipping</span>
        </div>
        {/* shipping notice - end */}
        {/* buttons - start */}
        <div className="flex gap-2.5">
          <a
            href="#"
            className="inline-block flex-1 rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base"
          >
            Add to cart
          </a>
          <a
            href="#"
            className="inline-block rounded-lg bg-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </a>
        </div>
        {/* buttons - end */}
        {/* description - start */}
        <div className="mt-10 md:mt-16 lg:mt-20">
          <div className="mb-3 text-lg font-semibold text-gray-800">
            Description
          </div>
          <p className="text-gray-500">
            {description}
          </p>
        </div>
        {/* description - end */}
      </div>
      {/* content - end */}
    </div>
  </div>
</div>

  )

};

export default ProductDetails;
