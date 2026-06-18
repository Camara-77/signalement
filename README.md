# Signalement Citoyen

## 1. Présentation du projet

Signalement Citoyen est une application web développée avec Angular qui permet aux habitants de Dakar de déclarer des incidents urbains (nid-de-poule, lampadaire cassé, dépôt de déchets, problème de sécurité, inondation, etc.) directement en ligne, sans passer par un appel téléphonique à la mairie. Chaque citoyen peut consulter la liste des signalements existants, filtrer par catégorie, soutenir une cause en votant, créer un nouveau signalement via un formulaire strictement validé, et consulter le détail d'un incident. L'objectif est de fournir à la municipalité une base de données fiable, structurée et exploitable des problèmes signalés sur le terrain.

## 2. Installation et lancement

Assurez-vous d'avoir [Node.js](https://nodejs.org/) (version 18 ou supérieure) et [Angular CLI](https://angular.dev/tools/cli) installés sur votre machine.

```bash
# 1. Cloner le dépôt
git clone https://github.com/Camara-77/signalement.git

# 2. Se déplacer dans le dossier du projet
cd signalement

# 3. Installer les dépendances
npm install

# 4. Lancer le serveur de développement
ng serve
```

L'application est ensuite accessible à l'adresse : **http://localhost:4200**

## 3. Architecture et découpage

L'application est organisée autour de 3 pages principales (composants routés) et de composants enfants réutilisables.

```bash
App (composant racine)

│
├── Header  → Barre de navigation, présente sur toutes les pages
│
├── ListeSignalement → route "/" — Composant Parent

│   ├── CarteSignalement → Composant Enfant, répété pour chaque signalement

│   │  Reçoit les données via @Input()

│   │  Émet l'action "Soutenir" via @Output()

│   └── Filtre par catégorie → géré directement dans ListeSignalement
|
├── NewSignalement → route "/signalement/creer"

│   └── Formulaire réactif (Reactive Forms) de création d'un signalement
|
└── DetailSignalement → route "/signalement/detail/:id"

└── Affiche le détail complet d'un signalement à partir de son identifiant

```
**Relation Parent / Enfant**

- **`ListeSignalement`** est le composant **Parent**. Il récupère la liste complète des signalements via le service, gère le filtre par catégorie, et transmet **un seul signalement à la fois** à chaque composant enfant généré dans la boucle d'affichage.
- **`CarteSignalement`** est le composant **Enfant**. Il ne connaît qu'un signalement (reçu via `@Input() signalement`) et ne modifie jamais directement la donnée. Quand l'utilisateur clique sur "Soutenir", il émet un événement (`@Output() soutenirEvent`) que le parent écoute pour déclencher l'incrémentation réelle du vote via le service.

## 4. Gestion de la donnée

Toutes les données de l'application sont centralisées dans **`SignalementService`** (`src/app/services/signalement.service.ts`), un service Angular fourni en singleton (`@Injectable({ providedIn: 'root' })`) et partagé par l'ensemble des composants.

Ce service est responsable de :

- la création des signalements (`addSignalement`)
- la récupération de tous les signalements (`getSignalements`)
- la récupération d'un signalement précis par son identifiant (`getSignalementById`)
- la suppression d'un signalement (`supprimerSignalement`)
- l'incrémentation du nombre de votes d'un signalement (`incrementerVotes`)

La persistance des données est assurée par le **`localStorage`** du navigateur : chaque ajout, suppression ou vote est immédiatement sauvegardé sous la clé `signalements`, ce qui garantit que les données restent disponibles même après un rafraîchissement de la page. Aucune base de données externe ni API backend n'est utilisée dans cette version du projet.

## 5. Fonctionnalités principales

- Affichage de la liste des signalements sous forme de cartes
- Filtrage des signalements par catégorie (Voirie, Électricité, Déchets, Sécurité, Inondation)
- Création d'un signalement via un formulaire réactif (Reactive Forms) avec validation stricte des champs
- Consultation du détail d'un signalement
- Système de soutien (votes) par signalement, communication Enfant → Parent via `@Output()`
- Suppression d'un signalement
- Persistance des données via `localStorage`

## 6. Stack technique

- **Angular** (Standalone Components, Reactive Forms, Router)
- **TypeScript**
- **Bootstrap 5** pour le style et la mise en page
- **Fontawesome** pour les icônes

## 7. Démo et déploiement

- **Dépôt GitHub** : [https://github.com/Camara-77/signalement](https://github.com/Camara-77/signalement)
- **Application en ligne** : [https://civic-tech-one.vercel.app/]

## 8. Equipe
- Aliou DIALLO
- Aissatou Combe CAMARA
- Fatoumata DRAME