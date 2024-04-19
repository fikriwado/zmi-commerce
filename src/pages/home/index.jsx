import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Layout } from '../../components'
import { stringToSlug } from '../../utils/helper'

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products')
        setProducts(response.data)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }
    fetchProducts()
  }, [])

  return (
    <Layout>
      <section className='bg-gray-50 h-[200px]'>
        <div className='container mx-auto flex flex-col items-center justify-center h-full'>
          <p className='text-2xl font-semibold'>Products</p>
          <p className='text-base'>Explore our collection</p>
        </div>
      </section>

      <section className='py-10'>
        <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product.id}
                className='bg-white border border-gray-200 rounded-lg'
              >
                <div className='bg-gray-50 h-64 overflow-hidden'>
                  <Link
                    to={`/product/${stringToSlug(product.title)}`}
                    state={{ id: product.id }}
                  >
                    <img
                      src={product.image}
                      alt='product'
                      className='object-contain w-full h-full p-5'
                    />
                  </Link>
                </div>
                <div className='p-4 space-y-2'>
                  <Link
                    to='/'
                    className='text-gray-900 font-bold text-lg overflow-hidden line-clamp-2'
                  >
                    {product.title}
                  </Link>
                  <p className='text-gray-700 text-base'>{product.price}</p>
                </div>
                <div className='px-4 pb-4 flex items-end'>
                  <Link
                    to='/'
                    className='inline-block bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded'
                  >
                    Add to cart
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className='text-center'>Loading...</div>
          )}
        </div>
      </section>
    </Layout>
  )
}

export default Home
