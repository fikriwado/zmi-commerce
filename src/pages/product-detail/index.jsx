import axios from 'axios'
import { Link, useLocation } from 'react-router-dom'
import { Layout } from '../../components'
import { useEffect, useState } from 'react'

const ProductDetail = () => {
  const [product, setProduct] = useState([])
  const location = useLocation()
  const { id } = location.state

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        )
        setProduct(response.data)
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching product:', error)
      }
    }
    fetchProduct()
  }, [])

  return (
    <>
      <Layout>
        <section className='py-5'>
          <div className='container mx-auto w-full xl:w-2/3 space-x-4'>
            <Link to='/' className='text-blue-600'>
              Home
            </Link>
            <span>/</span>
            <span>{product.title}</span>
          </div>
        </section>

        <section className='py-8'>
          <div className='container mx-auto flex flex-col lg:flex-row w-full xl:w-2/3 space-y-10 lg:space-y-0 lg:space-x-14'>
            <div className='flex justify-center bg-gray-50 w-full lg:w-[350px] xl:w-[400px] px-5'>
              <img
                src={product.image}
                alt='product'
                className='max-h-[380px]'
              />
            </div>
            <div className='flex-1 w-full'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4'>
                {product.title}
              </h2>
              <p className='text-gray-600 mb-4'>{product.description}</p>
              <p className='text-xl font-semibold text-green-600 mb-4'>
                ${product.price}
              </p>
              <Link
                to='/'
                className='inline-block bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded'
              >
                Add to cart
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default ProductDetail
