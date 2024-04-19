import { Layout } from '../../components'
import { IconCircleDashedCheck } from '@tabler/icons-react'

const Payment = () => {
  return (
    <Layout>
      <section className='py-10'>
        <div className='container mx-auto'>
          <div className='flex flex-col items-center border space-y-5 w-full lg:w-2/3 xl:w-1/2 mx-auto p-10 bg-gray-50 border-slate-100 rounded-lg'>
            <IconCircleDashedCheck className='w-36 h-36 text-emerald-400' />
            <p className='text-2xl font-semibold text-slate-800'>
              Payment Success
            </p>
            <p className='text-center text-slate-600'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
              itaque at maxime sunt cum exercitationem provident atque, debitis
              repellat cumque beatae aliquam, iure repudiandae recusandae facere
              laboriosam fuga accusamus numquam?
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Payment
