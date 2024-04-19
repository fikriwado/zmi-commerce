import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Layout } from '../../components'
import { increment, decrement, removeItem } from '../../redux/slices/cartSlice'

const Cart = () => {
  const { carts } = useSelector((state) => state.cart)
  const total = carts
    .reduce((acc, cart) => acc + cart.price * cart.quantity, 0)
    .toFixed(2)

  return (
    <Layout>
      <section className='py-10'>
        <div className='container mx-auto space-y-5'>
          <p className='text-2xl font-semibold'>Shopping Cart</p>

          <div>
            {carts.length > 0 ? (
              carts.map((cart) => <CartItem key={cart.id} cart={cart} />)
            ) : (
              <div className='text-center py-10'>Empty Cart</div>
            )}
          </div>

          {carts.length > 0 && (
            <div className='flex justify-between items-center'>
              <div className='text-xl font-semibold'>
                <span>Total: </span>
                <span className='text-green-600 text-lg font-medium'>
                  ${total}
                </span>
              </div>
              <div>
                <Link
                  to='/checkout'
                  className='inline-block bg-orange-400 hover:bg-orange-300 text-white px-4 py-2 rounded'
                >
                  Checkout
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  )
}

const CartItem = ({ cart }) => {
  const dispatch = useDispatch()

  return (
    <div className='flex justify-between items-center border-b border-gray-300 py-4'>
      <div className='flex items-center space-x-4'>
        <div className='bg-gray-50 overflow-hidden'>
          <img
            src={cart.image}
            alt='product'
            className='w-24 h-24 object-cover p-3'
          />
        </div>
        <div className='space-y-1'>
          <div>
            <p className='text-lg font-semibold'>{cart.title}</p>
            <p>
              Price: <span className='text-green-600'>${cart.price}</span>
            </p>
          </div>
          <div>
            <button
              onClick={() => dispatch(decrement(cart))}
              className='w-8 h-8 bg-white hover:bg-gray-50 border rounded text-gray-600 hover:text-gray-700 focus:outline-none'
            >
              -
            </button>
            <span className='inline-block w-8 h-8 text-center'>
              {cart.quantity}
            </span>
            <button
              onClick={() => dispatch(increment(cart))}
              className='w-8 h-8 bg-white hover:bg-gray-50 border rounded text-gray-600 hover:text-gray-700 focus:outline-none'
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className='flex items-center space-x-4'>
        <button
          onClick={() => dispatch(removeItem(cart))}
          className='text-red-600 hover:text-red-700 focus:outline-none'
        >
          Remove
        </button>
      </div>
    </div>
  )
}

export default Cart
