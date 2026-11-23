# 🎈🏎️ Mes Jeux

Portail de jeux pour enfants, pensé pour tablette. Il s'installe comme une appli et fonctionne ensuite sans internet.

- **🎈 Le Pendu des Ballons** (`pendu/`) : jeu du pendu, 3 niveaux (facile, moyen, difficile) + mode Dictée.
- **🏎️ La Course du Calcul** (`course-du-calcul/`) : chaque bonne réponse fait avancer la voiture ; 10 bonnes réponses pour passer la ligne d'arrivée avant l'adversaire (escargot 🐌, lapin 🐇 ou guépard 🐆). Niveaux : additions jusqu'à 10, + et − jusqu'à 20, + et − jusqu'à 100, tables de multiplication (choix des tables de 2 à 10).

## Installer sur la tablette

1. Ouvrir l'adresse GitHub Pages du portail dans le navigateur de la tablette (une seule fois, avec internet).
2. **iPad (Safari)** : bouton Partager → « Sur l'écran d'accueil ».
   **Android (Chrome)** : menu ⋮ → « Installer l'application » ou « Ajouter à l'écran d'accueil ».
3. Lancer depuis l'icône : les deux jeux marchent ensuite hors connexion.

Une tablette où le Pendu était déjà installé ouvre directement le portail, rien à réinstaller.

## Mode Dictée

Les mots du mode Dictée sont dans `pendu/dictee.json` :

```json
{ "titre": "Semaine du 23 novembre", "mots": ["maison", "école", "cartable"] }
```

Le mot est lu à voix haute (bouton 🔊). La tablette récupère la nouvelle liste dès qu'elle est connectée, puis la garde pour jouer hors-ligne.

## Fichiers

- `index.html` : le portail (choix du jeu)
- `pendu/index.html`, `pendu/dictee.json` : le Pendu des Ballons et les mots de la semaine
- `course-du-calcul/index.html` : la Course du Calcul (`icone.png` : son image sur le portail)
- `manifest.webmanifest` : nom, icône, plein écran (commun aux deux jeux)
- `sw.js` : mise en cache pour le mode hors-ligne (commun aux deux jeux)
- `icon-*.png`, `apple-touch-icon.png` : icônes de l'appli

Pour publier une mise à jour, changer `CACHE = "jeux-v1"` en `jeux-v2` dans `sw.js` afin que les tablettes récupèrent la nouvelle version.
Pour ajouter un jeu : créer son dossier, ajouter une carte dans `index.html` et ses fichiers dans la liste `FILES` de `sw.js`.
