import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Layout } from '../../components'
import { payments } from '../../constants'
import clsx from 'clsx'

const Checkout = () => {
  const [isDisabled, setIsDisabled] = useState(true)
  const [shippingAddress, setShippingAddress] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('')
  const { carts } = useSelector((state) => state.cart)
  const total = carts
    .reduce((acc, cart) => acc + cart.price * cart.quantity, 0)
    .toFixed(2)

  useEffect(() => {
    const hasShippingAddress = shippingAddress != ''
    const hasPaymentMethod = shippingAddress != ''
    if (hasShippingAddress && hasPaymentMethod) setIsDisabled(false)
    else setIsDisabled(true)
  }, [shippingAddress, paymentMethod])

  const handleCompletePurchase = (e) => {
    if (isDisabled) e.preventDefault()
  }

  return (
    <Layout>
      <section className='py-10'>
        <div className='container mx-auto'>
          <p className='text-2xl font-semibold mb-5'>Checkout</p>

          <div className='flex flex-col lg:flex-row justify-between space-y-5 lg:space-y-0 lg:space-x-10'>
            <div className='w-full lg:w-2/3'>
              {carts.length > 0 ? (
                carts.map((cart) => <CartItem key={cart.id} cart={cart} />)
              ) : (
                <div className='text-center py-10'>Empty Cart</div>
              )}
            </div>

            <div className='bg-slate-50 w-full lg:w-1/3 p-5 space-y-3'>
              <div className='text-2xl font-semibold'>
                <span>Total: </span>
                <span className='text-green-600 text-xl font-medium'>
                  ${total}
                </span>
              </div>
              <p className='text-slate-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                cumque eos, laboriosam perspiciatis fugiat velit mollitia
                dolores sed unde, pariatur quasi voluptatibus dignissimos eaque
                atque aut natus ullam consequatur labore.
              </p>
            </div>
          </div>

          <div className='bg-white border p-6 mt-8 space-y-5'>
            <div>
              <p className='text-lg font-medium mb-3'>Shipping Address</p>
              <textarea
                onChange={(e) => setShippingAddress(e.target.value)}
                rows='4'
                className='w-full focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-400 border-slate-300 shadow-sm rounded-lg transition duration-300'
                placeholder='Write your thoughts here...'
              ></textarea>
            </div>

            <div>
              <p className='text-lg font-medium mb-3'>Payment Method</p>

              <div className='w-1/4 space-y-3'>
                {payments.length > 0 &&
                  payments.map((payment) => (
                    <label
                      key={payment.id}
                      className='flex justify-between items-center cursor-pointer'
                    >
                      <div className='flex items-center'>
                        <input
                          type='radio'
                          name='paymentMethod'
                          value={payment.id}
                          checked={paymentMethod === payment.id}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className='mr-3'
                        />
                        <span className='text-slate-600 font-medium'>
                          Ending in: {payment.number}
                        </span>
                      </div>
                      <img
                        src={payment.image}
                        alt='Credit Card'
                        className='h-5'
                      />
                    </label>
                  ))}
              </div>

              <div className='mt-5'>
                <Link
                  to='/'
                  onClick={handleCompletePurchase}
                  className={clsx(
                    'inline-block text-white px-4 py-2 rounded',
                    isDisabled
                      ? 'bg-orange-400/60 cursor-not-allowed'
                      : 'bg-orange-400 hover:bg-orange-300'
                  )}
                >
                  Complete Purchase
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

const CartItem = ({ cart }) => {
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
            <p>
              Quantity: <span>{cart.quantity}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
