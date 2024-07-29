import Image from 'next/image'
import logo from '../../assets/images/logo.svg'
import iconFb from '../../assets/images/icon-facebook.svg'
import iconIn from '../../assets/images/icon-instagram.svg'
import iconPi from '../../assets/images/icon-pinterest.svg'
import iconX from '../../assets/images/icon-twitter.svg'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="py-16 bg-veryDarkViolet">
        <div className="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start">
        <Image
            src={logo}
            alt="Logo"
            width={100}
            height={100}
            className="object-contain"
          />

          <div className="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0">

            {/* menu 1 */}
            <div className="flex flex-col items-center  w-full md:items-start">
                <div className="mb-5 font-bold text-gray-200 text-xl capitalize ">
                    Fonctionnalités
                </div>
                <div className="flex flex-col items-center space-y-3 md:items-start">
                    <Link href={"/"} className='text-grayishViolet hover:text-cyan capitalize font-bold'>Centralisation des données</Link>
                    <Link href={"/"} className='text-grayishViolet hover:text-cyan capitalize font-bold'>Dashboard intéractif</Link>
                    <Link href={"/"} className='text-grayishViolet hover:text-cyan capitalize font-bold'>Export des données</Link>
                </div>
            </div>
            {/* menu 2 */}
            <div className="flex flex-col items-center  w-full md:items-start">
                <div className="mb-5 font-bold text-gray-200 text-xl capitalize ">
                   Ressources
                </div>
                <div className="flex flex-col items-center space-y-3 md:items-start">
                    <Link href={"/"} className='text-grayishViolet hover:text-cyan capitalize font-bold'>Blog</Link>
                    <Link href={"/"} className='text-grayishViolet hover:text-cyan capitalize font-bold'>Developeur</Link>
                    <Link href={"/"} className='text-grayishViolet hover:text-cyan capitalize font-bold'>Support</Link>
                </div>
            </div>
            {/* menu 1 */}
            <div className="flex flex-col items-center  w-full md:items-start">
                <div className="mb-5 font-bold text-gray-200 text-xl capitalize ">
                  L'entreprise
                </div>
                <div className="flex flex-col items-center space-y-3 md:items-start">
                    <Link href={"/"} className='text-grayishViolet hover:text-cyan capitalize font-bold'>A propos</Link>
                    <Link href={"/"} className='text-grayishViolet hover:text-cyan capitalize font-bold'>L'équipe</Link>
                    <Link href={"/"} className='text-grayishViolet hover:text-cyan capitalize font-bold'>Contact</Link>
                </div>
            </div>
          </div>

          {/* Social */}
          <div className="flex space-x-6">
            <Link href={'/'} >
            
            <Image
            src={iconFb}
            alt="Logo"
        
            className="object-contain ficon"
          /></Link>
            <Link href={'/'} >
            
            <Image
            src={iconX}
            alt="Logo"
      
            className="object-contain ficon"
          /></Link>
            <Link href={'/'} >
            
            <Image
            src={iconPi}
            alt="Logo"
     
            className="object-contain ficon"
          /></Link>
            <Link href={'/'} >
            
            <Image
            src={iconIn}
            alt="Logo"
           
            className="object-contain ficon"
          /></Link>
          </div>
        </div>
       
    </footer>
  )
}

export default Footer