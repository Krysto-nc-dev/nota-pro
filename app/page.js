import { MdDocumentScanner } from 'react-icons/md'
const HomePage = () => {
  return (
    <div className="min-h-screen bg-background-50 text-text-900">
      <header className="bg-primary-300 text-primary-950 py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-primary-800 flex  items-center gap-2 mb-1">
            <MdDocumentScanner /> NotaPro
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-4 text-primary-700">
            Simplifiez la gestion de vos notes de frais
          </h2>
          <p className="text-lg text-text-700">
            Notre plateforme vous aide à suivre et gérer vos dépenses en toute
            simplicité.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-background-100 text-text-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 text-primary-600">
              Suivi facile
            </h3>
            <p>
              Suivez vos dépenses en déplacement avec notre plateforme mobile.
            </p>
          </div>
          <div className="bg-background-100 text-text-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 text-primary-600">
              Rapports automatisés
            </h3>
            <p>
              Générez des rapports détaillés automatiquement et obtenez des
              insights sur vos dépenses.
            </p>
          </div>
          <div className="bg-background-100 text-text-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 text-primary-600">
              Données sécurisées
            </h3>
            <p>
              Vos données sont sécurisées chez nous, garantissant
              confidentialité et fiabilité.
            </p>
          </div>
        </section>

        <section className="bg-secondary-500 text-secondary-950 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4 text-secondary-700">
            Commencez dès aujourd'hui
          </h2>
          <p className="text-lg mb-6 text-secondary-200">
            Inscrivez-vous maintenant et commencez à mieux gérer vos dépenses.
          </p>
          <button className="bg-accent-500 text-accent-950 px-4 py-2 rounded-lg font-bold">
            S'inscrire
          </button>
        </section>
      </main>

      <footer className="bg-primary-700 text-primary-50 py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 NotaPro By Krysto. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
