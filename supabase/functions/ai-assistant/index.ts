import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const siteKnowledge = `
## Informations sur Ulrich Deschamp

### Identité et Contact
- Nom complet: Ulrich Deschamp (Kossonou Kouassi N'Tobeni)
- Localisation: Abidjan, Côte d'Ivoire
- Téléphone/WhatsApp: +225 0710224023
- Email principal: deschamp.deschamp222@gmail.com
- Email support: support@ulrichdeschampkossonou.online

### Expertise Professionnelle
Professionnel polyvalent avec plus de 5 ans d'expérience dans:
- Développement Web (React, Angular, Vue.js, Node.js, Python, .NET)
- Infographie et Design (logos, branding, chartes graphiques)
- Photographie professionnelle (événements, portraits, produits)
- Cadrage vidéo et montage
- Community Management et marketing digital
- E-commerce et boutiques en ligne

### Services Proposés

#### Développement Web
- Sites vitrines et portfolios
- Landing pages optimisées
- Applications SaaS complexes
- Boutiques en ligne avec paiement sécurisé
- Billetterie en ligne
- API et intégrations
- Maintenance et support

#### Design et Graphisme
- Conception de logos et identité visuelle
- Supports marketing (affiches, brochures, cartes)
- Kakémonos et supports d'impression
- Visuels pour réseaux sociaux
- Mockups et prototypes
- Retouche photo professionnelle

#### Community Management
- Stratégie de contenu
- Animation de communautés
- Planification éditoriale
- Reporting et analytics
- Marketing digital
- Gestion de réputation en ligne

#### Photo/Vidéo
- Couverture d'événements
- Portraits professionnels
- Photographie de produits
- Vidéos promotionnelles
- Montage et post-production
- Direction artistique

### Projets Réalisés
1. Portfolio Pasteur K.G
2. Landing Page - Fondation Miracle of God
3. Site Web - Hôtel Résidence Sunday
4. SaaS de gestion pour PME/TPE
5. Boutique en ligne - Open Mind Shop

### Processus de Collaboration
1. Consultation gratuite initiale
2. Analyse des besoins et objectifs
3. Devis détaillé personnalisé
4. Points réguliers pendant le développement
5. Livraison et révisions
6. Support post-livraison

### Tarification
- Devis sur mesure selon la complexité
- Facturation au forfait ou à l'heure
- Options de maintenance disponibles
- Planning flexible selon budget

### Délais Moyens
- Sites simples: 72 heures (3 jours)
- Projets complexes: 1-2 semaines
- Applications sur mesure: jusqu'à 1 mois

### Moyens de Paiement
- Transfert bancaire
- Espèces
- Mobile Money (Orange, MTN, Wave, Moovafrica)
- PayPal

### Formations Disponibles
- Développement web
- Community management
- Création graphique
- E-commerce
- Marketing digital

### Technologies Maîtrisées
Frontend: React, Angular, Vue.js
Backend: Node.js, Python, .NET
Mobile: iOS et Android
Cloud: AWS, Azure, Google Cloud
IA: Machine Learning, Automatisation
`;

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
        content: `Tu es l'assistant virtuel du portfolio d'Ulrich Deschamp, un professionnel polyvalent basé à Abidjan. 
        
Tu dois répondre de manière professionnelle, chaleureuse et précise en utilisant UNIQUEMENT les informations suivantes sur Ulrich Deschamp. 
Ne jamais inventer d'informations. Si une question sort du cadre de ces informations, redirige poliment vers le formulaire de contact ou WhatsApp.

${siteKnowledge}

Règles importantes:
1. Toujours répondre en français sauf si la question est posée dans une autre langue
2. Être concis mais informatif
3. Mettre en avant les compétences d'Ulrich
4. Encourager le contact direct pour les demandes de devis
5. Ne jamais donner de prix fixes sans consultation
6. Toujours rester professionnel et courtois
7. Utiliser les informations de contact correctes
8. Proposer WhatsApp (+225 0710224023) pour les discussions urgentes`
      },
      ...conversationHistory.slice(-10), // Keep last 10 messages for context
      { role: 'user', content: message }
    ];

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
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('OpenAI API error:', errorData);
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.choices[0].message.content;

    console.log('AI response generated successfully');

    return new Response(JSON.stringify({ response: aiResponse }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in ai-assistant function:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        response: "Désolé, je rencontre un problème technique. Veuillez contacter Ulrich directement au +225 0710224023." 
      }), 
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});