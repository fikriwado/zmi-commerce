import { useLocation, useParams } from 'react-router-dom'
import { Layout } from '../../components'

const ProductDetail = () => {
  const location = useLocation()
  const { id } = location.state
  const { slug } = useParams()

  return (
    <>
      <Layout>
        <section className='h-[300px]'>
          <div className='container mx-auto'>
            <p className='text-2xl font-semibold'>Product Detail</p>
            <p className='text-base'>Explore our collection</p>
            <p>
              {id} - {slug}
            </p>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default ProductDetail
