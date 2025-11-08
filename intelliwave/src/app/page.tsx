const SectionTitle = ({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) => (
  <div className="max-w-3xl space-y-4 text-center md:text-left">
    <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-300">
      {eyebrow}
    </p>
    <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
      {title}
    </h2>
    <p className="text-lg text-slate-300">{description}</p>
  </div>
);

const IconSpark = () => (
  <svg
    className="h-6 w-6 text-indigo-300"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v3m0 12v3m9-9h-3M6 12H3m13.364-6.364-2.121 2.121M8.757 15.243l-2.12 2.121m0-10.606 2.12 2.121m6.486 6.485 2.121 2.121"
    />
  </svg>
);

const IconWorkflow = () => (
  <svg
    className="h-6 w-6 text-indigo-300"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 7.5h4.5M6 7.5A1.5 1.5 0 1 1 6 4.5h12a1.5 1.5 0 1 1 0 3m-12 0v9m12-9v9m0 0H9.75m0 0A1.5 1.5 0 1 1 9.75 18H6"
    />
  </svg>
);

const IconChat = () => (
  <svg
    className="h-6 w-6 text-indigo-300"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 12h7.5m-7.5 3h4.5M5.25 21 3 18.75V5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25v9A2.25 2.25 0 0 1 18.75 16.5H8.25L5.25 21Z"
    />
  </svg>
);

export default function Home() {
  const services = [
    {
      icon: <IconChat />,
      title: "Chatbots multicanaux",
      description:
        "Automatisez vos conversations sur WhatsApp, Messenger, webchat ou support interne avec des flux n8n orchestrés comme un chef d’orchestre.",
    },
    {
      icon: <IconWorkflow />,
      title: "Workflows data-driven",
      description:
        "Connectez CRM, helpdesk et bases de connaissances pour proposer des réponses ultra-personnalisées alimentées par vos données en temps réel.",
    },
    {
      icon: <IconSpark />,
      title: "IA de confiance",
      description:
        "Combinaison de modèles LLM, règles métiers et garde-fous pour garantir la précision, la conformité et la supervision humaine.",
    },
  ];

  const differentiators = [
    {
      title: "Architecture n8n optimisée",
      description:
        "Nous concevons des workflows maintenables, versionnés et monitorés, prêts pour la scalabilité de vos opérations.",
      stat: "120+",
      caption: "workflows déployés avec succès",
    },
    {
      title: "Chatbots hyper-contextualisés",
      description:
        "Nos agents combinent RAG, mémoire conversationnelle et actions automatisées pour des expériences qui paraissent humaines.",
      stat: "85%",
      caption: "temps de réponse réduit en moyenne",
    },
    {
      title: "Pilotage & training continu",
      description:
        "Dashboards qualité, A/B testing et accompagnement aux prompts pour garder vos bots performants.",
      stat: "24h",
      caption: "pour livrer un premier prototype fonctionnel",
    },
  ];

  const process = [
    {
      step: "01",
      name: "Exploration & cadrage",
      detail:
        "Audit de vos process, cartographie des canaux et définition d’objectifs mesurables.",
    },
    {
      step: "02",
      name: "Design conversationnel",
      detail:
        "Construction des parcours utilisateurs, ton de voix et intégrations de données clés.",
    },
    {
      step: "03",
      name: "Automatisation n8n",
      detail:
        "Développement des workflows, connexions API et mise en place des contrôles qualité.",
    },
    {
      step: "04",
      name: "Pilotage & évolution",
      detail:
        "Monitoring continu, optimisation par la data et formation de vos équipes.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Intelliwave a remplacé notre support première ligne en trois semaines avec un agent n8n fiable qui escalade uniquement les cas complexes.",
      author: "Lina Dupont",
      role: "COO • SyncFlow",
    },
    {
      quote:
        "Leur approche data nous a permis de doubler le taux de conversion de nos campagnes entrants grâce à un chatbot WhatsApp proactif.",
      author: "Hugo Marchal",
      role: "Head of Growth • Nova Workspace",
    },
  ];

  const faqs = [
    {
      question: "Combien de temps pour lancer un chatbot n8n ?",
      answer:
        "Nous livrons un prototype opérationnel en 10 jours ouvrés maximum, suivi d’un cycle d’ajustements piloté par vos retours utilisateurs.",
    },
    {
      question: "Pouvez-vous intégrer nos outils existants ?",
      answer:
        "Oui, nous connectons vos CRM, helpdesk, bases clients ou ERP via API, base de données ou connecteurs natifs n8n.",
    },
    {
      question: "Proposez-vous un accompagnement après le lancement ?",
      answer:
        "Chaque projet inclut un plan de maintenance et d’amélioration continue avec indicateurs de performance et sessions de formation.",
    },
  ];

  const logos = ["n8n", "OpenAI", "HubSpot", "Slack", "Zendesk", "Notion"];

  return (
    <div className="relative min-h-screen overflow-hidden text-slate-100">
      <div className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.4),rgba(3,7,18,0.1))]" />
      <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <span className="rounded-lg bg-white/5 px-3 py-2 text-sm font-semibold tracking-widest text-indigo-300">
              INTELLIWAVE
            </span>
            <p className="text-sm text-slate-300">
              Agence d’automatisation AI & n8n
            </p>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
            <a className="transition hover:text-white" href="#services">
              Services
            </a>
            <a className="transition hover:text-white" href="#impact">
              Impact
            </a>
            <a className="transition hover:text-white" href="#process">
              Méthode
            </a>
            <a className="transition hover:text-white" href="#faq">
              FAQ
            </a>
          </nav>
          <a
            href="#contact"
            className="rounded-full border border-indigo-400/40 bg-indigo-500/20 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-500/30"
          >
            Lancer mon projet
          </a>
        </div>
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-20 md:gap-28 md:pt-28">
        <section className="grid gap-12 md:grid-cols-[1.2fr,0.8fr] md:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 shadow shadow-indigo-500/10">
              <span className="font-medium text-indigo-300">Nouvelle ère</span>
              Automatisation pilotée par l’IA
            </div>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              Des chatbots n8n sur mesure qui répondent, apprennent et
              déclenchent vos meilleures actions business.
            </h1>
            <p className="max-w-2xl text-lg text-slate-300">
              Intelliwave imagine, construit et pilote vos agents conversationnels
              avec la puissance combinée de l’IA générative et des workflows n8n.
              Transformez chaque interaction en opportunité mesurable.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-400"
              >
                Réserver un diagnostic gratuit
              </a>
              <a
                href="#impact"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-indigo-400/60 hover:text-white"
              >
                Voir nos cas clients
              </a>
            </div>
            <dl className="grid gap-6 sm:grid-cols-3">
              <div>
                <dt className="text-sm text-slate-400">Intentions traitées</dt>
                <dd className="mt-1 text-3xl font-semibold text-white">250k+</dd>
              </div>
              <div>
                <dt className="text-sm text-slate-400">Automatisations actives</dt>
                <dd className="mt-1 text-3xl font-semibold text-white">180</dd>
              </div>
              <div>
                <dt className="text-sm text-slate-400">Satisfaction client</dt>
                <dd className="mt-1 text-3xl font-semibold text-white">4.9/5</dd>
              </div>
            </dl>
          </div>
          <div className="relative flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_40px_80px_-40px_rgba(45,212,191,0.35)]">
            <h3 className="text-lg font-semibold text-white">
              Ce que nous automatisons pour vous
            </h3>
            <ul className="space-y-4 text-sm text-slate-200">
              <li className="flex items-start gap-3 rounded-2xl border border-white/5 bg-slate-900/40 p-4">
                <span className="mt-1 h-2 w-2 flex-none rounded-full bg-emerald-400" />
                <div>
                  <p className="font-semibold text-white">
                    Support client de niveau 1
                  </p>
                  <p>
                    Résolution instantanée des demandes répétitives, escalade
                    intelligente des cas sensibles.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 rounded-2xl border border-white/5 bg-slate-900/40 p-4">
                <span className="mt-1 h-2 w-2 flex-none rounded-full bg-indigo-400" />
                <div>
                  <p className="font-semibold text-white">
                    Qualification & lead nurturing
                  </p>
                  <p>
                    Enrichissement CRM, scoring automatique et déclenchement de
                    workflows marketing ciblés.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 rounded-2xl border border-white/5 bg-slate-900/40 p-4">
                <span className="mt-1 h-2 w-2 flex-none rounded-full bg-cyan-400" />
                <div>
                  <p className="font-semibold text-white">
                    Onboarding & self-service produits
                  </p>
                  <p>
                    Guides interactifs, synchronisation des données produit et
                    FAQ dynamiques.
                  </p>
                </div>
              </li>
            </ul>
            <div className="rounded-2xl border border-indigo-500/30 bg-indigo-500/10 p-5 text-sm text-indigo-100">
              <p className="font-semibold text-white">
                Besoin d’un cas d’usage spécifique ?
              </p>
              <p>
                Nous concevons des scénarios sur mesure, du back-office aux
                opérations de terrain, en quelques jours seulement.
              </p>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="space-y-12 rounded-3xl border border-white/10 bg-white/5 p-10 shadow-[0_30px_80px_-50px_rgba(59,130,246,0.6)]"
        >
          <SectionTitle
            eyebrow="NOS EXPERTISES"
            title="Une stack nativement pensée pour la performance conversationnelle"
            description="Des modules prêts à l’emploi combinés à des développements sur mesure pour accélérer la mise en production de vos assistants intelligents."
          />
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group flex flex-col gap-4 rounded-2xl border border-white/5 bg-slate-950/40 p-6 transition hover:border-indigo-500/40 hover:bg-indigo-500/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/20">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="grid gap-6 text-sm text-slate-200 md:grid-cols-6 md:items-center">
            <p className="col-span-2 font-medium uppercase tracking-[0.2em] text-slate-400">
              Intégrations clés
            </p>
            <div className="col-span-4 grid grid-cols-2 gap-4 text-base font-semibold md:grid-cols-3">
              {logos.map((logo) => (
                <span
                  key={logo}
                  className="flex items-center justify-center rounded-full border border-white/5 bg-slate-950/30 px-4 py-3 text-slate-200"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="impact" className="space-y-12">
          <SectionTitle
            eyebrow="IMPACT"
            title="Conçu pour délivrer rapidement des résultats mesurables"
            description="Nous pilotons vos KPIs en continu grâce à des dashboards exploitables et des boucles de rétroaction alimentées par vos équipes."
          />
          <div className="grid gap-8 md:grid-cols-3">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[var(--shadow-card)]"
              >
                <p className="text-sm uppercase tracking-[0.25em] text-indigo-200">
                  {item.stat}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm text-slate-300">{item.description}</p>
                <p className="mt-6 text-xs uppercase tracking-[0.3em] text-slate-400">
                  {item.caption}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="process"
          className="space-y-12 rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/20 via-slate-950/80 to-slate-950/95 p-10 shadow-[0_40px_80px_-50px_rgba(99,102,241,0.6)]"
        >
          <SectionTitle
            eyebrow="MÉTHODOLOGIE"
            title="Un accompagnement fluide de l’idée au suivi continu"
            description="Notre équipe dédiée travaille en sprints courts, en transparence avec vos équipes produit, marketing et support."
          />
          <div className="grid gap-10 lg:grid-cols-4">
            {process.map((item) => (
              <div key={item.step} className="flex flex-col gap-4">
                <span className="h-12 w-12 rounded-full border border-indigo-300/50 bg-indigo-500/20 text-center text-lg font-semibold leading-[48px] text-white">
                  {item.step}
                </span>
                <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                <p className="text-sm text-slate-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="space-y-8 rounded-3xl border border-white/10 bg-white/5 p-10">
            <SectionTitle
              eyebrow="TÉMOIGNAGES"
              title="Ils ont confié leurs conversations à Intelliwave"
              description="De la scale-up en hypercroissance aux équipes support des ETI, nos clients bénéficient d’agents autonomes qui respectent leurs standards."
            />
            <div className="space-y-6">
              {testimonials.map((testimonial) => (
                <figure
                  key={testimonial.author}
                  className="rounded-2xl border border-white/10 bg-slate-950/50 p-6"
                >
                  <blockquote className="text-base italic text-slate-200">
                    “{testimonial.quote}”
                  </blockquote>
                  <figcaption className="mt-4 text-sm text-slate-400">
                    <span className="font-semibold text-white">
                      {testimonial.author}
                    </span>{" "}
                    — {testimonial.role}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
          <div
            id="faq"
            className="space-y-6 rounded-3xl border border-white/10 bg-slate-950/60 p-8"
          >
            <SectionTitle
              eyebrow="FAQ"
              title="Questions fréquentes"
              description="Nous restons disponibles pour explorer votre contexte spécifique."
            />
            <div className="space-y-6">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <summary className="cursor-pointer text-sm font-semibold text-white">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm text-slate-300">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="flex flex-col gap-8 rounded-3xl border border-indigo-400/30 bg-indigo-500/20 p-10 text-indigo-50 shadow-[0_30px_80px_-45px_rgba(45,212,191,0.55)] md:flex-row md:items-center md:justify-between"
        >
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold leading-tight text-white">
              Prêt à lancer votre copilote conversationnel ?
            </h2>
            <p className="text-sm text-indigo-100/80">
              Planifiez un échange de 30 minutes avec nos experts pour identifier
              les quick wins et établir votre feuille de route.
            </p>
          </div>
          <form className="grid w-full max-w-md gap-4 text-slate-950">
            <label className="flex flex-col gap-2 text-sm font-medium text-indigo-50">
              Nom & entreprise
              <input
                type="text"
                placeholder="Ex : Léa Martin • NovaTech"
                className="rounded-xl border border-indigo-200/60 bg-white/95 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-300/40"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-indigo-50">
              Email professionnel
              <input
                type="email"
                placeholder="lea@votresociété.com"
                className="rounded-xl border border-indigo-200/60 bg-white/95 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-300/40"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-indigo-50">
              Objectif principal
              <textarea
                placeholder="Décrivez brièvement votre projet chatbot ou vos process à automatiser."
                className="min-h-[120px] rounded-xl border border-indigo-200/60 bg-white/95 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-300/40"
              />
            </label>
            <button
              type="submit"
              className="mt-2 flex w-full items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-900"
            >
              Envoyer ma demande
            </button>
          </form>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/5 bg-slate-950/80">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p className="font-semibold text-white">© {new Date().getFullYear()} Intelliwave.</p>
          <div className="flex flex-wrap gap-6">
            <a className="transition hover:text-white" href="mailto:hello@intelliwave.ai">
              hello@intelliwave.ai
            </a>
            <a className="transition hover:text-white" href="https://cal.com" target="_blank" rel="noopener noreferrer">
              Prendre rendez-vous
            </a>
            <a className="transition hover:text-white" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
