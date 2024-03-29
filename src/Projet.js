import React from 'react';

function Projets() {
  return (
    <section id="projets">
      <h2>Mes plus beaux projets</h2>
      <div className="projet">
        <h3>TramStras</h3>
        <div class="container-tramstras">
          <img src="/TramStrasLogoRed.png" alt="TramStras"></img>
        </div>
        <p>TramStras est un site dédié à l'information sur les transports en commun de Strasbourg, avec des mises à jour en temps réel. Il propose différentes fonctionnalitées dont voici une liste exaustive :
        </p>
        <ul>
          <li>Une liste des messages de la CTS</li>
          <li>Un Forum</li>
          <li>Une carte intéractive Leaflet avec OpenstreetMap. Chaque arrêt de tram ou de bus comprends un calculateur d'itinéraire entre la géolocalisation de l'utilisateur et l'arrêt choisit ainsi que les horaires de passages.
            L'utilisateur peut également poster un marqueur personnalisé qui est partagé avec un libellé pour signaler une perturbation aux les autres utilisateurs.
          </li>
          <li>Une fonction "Demander de l'aide" qui affiche une pop-up aux autres utilisateurs et à l'agence de sécuritée pour informer d'une agression en cours</li>
          <li>Une liste des différentes offre proposée par la CTS</li>
          <li>Une vue profil qui répertorie l'ensemble des informations du compte</li>
          <li>Une intérface statistique pour l'agence de sécuritée</li>
          <li>Une intérface administration</li>
        </ul>
        <a href="https://tramstras.ovh/" target="_blank" rel="noopener noreferrer">Visiter le site</a>
      </div>

      <div className="projet">
        <h3>VerifPassword</h3>
        <div class="container-verifpassword">
        <img src="/verifpasswordImage.jpg" alt="VerifPassword" />
        </div>
        <p>VerifPassword est une application web qui recherche parmi plusieurs violations de données pour voir si votre adresse e-mail a été compromise. Construite en React.js, elle appelle l'API de IHaveBeenPwned.
        </p>
        <a href="https://verifpassword.ovh/" target="_blank" rel="noopener noreferrer">Visiter le site</a>
      </div>
    </section>
  );
}

export default Projets;
