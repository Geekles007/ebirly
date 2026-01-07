# 📄 Système de Génération de CV

Ce module permet de générer dynamiquement un CV en PDF à partir des données du site web en utilisant React-PDF.

## 🎨 Caractéristiques

- **Design professionnel et épuré** : Layout moderne avec typographie soignée
- **Génération dynamique** : Le CV est créé à la volée à partir des données de `src/data/resume.tsx`
- **Deux points d'accès** :
  - Bouton de téléchargement dans la navbar (en bas de page)
  - Bouton d'action dans la section Contact
- **Feedback visuel** : Indicateur de chargement pendant la génération
- **Gestion d'erreurs** : Messages d'erreur en cas de problème

## 📁 Structure des Fichiers

```
src/
├── lib/
│   └── cv-generator.tsx         # Template PDF avec styles
├── components/
│   ├── download-cv-button.tsx   # Bouton pour la navbar
│   └── download-cv-action.tsx   # Bouton pour la page
```

## 🔧 Technologies Utilisées

- **@react-pdf/renderer** (v4.3.2) : Génération de PDF côté client
- **React** : Composants et hooks
- **TypeScript** : Typage fort
- **Lucide React** : Icônes

## 📝 Données Incluses

Le CV généré comprend toutes les sections suivantes :

1. **En-tête**
   - Nom complet
   - Rôle/Description
   - Localisation
   - Coordonnées (email, téléphone)
   - Liens sociaux (GitHub, LinkedIn)

2. **Profil**
   - Résumé professionnel

3. **Expérience Professionnelle**
   - Entreprise
   - Poste
   - Période et localisation
   - Description des responsabilités

4. **Éducation**
   - Établissement
   - Diplôme
   - Période

5. **Certifications**
   - Titre de la certification
   - Organisme
   - Année d'obtention

6. **Compétences**
   - Liste des technologies et compétences

7. **Langues**
   - Langue et niveau

8. **Hobbies & Intérêts**
   - Activités et descriptions

## 🎨 Design & Styles

Le PDF utilise un design minimaliste et professionnel avec :

- **Police** : Helvetica (standard PDF)
- **Couleurs** :
  - Noir (#000000) pour les titres principaux
  - Gris foncé (#333-#555) pour le contenu
  - Bleu (#0066cc) pour les liens
- **Hiérarchie visuelle** : Titres en majuscules avec espacement des lettres
- **Espacements** : Marges généreuses et sections bien délimitées
- **Séparateurs** : Lignes subtiles pour séparer les sections

## 🚀 Utilisation

### Dans la Navbar

Le bouton de téléchargement est intégré automatiquement dans la navbar en bas de page. Il remplace le lien statique vers `/cv.pdf` qui était utilisé auparavant.

### Dans la Section Contact

Un bouton d'action plus visible a été ajouté dans la section contact de la page d'accueil pour faciliter le téléchargement.

### Modification des Données

Pour modifier le contenu du CV, il suffit d'éditer le fichier `src/data/resume.tsx`. Les changements seront automatiquement reflétés dans le PDF généré.

## 🔄 Comment Ça Marche

1. L'utilisateur clique sur le bouton de téléchargement
2. Le composant récupère les données de `DATA` (resume.tsx)
3. Les données sont formatées et passées au composant `CVDocument`
4. React-PDF génère le document PDF côté client
5. Le PDF est automatiquement téléchargé avec le nom : `Nom_Prenom_CV.pdf`

## ⚡ Performance

- La génération du PDF se fait côté client (pas de requête serveur)
- Temps de génération : < 2 secondes en moyenne
- Pas de cache nécessaire, génération à la demande

## 🛠️ Maintenance

### Ajouter une Nouvelle Section

1. Ajouter les données dans `src/data/resume.tsx`
2. Créer le style dans `cv-generator.tsx`
3. Ajouter la section dans le composant `CVDocument`

### Modifier le Design

Tous les styles sont centralisés dans l'objet `styles` du fichier `cv-generator.tsx`. Utilisez les conventions de style de React-PDF (similaire à React Native).

### Gestion des Erreurs

En cas d'erreur lors de la génération :
- Un message d'erreur s'affiche à l'utilisateur
- L'erreur est loguée dans la console pour le débogage
- Le bouton revient à son état normal

## 📦 Installation des Dépendances

Si vous clonez le projet, n'oubliez pas d'installer les dépendances :

```bash
yarn install
# ou
npm install
```

## 🐛 Débogage

Pour déboguer le PDF généré :

1. Vérifier la console du navigateur pour les erreurs
2. Tester les données dans `resume.tsx`
3. Vérifier que toutes les descriptions sont correctement formatées

## 🎯 Améliorations Futures

- [ ] Thème sombre/clair pour le PDF
- [ ] Personnalisation des couleurs
- [ ] Export en plusieurs langues
- [ ] Prévisualisation avant téléchargement
- [ ] Différents templates de CV

---

**Note** : Ce système remplace l'ancien fichier statique `public/cv.pdf`. Vous pouvez le supprimer si vous n'en avez plus besoin.

