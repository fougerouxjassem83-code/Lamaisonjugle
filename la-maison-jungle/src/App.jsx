/*************************************************************************************************/
/**                                                                                             **/
/**   App.jsx est le composant principal de l'application "La Maison Jungle".                  **/
/**   Il importe et affiche le composant Banner qui constitue l'en-tête du site.               **/
/**   C'est le point d'entrée de l'interface, appelé depuis main.jsx.                          **/
/**                                                                                             **/
/*************************************************************************************************/

/***************************************************************************/
/* ICI J'AI IMPORTÉ TOUS LES COMPOSANTS NÉCESSAIRES POUR L'APPLICATION    */
/***************************************************************************/

import Categories from './components/Categories'
/* On importe le composant Categories depuis le dossier components */

import SearchBar from './components/SearchBar'
/* On importe le composant SearchBar */

import { useState, useEffect } from 'react'
/* On importe les Hooks useState et useEffect depuis React */

import { Routes, Route } from 'react-router-dom'
/* On importe Routes et Route pour gérer la navigation */

import './App.css'
/* On importe le fichier CSS global de l'application */

import Navbar from './components/Navbar'
/* On importe le composant Navbar */

import Banner from './components/Banner'
/* On importe le composant Banner depuis le dossier components */

import PlantItem from './components/PlantItem'
/* On importe le composant PlantItem depuis le dossier components */

import Footer from './components/Footer'
/* On importe le composant Footer depuis le dossier components */

import Cart from './components/Cart'
/* On importe le composant Cart depuis le dossier components */

import Register from './components/Register'
/* On importe le composant Register depuis le dossier components */

import Login from './components/Login'
/* On importe le composant Login */

import Welcome from './components/Welcome'
/* On importe le composant Welcome */

import LandingPage from './components/LandingPage'
/* On importe le composant LandingPage */

/*************************************************************************************/

function App() {
  /* On crée un état pour stocker les plantes récupérées depuis l'API */
  const [plants, setPlants] = useState([])

  /* On crée un état pour stocker les plantes du panier */
  const [cart, setCart] = useState([])

  /* On crée un état pour afficher ou cacher le panier */
  const [showCart, setShowCart] = useState(false)

  /* On crée un état pour stocker l'utilisateur connecté
     null = personne n'est connecté */
  const [user, setUser] = useState(null)

  /* On crée un état pour stocker la recherche */
  const [search, setSearch] = useState('')

  /* On crée un état pour stocker la catégorie sélectionnée
     Toutes = toutes les catégories par défaut */
  const [category, setCategory] = useState('Toutes')

  /* Au chargement de la page on récupère les plantes depuis l'API grace a la fonction fetch
  on récupère les données au format JSON depuis la base de données */
  useEffect(() => {
    fetch('http://localhost:3000/plants')
      .then((response) => response.json())
      .then((data) => {
        /* On stocke les plantes dans notre état */
        setPlants(data)
      })
  }, [])

  /* On ajoute une plante au panier */
  const addToCart = (plant) => {
    setCart([...cart, plant])
  }

  /* On vide le panier */
  const clearCart = () => {
    setCart([])
  }

  /* On déconnecte l'utilisateur */
  const handleLogout = () => {
    setUser(null)
    /* On remet user à null */
  }

  /* On calcule le total du panier */
  const total = cart.reduce((acc, plant) => acc + plant.price, 0)

  /* On filtre les plantes selon la recherche ET la catégorie
     toLowerCase() permet de ne pas tenir compte des majuscules */
  const filteredPlants = plants.filter((plant) => {
    /* On filtre par nom */
    const matchSearch = plant.name.toLowerCase().includes(search.toLowerCase())
    /* On filtre par catégorie */
    const matchCategory = category === 'Toutes' || plant.category === category
    /* On retourne les plantes qui correspondent aux deux filtres */
    return matchSearch && matchCategory
  })

  return (
    <>
      {/* On affiche la navbar sur toutes les pages
          On passe user, handleLogout, cartCount et onCartOpen en props */}
      <Navbar
        user={user}
        onLogout={handleLogout}
        cartCount={cart.length}
        onCartOpen={() => setShowCart(true)}
      />

      {/* On définit les routes de l'application */}
      <Routes>

        {/* Route principale : Rendu Conditionnel
            Si user est connecté → on affiche les plantes
            Si user n'est pas connecté → on affiche la landing page */}
        <Route path="/" element={
          user ? (
            <>
              {/* On affiche la bannière en haut de la page */}
              <Banner title="La maison jungle" slogan="Chez vous, partout et ailleurs" />

              {/* On affiche la barre de recherche
                  onSearch met à jour l'état search */}
              <SearchBar onSearch={setSearch} />

              {/* On affiche les boutons de catégories
                  onSelect met à jour l'état category
                  selected est la catégorie actuellement sélectionnée */}
              <Categories onSelect={setCategory} selected={category} />

              {/* Rendu conditionnel : on affiche le panier si showCart est true */}
              {showCart && (
                <Cart
                  cart={cart}
                  total={total}
                  onClose={() => setShowCart(false)}
                  onClear={clearCart}
                />
              )}

              {/* On affiche les plantes filtrées selon la recherche et la catégorie */}
              <div className="shopping-list">
                {filteredPlants.map((plant) => (
                  <PlantItem
                    key={plant.id}
                    name={plant.name}
                    price={plant.price}
                    image={plant.image}
                    care={plant.care}
                    onAdd={() => addToCart(plant)}
                  />
                ))}
              </div>
              <Footer />
            </>
          ) : (
            /* Si pas connecté on affiche la landing page */
            <LandingPage />
          )
        } />

        {/* Route inscription */}
        <Route path="/register" element={<Register />} />

        {/* Route connexion : on passe setUser pour stocker l'utilisateur connecté */}
        <Route path="/login" element={<Login setUser={setUser} />} />

        {/* Route bienvenue */}
        <Route path="/welcome" element={<Welcome />} />

      </Routes>
    </>
  )
}

/* On exporte le composant App pour qu'il soit utilisé dans main.jsx */
export default App