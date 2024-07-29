import React from 'react'

const HomeContact = () => {
  return (
    <section className='relative bg-gray-100 '>
        <div className="max-w-4xl mx-auto p-6 space-y-6">

            <form className='relative flex flex-col w-full p-10 lt-20 space-y-4 bg-darkViolet rounded-lg md:flex-row md:space-y-0 md:space-x-3' >
               <input placeholder='Obtenir un RDV' type='text' className='flex-1 p-3 border-2 rounded-lg placeholder-darkViolet focus:outline-none'>
                
               </input>
               <button className='px-10 py-3 text-white bg-cyan rounded-lg hover:bg-cyanLight focus:outline-none md:py-2'>
                Envoyer
               </button>
            </form>
        </div>
    </section>
  )
}

export default HomeContact