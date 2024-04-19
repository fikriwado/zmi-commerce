import axios from 'axios'
import { useEffect, useState } from 'react'
import { Layout, ProductCard } from '../../components'

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
              <ProductCard key={product.id} product={product} />
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
