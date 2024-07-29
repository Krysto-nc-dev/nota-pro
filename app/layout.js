import '@/assets/styles/global.css'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'

export const metadata = {
  title: 'NotaPro ||gestion de notes de frais',
  description:
    'KRYSTO est une entreprise de recyclage de plastique en Nouvelle-Calédonie, dédiée à la collecte des déchets plastiques et à la création de produits innovants à partir de plastique recyclé.',
  keywords:
    'KRYSTO, recyclage de plastique, Nouvelle-Calédonie, économie circulaire, développement durable, responsabilité sociétale des entreprises, RSE, produits en plastique recyclé, collecte de déchets, initiation au recyclage, upcycling, clean create recycle repeat, gestion des déchets, écologie, environnement, réutilisation du plastique, innovation durable, zéro déchet',
}

const MainLayout = ({ children }) => {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export default MainLayout
