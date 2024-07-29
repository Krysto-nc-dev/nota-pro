import Image from 'next/image'
import logo from '../../assets/images/logo.svg'
import Link from 'next/link'

const Header = () => {
  return (
    <nav className="relative container mx-auto p-6 ">
      {/* Flex container for all items */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          {/* logo */}
  <Link  href={"/"} >
          <Image
            src={logo}
            alt="Logo"
            width={100}
            height={100}
            className="object-contain"
            />

            </Link>

          {/* Left menu */}
          
          
          <div className="hidden lg:flex space-x-8 font-bold font-">
            <Link href={"/features"} className='text-grayishViolet hover:text-veryDarkViolet'>Fonctionnalités</Link>
            <Link href={"/pricing"} className='text-grayishViolet hover:text-veryDarkViolet'>Tarifs</Link>
            <Link href={"/about"} className='text-grayishViolet hover:text-veryDarkViolet'>A propos</Link>
          </div>
                  </div>
                  {/* Right buttons menu */}
                  <div className="hidden items-center space-x-6 lg:flex text-grayishViolet">
                <Link href={"/"} className='hover:text-veryDarkViolet'>
                         Connexion
                </Link>
              <Link  className="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70"href={'/'}>Demander une démo</Link>
                  </div>
                  {/* toDo burger menu  */}
      </div>
                  {/* toDo mobile menu  */}
    </nav>
  )
}

export default Header
