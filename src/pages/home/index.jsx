import { Layout } from '../../components'

const Home = () => {
  return (
    <Layout>
      <section className='bg-[url("https://elessi2.myshopify.com/cdn/shop/files/elessi-bg2-scaled_4100x.jpg")] bg-no-repeat bg-[50%] bg-cover h-[200px]'>
        <div className='container mx-auto flex flex-col items-center justify-center h-full'>
          <p className='text-2xl font-semibold'>Fashion</p>
          <p className='text-base'>Home</p>
        </div>
      </section>

      <section className='py-5'>
        <div className='container mx-auto'>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque rem
            eos facere quae hic officia in iusto ducimus, tempore nulla
            recusandae maxime culpa reprehenderit aliquam, corporis repudiandae?
            Eum, tempora odio.
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default Home
