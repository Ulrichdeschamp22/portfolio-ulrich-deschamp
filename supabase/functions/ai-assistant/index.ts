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
📧 Email Pro: deschamp@gmail.com
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
📧 Email: deschamp@gmail.com
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

// Enhanced local answer generator using the embedded knowledge base when OpenAI is unavailable
const generateFallbackAnswer = (question: string): string => {
  const qRaw = (question || '').slice(0, 1000);
  const normalize = (s: string) =>
    s
      .toLowerCase()
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '')
      .replace(/[^a-z0-9\s]/g, ' ')
      .replace(/\s+/g, ' ') // collapse spaces
      .trim();

  const q = normalize(qRaw);
  const has = (pattern: RegExp | string) =>
    typeof pattern === 'string' ? q.includes(normalize(pattern)) : pattern.test(q);

  // Helpers to extract relevant parts from the knowledge base text
  const getSection = (title: string) => {
    const start = siteKnowledge.indexOf(title);
    if (start === -1) return '';
    const rest = siteKnowledge.slice(start);
    const nextIdx = rest.search(/\n### |\n#### /); // next major/minor section
    const section = nextIdx !== -1 ? rest.slice(0, nextIdx) : rest;
    return section
      .replace(/^[#\-\s]+/gm, '')
      .replace(/\s{2,}/g, ' ')
      .trim();
  };

  const compose = (lines: string[]) => lines.filter(Boolean).join(' ').trim();
  const CTA = 'Contact direct WhatsApp +225 0710224023 ou email deschamp@gmail.com pour un devis gratuit.';

  // Fast intents
  if (has(/(contact|whatsapp|appel|telephone|t[eé]l[eé]phone|num[eé]ro|rdv|urgence)/)) {
    return compose([
      'Vous pouvez joindre Ulrich immédiatement par WhatsApp au +225 0710224023 ou par email à deschamp@gmail.com.',
      'Disponibilité 7j/7 de 8h à 20h à Abidjan, réponse sous 30 minutes.',
    ]);
  }

  // Pricing intent
  if (has(/(prix|cout|co[uû]t|tarif|combien|budget)/)) {
    return compose([
      'Un site vitrine professionnel démarre à 150 000 FCFA et un e‑commerce complet à partir de 350 000 FCFA.',
      'Des packs design, community management et photo/vidéo sont disponibles à prix transparents selon vos besoins.',
      CTA,
    ]);
  }

  // Delays intent
  if (has(/(delai|d[eé]lai|temps|livraison|duree|dur[ée]e)/)) {
    return compose([
      'Sites simples livrés en 72h, projets standards en 1 semaine, applications en 2 à 4 semaines.',
      'Support 30 jours offert et livraison garantie dans les délais.',
      CTA,
    ]);
  }

  // E‑commerce intent
  if (has(/(e[- ]?commerce|boutique|paiement|panier|produit|catalogue|commande|livraison)/)) {
    return compose([
      'Création de boutiques en ligne avec paiement sécurisé, gestion des stocks, suivi des commandes et tableau de bord vendeur.',
      'Mise en ligne rapide avec SEO et performance optimisés.',
      CTA,
    ]);
  }

  // Community Management intent
  if (has(/(community|r[eé]seaux|social|instagram|facebook|tiktok|linkedin|cm|social media)/)) {
    return compose([
      'Gestion complète des réseaux sociaux dès 100 000 FCFA/mois: 3 posts/semaine, stories quotidiennes, réponses aux messages et reporting.',
      'Stratégie adaptée pour augmenter visibilité et ventes.',
      CTA,
    ]);
  }

  // Photo / Video intent
  if (has(/(photo|video|vid[eé]o|shooting|montage|interview|drone|captation)/)) {
    return compose([
      'Photo/vidéo pro: événements, portraits, produits e‑commerce, interviews, drone, montage et livraison rapide.',
      'Qualité garantie pour booster votre image de marque.',
      CTA,
    ]);
  }

  // Training intent
  if (has(/(formation|apprendre|cours|initiation|entrainement|bootcamp)/)) {
    return compose([
      'Formations intensives d’un mois en développement web, WordPress, community management, design et marketing digital.',
      'Programme pratique avec 3 séances/semaine et accompagnement.',
      CTA,
    ]);
  }

  // Payments / Methods
  if (has(/(paiement|payer|orange money|mtn|wave|virement|paypal|echelonne|modalit[eé]s)/)) {
    return compose([
      'Modalités flexibles: 40% à la commande, 40% à mi‑parcours, 20% à la livraison; paiement échelonné possible.',
      'Moyens acceptés: Orange/MTN/Wave, virement bancaire, PayPal, espèces.',
      CTA,
    ]);
  }

  // Process intent
  if (has(/(processus|process|etape|comment ca marche|methode|workflow)/)) {
    return compose([
      'Processus en 5 étapes: consultation gratuite, devis en 24h, développement, livraison, support.',
      'Communication claire, validations par étapes et documentation incluse.',
      CTA,
    ]);
  }

  // Portfolio intent
  if (has(/(portfolio|r[eé]f[eé]rences|projets|exemples|d[eé]mos|clients)/)) {
    return compose([
      'Exemples: Hôtel Résidence Sunday (booking temps réel), Fondation Miracle of God (dons en ligne), Open Mind Shop (e‑commerce 500+ produits).',
      'Plus de 150 projets livrés avec 98% de satisfaction.',
      CTA,
    ]);
  }

  // Availability / Schedule
  if (has(/(horaire|disponibilit[eé]|ouverture|weekend|dimanche|samedi)/)) {
    return compose([
      'Disponibilité 7j/7: L‑V 8h‑20h, Samedi 9h‑18h, Dimanche 10h‑16h (urgences).',
      'Réponse garantie en 30 minutes maximum.',
      CTA,
    ]);
  }

  // Technologies / Stack
  if (has(/(technologie|stack|outil|react|wordpress|shopify|prestashop|aws|cloud|figma|adobe|marketing)/)) {
    return compose([
      'Ulrich maîtrise les stacks modernes: React, WordPress/Shopify/PrestaShop, Node.js, AWS/Azure/GCP, Figma et Adobe Suite.',
      'Solutions robustes, performantes et évolutives.',
      CTA,
    ]);
  }

  // Default general services answer, lightly personalized by detecting the main interest
  const serviceHint = has(/(site|vitrine|web)/)
    ? 'site vitrine moderne et optimisé SEO dès 150 000 FCFA'
    : has(/(app|saas|application)/)
    ? 'application sur mesure livrée en 2 à 4 semaines'
    : has(/(identit[eé]|logo|design|branding)/)
    ? 'identité visuelle complète avec logo et charte à 75 000 FCFA'
    : 'solutions digitales sur mesure pour PME/TPE (web, e‑commerce, design, social, photo/vidéo)';

  return compose([
    `Ulrich propose ${serviceHint} avec une qualité professionnelle et un accompagnement complet.`,
    'Plus de 150 projets réussis et 98% de satisfaction, délais respectés et support 30 jours offert.',
    CTA,
  ]);
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