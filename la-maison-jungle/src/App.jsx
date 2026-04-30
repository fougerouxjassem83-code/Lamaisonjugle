/*************************************************************************************************/
/**                                                                                             **/
/**   App.jsx est le composant principal de l'application "La Maison Jungle".                  **/
/**   Il importe et affiche le composant Banner qui constitue l'en-tête du site.               **/
/**   C'est le point d'entrée de l'interface, appelé depuis main.jsx.                          **/
/**                                                                                             **/
/*************************************************************************************************/

import { useState, useEffect } from 'react'
/* On importe les Hooks useState et useEffect depuis React
   - useState : permet de créer des variables réactives
   - useEffect : permet d'exécuter du code au chargement du composant */

import './App.css'
/* On importe le fichier CSS global de l'application */

import Banner from './components/Banner'
/* On importe le composant Banner depuis le dossier components */

import PlantItem from './components/PlantItem'
/* On importe le composant PlantItem depuis le dossier components */

import Footer from './components/Footer'
/* On importe le composant Footer depuis le dossier components */

import Cart from './components/Cart'
/* On importe le composant Cart depuis le dossier components */

/************************************************************************************* */
/**    ICI JE CONFIGURE LA ROUTE POUR RECUPÉRER LES PLANTES                          */
/**    DANS MA BASES DE DONNÉES                                                        */
/************************************************************************************ */

function App() {
  /* Hook useState : on crée une variable réactive "plants" qui commence vide []
     setPlants est la fonction qui permet de modifier cette variable */
  const [plants, setPlants] = useState([])

  /* Hook useState : on crée une variable réactive "cart" pour stocker le panier
     Le panier commence vide [] */
  const [cart, setCart] = useState([])

  /* Hook useState : on crée une variable réactive "showCart" pour afficher/cacher le panier
     false = caché par défaut */
  const [showCart, setShowCart] = useState(false)

  /* Hook useEffect : ce code s'exécute une seule fois au chargement de la page
     Le [] à la fin signifie "ne fais ça qu'une seule fois" */
  useEffect(() => {
    fetch('http://localhost:3000/plants')
      /* fetch envoie une requête HTTP GET à notre API Express */
      .then((response) => response.json())
      /* On convertit la réponse en JSON */
      .then((data) => {
        /* On stocke les plantes dans notre état avec setPlants
           React va automatiquement re-rendre le composant */
        setPlants(data)
      })
  }, [])

  /* Gestionnaire d'événement : fonction qui ajoute une plante au panier
     Le Spread Operator "..." copie toutes les plantes déjà dans le panier
     et ajoute la nouvelle plante à la fin */
  const addToCart = (plant) => {
    setCart([...cart, plant])
  }

  /* Gestionnaire d'événement : fonction qui vide le panier
     On remet simplement le panier à vide [] */
  const clearCart = () => {
    setCart([])
  }

  /* Méthode de tableau reduce() : elle itère sur chaque plante du panier
     et accumule les prix pour calculer le total
     acc = accumulateur qui commence à 0
     plant.price = le prix de chaque plante */
  const total = cart.reduce((acc, plant) => acc + plant.price, 0)

  return (
    <>
      {/* On affiche la bannière en haut de la page */}
      <Banner title="La maison jungle" slogan="Chez vous, partout et ailleurs" />

      {/* Callback : on passe une fonction fléchée à onClick
          qui met showCart à true pour afficher le panier
          cart.length affiche le nombre de plantes dans le panier */}
      <button onClick={() => setShowCart(true)}>🛒 Panier ({cart.length})</button>

      {/* Rendu Conditionnel : si showCart est true on affiche le Cart
          on passe les props : cart, total, onClose (callback) et onClear (callback) */}
      {showCart && (
        <Cart
          cart={cart}
          total={total}
          onClose={() => setShowCart(false)}
          /* Callback : ferme le panier en mettant showCart à false */
          onClear={clearCart}
          /* Callback : vide le panier en appelant clearCart */
        />
      )}

      {/* Méthode map() : on itère sur chaque plante et on crée un PlantItem
          onAdd est un callback qui appelle addToCart avec la plante concernée */}
      <div className="shopping-list">
        {plants.map((plant) => (
          <PlantItem
            key={plant.id}
            name={plant.name}
            price={plant.price}
            image={plant.image}
            care={plant.care}
            onAdd={() => addToCart(plant)}
            /* Callback : ajoute la plante au panier quand on clique sur Ajouter */
          />
        ))}
      </div>

      {/* On affiche le footer en bas de la page */}
      <Footer />
    </>
  )
}

/* On exporte le composant App pour qu'il soit utilisé dans main.jsx */
export default App