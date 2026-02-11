const faqs = [
  {
    question: 'Puis-je changer de plan à tout moment ?',
    answer: 'Oui, vous pouvez passer à un plan supérieur à tout moment. Le changement sera effectif immédiatement et la différence sera calculée au prorata.',
  },
  {
    question: 'Quels sont les délais de réalisation ?',
    answer: 'Les délais varient selon le projet : 1-2 semaines pour une landing page, 3-4 semaines pour un site complet, et 6-12 semaines pour les applications et plateformes complexes.',
  },
  {
    question: 'Comment se passe le paiement ?',
    answer: 'Nous acceptons les paiements par virement bancaire, Orange Money, Wave et autres moyens de paiement mobile. Un acompte de 50% est demandé au démarrage.',
  },
  {
    question: 'Proposez-vous des devis personnalisés ?',
    answer: 'Absolument ! Pour des projets spécifiques ou sur mesure, contactez-nous pour obtenir un devis adapté à vos besoins exacts.',
  },
  {
    question: 'La maintenance est-elle incluse ?',
    answer: 'Selon le plan choisi, la maintenance peut être incluse de 3 mois à 1 an. Au-delà, nous proposons des contrats de maintenance à partir de 25 000 FCFA/mois.',
  },
];

const PricingFAQ = () => (
  <div className="max-w-3xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-10">Questions fréquentes</h2>
    <div className="space-y-6">
      {faqs.map((faq, idx) => (
        <div key={idx} className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
          <h3 className="font-semibold mb-2">{faq.question}</h3>
          <p className="text-muted-foreground text-sm">{faq.answer}</p>
        </div>
      ))}
    </div>
  </div>
);

export default PricingFAQ;
