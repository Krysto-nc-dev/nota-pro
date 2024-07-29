import React from 'react'

const HomeCtaSection = () => {
  return (
    <section className='bg-darkViolet py-24 ' id='cta'>
        <div className="flex flex-col p-2 space-y-6">
            <h5 className="mx-auto space-y-10 text-4xl font-bold text-center text-white">
                
             Booster la gestion de vos notes de frais
            </h5>
            <button className='px-10 py-5 mx-auto text-2xl font-bold text-white rounded-full bg-cyan hover:bg-cyanLight md:textbase md:py-3 focus:outline-none'>Commencer gratuitement</button>
        </div>
     </section>
  )
}

export default HomeCtaSection