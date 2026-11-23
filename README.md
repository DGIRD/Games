# 🎈 Le Pendu des Ballons

Jeu du pendu pour enfants, pensé pour tablette, avec 3 niveaux (facile, moyen, difficile).
Il s'installe comme une appli et fonctionne ensuite sans internet.

## Installer sur la tablette

1. Ouvrir l'adresse GitHub Pages du jeu dans le navigateur de la tablette (une seule fois, avec internet).
2. **iPad (Safari)** : bouton Partager → « Sur l'écran d'accueil ».
   **Android (Chrome)** : menu ⋮ → « Installer l'application » ou « Ajouter à l'écran d'accueil ».
3. Lancer le jeu depuis l'icône : il marche ensuite hors connexion.

## Fichiers

- `index.html` : le jeu (mots, règles, graphismes, sons)
- `manifest.webmanifest` : nom, icône, plein écran
- `sw.js` : mise en cache pour le mode hors-ligne
- `icon-*.png` : icônes

Pour publier une mise à jour, changer `CACHE = "pendu-v1"` en `pendu-v2` dans `sw.js` afin que les tablettes récupèrent la nouvelle version.
