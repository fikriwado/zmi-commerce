import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { stringToSlug } from '../../utils/helper'
import { addToCart } from '../../redux/slices/cartSlice'

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()

  return (
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
        <p className='text-green-600'>${product.price}</p>
      </div>
      <div className='px-4 pb-4'>
        <button
          className='inline-block bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded'
          onClick={() => dispatch(addToCart({ ...product, quantity: 1 }))}
        >
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
