import Image from 'next/image'
import React from 'react'
import iconStats from '../assets/images/icon-brand-recognition.svg'
import iconRecord from '../assets/images/icon-detailed-records.svg'
import iconCustom from '../assets/images/icon-fully-customizable.svg'
const HomeStatsSection = () => {
  return (
    <>
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-3">
          <h2 className="text-4xl mb-6 font-bold text-center">
            Simplifier vous les notes de frais
          </h2>
          <p className="max-w-xs mx-auto text-center text-gray-400 md:max-w-md">
            Les entreprises sont de plus en plus nombreuses à opter pour la
            dématérialisation. Pour débuter ou accélérer votre transformation,
            NotaPro est la solution de gestion de notes de frais la plus avancée
            du marché.
          </p>
        </div>
      </section>
      {/* Feature Box Section */}
      <section className="pb-32 bg-gray-100">
        <div className="relative container flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7">
          {/* horizontal  */}

          <div className="hidden absolute top-24 w-10/12 left-16 h-3 bg-cyan md:block "></div>
          {/* vertical  */}
          <div className="absolute  left-1/2 w-2 h-full -ml-1 bg-cyan md:hidden"></div>

          {/* box 1 */}
          <div className="relative flex flex-col p-6 space-y-6 bg-white rounded-lg md:w-1/3">
            {/* Image positionig */}
            <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
              <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
                <Image
                  src={iconStats}
                  alt="icone dashboard"
                  // width={100}
                  // height={100}
                  className="object-contain"
                />
              </div>
            </div>
            <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
              Statistique
            </h5>

            <p className="text-center text-gray-400 md:text-left">
              Toutes vos dépenses sont digitalisées en temps réel. Dès lors que
              vous avez pris en photo votre reçu, vous pouvez le jeter. Vous pouvez enfin rationaliser
              votre processus de gestion des dépenses
            </p>
          </div>
          {/* box 2 */}
          <div className="relative flex flex-col mt-24 md:mt-8 p-6 space-y-6 bg-white rounded-lg md:w-1/3">
            {/* Image positionig */}
            <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
              <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
                <Image
                  src={iconRecord}
                  alt="icone dashboard"
                  // width={100}
                  // height={100}
                  className="object-contain"
                />
              </div>
            </div>
            <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
           Otpimiser
            </h5>

            <p className="text-center text-gray-400 md:text-left">
           
            Vous pouvez facilement accéder à vos détails de facturation, vous pouvez rapidement trier vos factures par date, par montant ou par état. Vous pouvez également ajouter des commentaires sur vos factures pour faciliter votre suivi.
            </p>
          </div>
          {/* box 3 */}
          <div className="relative flex flex-col mt-24 md:mt-16 p-6 space-y-6 bg-white rounded-lg md:w-1/3">
            {/* Image positionig */}
            <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
              <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
                <Image
                  src={iconCustom}
                  alt="icone dashboard"
                  // width={100}
                  // height={100}
                  className="object-contain"
                />
              </div>
            </div>
            <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
           Personnalisable
            </h5>

            <p className="text-center text-gray-400 md:text-left">
           
            Vous pouvez personnaliser votre interface pour adapter à vos besoins et vos préférences. Vous pouvez également ajouter des notes de frais pour faciliter votre suivi et votre communication avec vos clients. Vous pouvez également ajouter des notes de frais pour faciliter votre suivi et votre communication avec vos clients.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeStatsSection
