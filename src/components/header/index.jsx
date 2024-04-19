import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { IconShoppingCart, IconMenu2 } from '@tabler/icons-react'
import { Logo } from '../../assets'
import { menus } from '../../constants'

const Header = () => {
  const { products } = useSelector((state) => state.cart)
  const [isOpen, setIsOpen] = useState(false)
  const [showStickyHeader, setShowStickyHeader] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      const headerHeight = document.querySelector('header').offsetHeight

      if (offset > headerHeight) {
        setShowStickyHeader(true)
      } else {
        setShowStickyHeader(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header
      className={clsx(
        'bg-white',
        showStickyHeader
          ? 'bg-opacity-80 sticky top-0 shadow-sm backdrop-blur-sm'
          : ''
      )}
    >
      <div className='container mx-auto'>
        <div className='flex items-stratch justify-between h-[80px]'>
          <div className='flex items-stratch'>
            <Link to='/' className='w-52 xl:w-60 max-w-full flex items-center'>
              <img src={Logo} className='h-9 md:h-10 xl:h-auto' alt='logo' />
            </Link>
            <nav className='ml-4 xl:ml-10 hidden lg:block'>
              <ul className='flex space-x-8 xl:space-x-10 h-full'>
                {menus.map((menu) => (
                  <li key={menu.id}>
                    <Link
                      to={menu.path}
                      className='h-full flex items-center text-base font-medium text-slate-500 hover:text-slate-800'
                    >
                      {menu.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className='flex items-center space-x-5 md:space-x-7 lg:space-x-10'>
            <Link to='/' className='relative'>
              <div className='absolute -top-2.5 -right-2.5 flex items-center justify-center w-5 h-5 bg-emerald-600 text-white rounded-full text-xs font-semibold'>
                {products.length}
              </div>
              <IconShoppingCart className='flex items-center w-[26px] h-[26px] font-medium text-slate-800' />
            </Link>
            <div className='w-[1px] h-[30px] bg-gray-200'></div>
            <Link
              to='/'
              className='hidden sm:block bg-slate-800 hover:bg-slate-700 text-base font-medium text-white px-7 py-3 rounded'
            >
              Login
            </Link>
            <div className='relative lg:hidden'>
              <span className='cursor-pointer' onClick={toggleMenu}>
                <IconMenu2 className='w-[32px] h-[32px] font-medium text-slate-800' />
              </span>
              {isOpen && (
                <nav className='absolute top-[calc(100%+25px)] right-2 lg:hidden w-[250px] rounded-lg bg-white px-6 py-5 shadow'>
                  <ul>
                    {menus.map((menu) => (
                      <li key={menu.id}>
                        <Link
                          to={menu.path}
                          className='flex py-2 text-base font-medium text-slate-500 hover:text-slate-800'
                        >
                          {menu.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
