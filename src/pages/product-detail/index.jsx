import { useParams } from 'react-router-dom'
import { Layout } from '../../components'

const ProductDetail = () => {
  const { slug } = useParams()

  return (
    <>
      <Layout>
        <p>Product Detail</p>
        <p>{slug}</p>
      </Layout>
    </>
  )
}

export default ProductDetail
