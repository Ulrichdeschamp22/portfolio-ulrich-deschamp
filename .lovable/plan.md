# Refonte des visuels 3D — Mes Compétences

## Général
- Supprimer tous les effets de survol et mouvements sur les visuels : ils deviennent fixes (pas de rotation, pas de flottement).
- Visuels plus détaillés, réalistes et faciles à comprendre, en restant légers pour mobile et Mac.

## Section par section
- **Développement Web** : MacBook dans la même position qu'aujourd'hui ; à l'écran, éditeur de code VS Code à gauche et, à droite, l'aperçu d'un site vitrine d'agence immobilière.
- **Applications SaaS** : nouveau visuel (tableau de bord SaaS sur écran, graphiques, abonnements).
- **Applications Mobiles** : un iPhone 17 et un Android côte à côte avec une appli de restaurant (menu, panier, suivi du livreur). En dessous, badges App Store et Google Play.
- **Applications Web** : page de connexion avec une photo de femme africaine à côté du formulaire.
- **Solutions Digitales & Événementiel** : outil de wedding planner (calendrier, liste d'invités, tâches) + bloc de paiement sécurisé (Mobile Money, carte, cadenas).
- **Plateformes de Vote en Ligne** : téléphone + ordinateur montrant des cartes de candidats par catégorie avec bouton voter et pourcentages.
- **Billetterie d'Événement** : ticket physique, ticket en ligne avec QR code, agent qui scanne un ticket, et page d'achat sur un site.
- **Création de Landing Page** : remplacer la zone entourée à droite par une page de vente de formation (programme, prix, bouton s'inscrire).
- **Tunnels de Vente** : visuel entièrement refait, simple : 4 étapes claires (Publicité → Page → Paiement → Merci) avec chiffres.
- **Design Graphique** : mockups 3D pour logos & branding, affiches publicitaires, charte graphique, contenus digitaux, mockups & retouche photo, packaging & print.
- **Photographie & Vidéo** : studio avec softbox, fond vert, lumières et caméra.

## Détails techniques
- Réécriture des composants `src/components/skills/Skill3D*.tsx` concernés (CSS/Framer Motion, sans hover ni animations continues).
- Images réalistes (femme africaine, scène studio, mockups) générées et intégrées comme images importées.
- Badges stores en SVG inline. `Skills.tsx` garde le lazy-loading.
