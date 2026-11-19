export const locales = ['en','pt-br'] as const;
export type Locale = typeof locales[number];
export const copy = {
 en: {
  nav:['Home','Work','Experience','About'],contact:'Get in touch', location:'SÃO PAULO, BRAZIL',
  hero:['Building software','that solves','real problems.'],intro:'Senior Backend Software Engineer specializing in .NET, payments, integrations, and distributed systems.',
  work:'SELECTED WORK',workTitle:'Real projects. Thoughtful engineering.',all:'All case studies',
  exp:'EXPERIENCE',expTitle:'A trajectory of delivery and evolution.',
  roles:[['Senior Backend Engineer','Sep 2025 — Present','Architecture and evolution of .NET backend services for transactional systems, payments and e-commerce.'],['Mid-level Backend Engineer','Feb 2024 — Sep 2025','APIs, checkout, authentication, integrations, SQL and legacy modernization.'],['Junior Backend Engineer','May 2021 — Feb 2024','C#/.NET services, REST endpoints, queries, support tooling and integrations.']],
  stack:'STACK & PRACTICES',stackTitle:'Tools, patterns and principles.',
  groups:[['Backend','C#, .NET, ASP.NET Core, .NET Framework, Node.js'],['Architecture & Patterns','Clean Architecture, DDD, CQRS, SOLID, Microservices, Design Patterns, TDD, SDD'],['APIs & Messaging','REST, GraphQL, gRPC, RabbitMQ, MediatR, Webhooks, Refit, Polly'],['Data','SQL Server, MongoDB, Entity Framework, Dapper, SQL performance'],['Cloud & Operations','Azure Functions, Azure Logic Apps, Kubernetes, Rancher, Git, CI/CD, Elasticsearch']],
  ai:'AI & ENGINEERING',aiTitle:'AI-assisted. Engineering-led.',aiBody:'I use GitHub Copilot and Claude Code for code analysis, refactoring, documentation and assisted implementation. With Spec-Driven Development (SDD), I prioritize clear specifications, human review, tests and validation.',
  about:'ABOUT',aboutTitle:'More than code.',aboutBody:'I build and evolve backend systems, from legacy modernization to reliable transactional platforms. I value clear architecture, pragmatic decisions and consistent delivery.',
  back:'Back to home',next:'Next case',overview:'Overview',challenge:'The challenge',contribution:'My contribution',impact:'Engineering impact',
  projects:[
   {slug:'payments',name:'PayHype · Payment Infrastructure',sub:'Payment gateway and provider integrations',summary:'Reusable backend platform for payment providers and checkout workflows.',overview:'Contributed to PayHype, Level Up’s payment gateway, from architectural definition to backend implementation.',challenge:'Reduce coupling between providers and consuming products while standardizing payment flows.',contribution:'Backend architecture and development of integrations and transactional workflows using the .NET ecosystem.',impact:'A reusable platform designed to simplify new integrations, maintenance and technical governance.',tags:['.NET','Payments','APIs','Architecture']},
   {slug:'ecommerce',name:'BGS & Gamescom · E-commerce',sub:'White-label event storefronts',summary:'Evolving a reusable e-commerce platform for stores, events and partners.',overview:'Worked on the BGS and Gamescom stores built on Level Up’s white-label micro e-commerce platform.',challenge:'Deliver tailored storefront experiences without building separate systems for each event.',contribution:'Implemented backend features including dynamic menus, promotional banners, authentication, home configuration and service integrations.',impact:'Extended a reusable white-label foundation for future campaigns, events and partners.',tags:['.NET','E-commerce','White-label','Integrations']}
  ]
 },
 'pt-br': {
  nav:['Início','Projetos','Experiência','Sobre'],contact:'Contato',location:'SÃO PAULO, BRASIL',
  hero:['Criando software','que resolve','problemas reais.'],intro:'Desenvolvedor Backend Sênior especializado em .NET, pagamentos, integrações e sistemas distribuídos.',
  work:'PROJETOS',workTitle:'Projetos reais. Engenharia com propósito.',all:'Todos os cases',
  exp:'EXPERIÊNCIA',expTitle:'Uma trajetória de evolução e entregas.',
  roles:[['Desenvolvedor Backend Sênior','Set/2025 — Atual','Arquitetura e evolução de serviços .NET para sistemas transacionais, pagamentos e e-commerce.'],['Desenvolvedor Backend Pleno','Fev/2024 — Set/2025','APIs, checkout, autenticação, integrações, SQL e modernização de legados.'],['Desenvolvedor Backend Júnior','Mai/2021 — Fev/2024','Serviços C#/.NET, endpoints REST, consultas SQL, ferramentas internas e integrações.']],
  stack:'STACKS E PRÁTICAS',stackTitle:'Ferramentas, padrões e princípios.',
  groups:[['Backend','C#, .NET, ASP.NET Core, .NET Framework, Node.js'],['Arquitetura e Padrões','Clean Architecture, DDD, CQRS, SOLID, Microsserviços, Design Patterns, TDD, SDD'],['APIs e Mensageria','REST, GraphQL, gRPC, RabbitMQ, MediatR, Webhooks, Refit, Polly'],['Dados','SQL Server, MongoDB, Entity Framework, Dapper, performance SQL'],['Cloud e Operação','Azure Functions, Azure Logic Apps, Kubernetes, Rancher, Git, CI/CD, Elasticsearch']],
  ai:'IA E ENGENHARIA',aiTitle:'IA como apoio. Engenharia como base.',aiBody:'Utilizo GitHub Copilot e Claude Code para análise de código, refatoração, documentação e implementação assistida. Com SDD (Spec-Driven Development), priorizo especificações claras, revisão humana, testes e validação.',
  about:'SOBRE',aboutTitle:'Além do código.',aboutBody:'Construo e evoluo sistemas backend, da modernização de legados a plataformas transacionais confiáveis. Valorizo arquitetura clara, decisões pragmáticas e boas entregas.',
  back:'Voltar ao início',next:'Próximo case',overview:'Visão geral',challenge:'O desafio',contribution:'Minha contribuição',impact:'Impacto técnico',
  projects:[
   {slug:'payments',name:'PayHype · Infraestrutura de Pagamentos',sub:'Gateway de pagamentos e integrações',summary:'Plataforma backend reutilizável para provedores de pagamento e checkout.',overview:'Participei do PayHype, gateway de pagamentos da Level Up, da definição arquitetural à implementação backend.',challenge:'Reduzir o acoplamento entre provedores e produtos, padronizando os fluxos de pagamento.',contribution:'Arquitetura e desenvolvimento backend de integrações e fluxos transacionais no ecossistema .NET.',impact:'Plataforma reutilizável projetada para facilitar novas integrações, manutenção e governança técnica.',tags:['.NET','Pagamentos','APIs','Arquitetura']},
   {slug:'ecommerce',name:'BGS & Gamescom · E-commerce',sub:'Lojas de eventos white-label',summary:'Evolução de uma plataforma reutilizável de e-commerce para lojas e parceiros.',overview:'Atuei nas lojas BGS e Gamescom desenvolvidas sobre a plataforma de micro e-commerce white-label da Level Up.',challenge:'Oferecer experiências específicas sem desenvolver uma solução independente para cada evento.',contribution:'Implementei funcionalidades backend de menus dinâmicos, banners promocionais, autenticação, configuração da home e integrações.',impact:'Evolução de uma base white-label reutilizável para campanhas, eventos e parceiros.',tags:['.NET','E-commerce','White-label','Integrações']}
  ]
 }
} as const;
