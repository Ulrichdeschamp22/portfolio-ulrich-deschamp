import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const siteKnowledge = `
## PROFIL PROFESSIONNEL - ULRICH DESCHAMP

### 🔵 IDENTITÉ & CONTACT DIRECT
Nom complet: Ulrich Deschamp (Kossonou Kouassi N'Tobeni)
Titre: Expert Digital Full-Stack & Designer Créatif
Localisation: Abidjan, Côte d'Ivoire
Disponibilité: 7j/7 de 8h à 20h (GMT)

📱 WhatsApp Direct: +225 0710224023 (réponse en 15 min)
📧 Email Pro: deschamp.deschamp222@gmail.com
📧 Support: support@ulrichdeschampkossonou.online
🌐 Site Web: https://ulrichdeschampkossonou.online

### 🎯 EXPERTISE & EXPÉRIENCE
Expérience: 7+ ans dans le digital
Projets livrés: 150+ projets réussis
Clients satisfaits: 100+ entreprises
Taux de satisfaction: 98%
Spécialisation: Solutions digitales sur mesure pour PME/TPE

### 💼 SERVICES DÉTAILLÉS

#### 1️⃣ DÉVELOPPEMENT WEB & APPLICATIONS
✅ Sites Vitrines Premium
- Design moderne et responsive
- SEO optimisé pour Google
- Chargement ultra-rapide
- Compatible tous appareils
- Prix: À partir de 150.000 FCFA

✅ E-commerce & Boutiques en Ligne
- Catalogue produits illimité
- Paiement sécurisé (Orange/MTN/Wave/PayPal)
- Gestion des stocks automatique
- Tableau de bord vendeur
- Prix: À partir de 350.000 FCFA

✅ Applications SaaS
- Gestion commerciale complète
- CRM et facturation
- Multi-utilisateurs
- Cloud sécurisé
- Sur devis personnalisé

✅ Billetterie & Événementiel
- Vente de tickets en ligne
- QR codes sécurisés
- Contrôle d'accès mobile
- Rapports en temps réel
- Prix: À partir de 250.000 FCFA

✅ API & Intégrations
- WhatsApp Business API
- Paiements mobiles
- SMS Marketing
- Synchronisation données
- Tarif horaire: 25.000 FCFA/h

#### 2️⃣ DESIGN GRAPHIQUE & BRANDING
✅ Identité Visuelle Complète
- Logo professionnel (5 propositions)
- Charte graphique
- Cartes de visite
- Papier en-tête
- Pack complet: 75.000 FCFA

✅ Supports Marketing
- Affiches publicitaires: 15.000 FCFA
- Brochures 3 volets: 25.000 FCFA
- Flyers A5: 10.000 FCFA/100ex
- Kakémonos 85x200cm: 35.000 FCFA
- Cartes PVC premium: 30.000 FCFA/100

✅ Design Digital
- Visuels réseaux sociaux: 5.000 FCFA/visuel
- Bannières web animées: 20.000 FCFA
- Templates email: 15.000 FCFA
- Mockups produits: 10.000 FCFA

#### 3️⃣ COMMUNITY MANAGEMENT
✅ Gestion Réseaux Sociaux
- Facebook, Instagram, LinkedIn, TikTok
- 3 posts/semaine minimum
- Stories quotidiennes
- Réponse aux messages
- Forfait mensuel: 100.000 FCFA

✅ Stratégie Marketing Digital
- Audit de présence digitale
- Plan de contenu mensuel
- Campagnes publicitaires
- Analyse des performances
- Forfait stratégie: 150.000 FCFA

✅ Création de Contenu
- Rédaction articles blog: 10.000 FCFA
- Vidéos courtes (Reels): 15.000 FCFA
- Infographies: 8.000 FCFA
- Calendrier éditorial: 25.000 FCFA

#### 4️⃣ PHOTO & VIDÉO PROFESSIONNELLE
✅ Photographie
- Événements (mariage, conférence): 150.000 FCFA/jour
- Portraits professionnels: 50.000 FCFA/séance
- Photos produits e-commerce: 5.000 FCFA/produit
- Shooting immobilier: 75.000 FCFA

✅ Production Vidéo
- Clip promotionnel 2min: 200.000 FCFA
- Captation événement: 150.000 FCFA/jour
- Interview professionnelle: 75.000 FCFA
- Montage vidéo: 30.000 FCFA/heure
- Drone aérien: 100.000 FCFA/session

#### 5️⃣ FORMATIONS PROFESSIONNELLES
✅ Formations Disponibles
- Développement Web (HTML/CSS/JS): 150.000 FCFA
- WordPress Pro: 100.000 FCFA  
- Community Management: 75.000 FCFA
- Photoshop/Illustrator: 100.000 FCFA
- Marketing Digital: 125.000 FCFA
Durée: 1 mois intensif (3 séances/semaine)

### 📊 PORTFOLIO & RÉFÉRENCES

#### Projets Web Majeurs
1. 🏨 Hôtel Résidence Sunday
   - Site de réservation en ligne
   - Système de booking temps réel
   - Galerie virtuelle 360°
   - Multilingue (FR/EN)

2. ⛪ Fondation Miracle of God
   - Landing page moderne
   - Système de dons en ligne
   - Blog intégré
   - Newsletter automatique

3. 🛍️ Open Mind Shop
   - E-commerce 500+ produits
   - Paiement mobile money
   - Livraison tracking
   - Programme fidélité

4. 📊 SaaS Gestion PME
   - Facturation automatique
   - Gestion stocks
   - Comptabilité simplifiée
   - 50+ entreprises utilisatrices

5. 🎤 Portfolio Pasteur K.G
   - Site vitrine élégant
   - Calendrier événements
   - Streaming live intégré
   - Espace membres

#### Clients Références
- Orange CI (campagne digitale)
- MTN Business (supports print)
- Société Générale (vidéo corporate)
- Ministère du Commerce (site web)
- UNICEF Côte d'Ivoire (reportage photo)

### ⚡ PROCESSUS DE TRAVAIL

Étape 1: CONSULTATION GRATUITE (30 min)
- Appel WhatsApp ou rencontre
- Analyse des besoins
- Conseils personnalisés
- Sans engagement

Étape 2: PROPOSITION COMMERCIALE (24h)
- Devis détaillé transparent
- Planning de réalisation
- Conditions de paiement
- Garanties incluses

Étape 3: DÉVELOPPEMENT
- Brief créatif validé
- Maquettes/prototypes
- Validation par étapes
- Communication quotidienne

Étape 4: LIVRAISON
- Tests et optimisations
- Formation utilisation
- Documentation complète
- Transfert des accès

Étape 5: SUPPORT
- Assistance 30 jours offerte
- Maintenance mensuelle option
- Évolutions sur devis
- Hotline WhatsApp

### 💰 OPTIONS DE PAIEMENT

Modalités flexibles:
- 40% à la commande
- 40% à mi-parcours  
- 20% à la livraison

Moyens acceptés:
- Orange Money / MTN Money / Wave / Moov Money
- Virement bancaire (tous les banques CI)
- PayPal (clients internationaux)
- Espèces (sur Abidjan)
- Paiement échelonné possible (projets > 500.000 FCFA)

### ⏱️ DÉLAIS GARANTIS

Express (72h):
- Logo simple
- Flyers/Affiches
- Retouches photo
- Landing page

Standard (1 semaine):
- Site vitrine 5 pages
- Identité visuelle
- Vidéo courte
- Setup réseaux sociaux

Premium (2-4 semaines):
- E-commerce complet
- Application SaaS
- Campagne marketing
- Formation complète

### 🎁 AVANTAGES CLIENTS

✅ Consultation gratuite 30 min
✅ Devis sous 24h
✅ 3 révisions incluses
✅ Formation à l'utilisation
✅ Support 30 jours offert
✅ -10% client fidèle
✅ -15% sur 3 services combinés
✅ Paiement échelonné disponible
✅ Garantie satisfait ou remboursé

### 📞 CONTACT IMMÉDIAT

Besoin urgent? Contactez maintenant:
📱 WhatsApp: +225 0710224023 (cliquez pour discuter)
📧 Email: deschamp.deschamp222@gmail.com
💬 Chat en ligne: disponible sur le site
📍 Bureau: Cocody, Abidjan (sur RDV)

Heures d'ouverture:
Lundi-Vendredi: 8h-20h
Samedi: 9h-18h  
Dimanche: 10h-16h (urgences)
Réponse garantie en 30 min max

### 🌟 POURQUOI CHOISIR ULRICH DESCHAMP?

1. Expertise confirmée 7+ ans
2. Portfolio 150+ projets réussis
3. Support client 7j/7
4. Prix transparents et justes
5. Délais toujours respectés
6. Technologies dernière génération
7. Formation gratuite incluse
8. Réseau de partenaires fiables
9. Garantie satisfaction 100%
10. Références vérifiables

### 🔧 TECHNOLOGIES & OUTILS

Développement:
- Frontend: React, Vue.js, Angular, Next.js
- Backend: Node.js, Python, PHP, .NET
- Mobile: React Native, Flutter
- CMS: WordPress, Shopify, PrestaShop
- Base de données: MySQL, MongoDB, PostgreSQL
- Cloud: AWS, Google Cloud, Azure

Design:
- Adobe Creative Suite (Photoshop, Illustrator, InDesign)
- Figma, Sketch, Adobe XD
- After Effects, Premiere Pro
- Canva Pro, Capcut

Marketing:
- Google Ads, Facebook Ads
- Mailchimp, SendinBlue  
- Google Analytics, Tag Manager
- SEMrush, Ahrefs
- Hootsuite, Buffer

### 🏆 CERTIFICATIONS & FORMATIONS

- Google Digital Marketing Certificate
- Meta Social Media Marketing
- AWS Cloud Practitioner
- Adobe Certified Professional
- HubSpot Content Marketing
- Formation Continue en IA et Automatisation

### 💡 CONSEILS GRATUITS

Optimisation site web:
- Vitesse chargement < 3 secondes
- Mobile-first obligatoire
- SEO dès la conception
- Sécurité HTTPS/SSL
- Sauvegarde automatique

Réseaux sociaux:
- Publier 3x/semaine minimum
- Stories quotidiennes
- Répondre sous 2h
- Contenu 80% valeur, 20% promo
- Utiliser les hashtags locaux

E-commerce:
- Photos HD obligatoires
- Descriptions détaillées
- Reviews clients
- Livraison claire
- Support WhatsApp

### 📈 STATISTIQUES CLÉS

- 98% clients satisfaits
...
- 10+ technologies maîtrisées
`;

// Simple fallback generator when OpenAI is unavailable
const generateFallbackAnswer = (question: string): string => {
  const q = (question || '').toLowerCase();

  if (/(prix|co[uû]t|tarif|combien)/.test(q)) {
    return "Un site vitrine démarre à 150 000 FCFA et un e‑commerce à partir de 350 000 FCFA. Devis personnalisé gratuit sous 24h. WhatsApp +225 0710224023.";
  }
  if (/(d[ée]lai|temps|livraison|dur[ée])/.test(q)) {
    return "Sites simples en 72h, projets standards en 1 semaine, applications en 2 à 4 semaines. Support 30 jours offert. WhatsApp +225 0710224023.";
  }
  if (/(e[- ]?commerce|boutique|paiement|panier)/.test(q)) {
    return "Oui, création de boutiques avec paiement sécurisé, gestion des stocks et suivi commandes. Mise en ligne rapide. Contact WhatsApp +225 0710224023.";
  }
  if (/(community|r[ée]seaux|social|instagram|facebook|tiktok|linkedin)/.test(q)) {
    return "Gestion complète des réseaux sociaux dès 100 000 FCFA/mois avec contenu et reporting. Stratégie adaptée à votre activité. WhatsApp +225 0710224023.";
  }
  if (/(photo|vid[ée]o|shooting|montage|interview|drone)/.test(q)) {
    return "Photo/Vidéo pro: événements, produits, interviews, drone. Qualité garantie et livraison rapide. Réservez au +225 0710224023.";
  }
  if (/(formation|apprendre|cours|initiation)/.test(q)) {
    return "Formations pratiques en développement, design et marketing. Sessions intensives d’un mois. Écrivez sur WhatsApp +225 0710224023 pour le programme.";
  }
  if (/(contact|whatsapp|t[ée]l[ée]phone|appel|num[ée]ro)/.test(q)) {
    return "Contact direct: WhatsApp +225 0710224023 ou email deschamp.deschamp222@gmail.com. Réponse sous 30 minutes.";
  }
  return "Je peux vous aider pour le web, le design, le community management et la photo/vidéo. Dites-moi votre besoin et je vous conseille. WhatsApp +225 0710224023.";
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, conversationHistory = [] } = await req.json();

    console.log('Received message:', message);
    console.log('Conversation history length:', conversationHistory.length);

    const messages = [
      {
        role: 'system',
        content: `Tu es l'assistant IA intelligent d'Ulrich Deschamp, expert digital à Abidjan. Tu es professionnel, efficace et orienté solutions.

INSTRUCTIONS CRITIQUES:
1. Utilise UNIQUEMENT les informations de la base de connaissances ci-dessous
2. Réponds de manière DIRECTE et PERSONNALISÉE selon la question
3. TOUJOURS mentionner le contact WhatsApp +225 0710224023 pour devis/urgences
4. Si tu ne connais pas la réponse exacte, propose de contacter Ulrich directement
5. Sois commercial: mets en avant les avantages et incite à l'action
6. Utilise un ton professionnel mais chaleureux et accessible

BASE DE CONNAISSANCES COMPLÈTE:
${siteKnowledge}

RÈGLES DE RÉPONSE:
- Maximum 3-4 phrases courtes et percutantes
- Pas de formatage markdown (pas de **, ##, -, etc.)
- Toujours inclure un call-to-action (WhatsApp, email, devis)
- Personnalise selon le type de demande (technique, commercial, urgent)
- Pour les prix: donne les fourchettes disponibles + "devis personnalisé gratuit"
- Pour les délais: cite les délais moyens + "livraison garantie"
- Si question hors sujet: redirige poliment vers les services d'Ulrich

EXEMPLES DE RÉPONSES:
Q: Combien coûte un site web?
R: Un site vitrine professionnel démarre à 150.000 FCFA avec design moderne et SEO inclus. Pour un e-commerce complet comptez à partir de 350.000 FCFA. Contactez Ulrich au +225 0710224023 pour un devis gratuit adapté à vos besoins.

Q: Vous faites du community management?
R: Oui, Ulrich gère vos réseaux sociaux avec forfait mensuel à 100.000 FCFA incluant 3 posts/semaine et stories quotidiennes. Il augmente votre visibilité et vos ventes. WhatsApp +225 0710224023 pour démarrer votre stratégie digitale.

Q: Délai pour une application?
R: Ulrich livre les sites simples en 72h et les applications complexes en 2-4 semaines maximum. Toujours dans les délais avec support 30 jours offert. Appelez le +225 0710224023 pour discuter de votre projet.`
      },
      ...conversationHistory.slice(-10), // Keep last 10 messages for context
      { role: 'user', content: message }
    ];

    // If no API key, use deterministic fallback so the chatbot remains operational
    if (!openAIApiKey) {
      console.warn('OPENAI_API_KEY is missing. Using fallback answer.');
      const fallback = generateFallbackAnswer(message);
      return new Response(JSON.stringify({ response: fallback }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: messages,
        temperature: 0.7,
        max_tokens: 150,
      }),
    });

    if (response.status === 401) {
      console.error('OpenAI API returned 401. Falling back.');
      const fallback = generateFallbackAnswer(message);
      return new Response(JSON.stringify({ response: fallback }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (!response.ok) {
      const errorData = await response.text();
      console.error('OpenAI API error:', errorData);
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    let aiResponse = data.choices?.[0]?.message?.content || '';
    
    // Remove markdown formatting (asterisks, hashes, etc.)
    aiResponse = aiResponse.replace(/\*\*/g, ''); // Remove bold markdown
    aiResponse = aiResponse.replace(/\*/g, '');   // Remove italics
    aiResponse = aiResponse.replace(/#{1,6}\s/g, ''); // Remove headers
    aiResponse = aiResponse.replace(/^-\s/gm, ''); // Remove list markers
    aiResponse = aiResponse.trim(); // Clean up whitespace

    if (!aiResponse) {
      const fallback = generateFallbackAnswer(message);
      return new Response(JSON.stringify({ response: fallback }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    console.log('AI response generated successfully');

    return new Response(JSON.stringify({ response: aiResponse }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in ai-assistant function:', error);
    const fallback = generateFallbackAnswer(typeof message === 'string' ? message : '');
    return new Response(
      JSON.stringify({ 
        response: fallback,
        error: error instanceof Error ? error.message : 'unknown_error'
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});