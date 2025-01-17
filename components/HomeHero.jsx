import Link from 'next/link'
import logo from '../assets/images/illustration-working.svg'
import Image from 'next/image'
const HomeHero = () => {
  return (
    <section>
      <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row">
        {/* content container */}
        <div className="flex flex-col space-y-10 mb-44 lg:mt-16  xl:mb-52 lg:w-1/2">
          <h1 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">
            Plus que la géstion de vos note de frais
          </h1>

          <p className="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">
            Gérez efficacement vos dépenses avec notre solution intuitive.
          </p>
          <div className="mx-auto  lg:mx-0">
            <Link
              className="py-5 px-10 text-2xl font-bold text-white bg-cyan rounded-full lg:py-4 hover:opacity-70"
              href={'/'}
            >
              {' '}
              Commencer
            </Link>
          </div>
        </div>
        {/* image container */}

        <div className='mb-24 mx-auto md:w-180 lg:mb-0 lg:w-1/2'>

        
        <Image
            src={logo}
            alt="Logo"
            // width={100}
            // height={100}
            className="object-contain"
            />

            </div>
      </div>
    </section>
  )
}

export default HomeHero
