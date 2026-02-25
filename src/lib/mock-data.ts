// Datos mock para desarrollo mientras configuramos Sanity

export const mockServices = [
  {
    _id: '1',
    title: 'Desarrollo de Sitios Web a Medida',
    slug: { current: 'desarrollo-sitios-web' },
    isFeatured: true,
    shortDescription: 'Soluciones web profesionales: landing pages de alta conversión, WordPress personalizado, dominios y certificados SSL incluidos.',
    benefits: [
      'Landing pages individuales de alta conversión',
      'Implementación de CMS como WordPress personalizado',
      'Asesoría y gestión en la compra de dominio',
      'Configuración e instalación de certificado SSL',
      'Entrega del sitio 100% funcional y seguro (HTTPS listo)',
    ],
    icon: {
      asset: { _ref: 'image-1' },
    },
    coverImage: {
      asset: { _ref: 'image-2' },
    },
  },
  {
    _id: '2',
    title: 'Consultoría IT',
    slug: { current: 'consultoria-it' },
    isFeatured: true,
    shortDescription: 'Análisis y diseño de arquitecturas tecnológicas seguras y escalables.',
    benefits: [
      'Análisis de infraestructura existente',
      'Diseño de arquitecturas escalables',
      'Plan de implementación personalizado',
      'Optimización de costos',
    ],
  },
  {
    _id: '3',
    title: 'Soluciones en la Nube',
    slug: { current: 'soluciones-nube' },
    isFeatured: true,
    shortDescription: 'Implementación y gestión en AWS, GCP y Azure para maximizar rendimiento y costes.',
    benefits: [
      'Migración a la nube sin tiempo de inactividad',
      'Optimización de recursos',
      'Gestión de costos',
      'Seguridad avanzada',
    ],
  },
  {
    _id: '4',
    title: 'VoIP y Comunicaciones',
    slug: { current: 'voip-comunicaciones' },
    isFeatured: true,
    shortDescription: 'Instalación y optimización de sistemas VoIP con integración CRM y call centers.',
    benefits: [
      'Llamadas de alta calidad',
      'Integración con CRM',
      'Ahorro en costos de comunicación',
      'Escalabilidad',
    ],
  },
  {
    _id: '5',
    title: 'Desarrollo de Software',
    slug: { current: 'desarrollo-software' },
    isFeatured: true,
    shortDescription: 'Aplicaciones web y móviles personalizadas que se adaptan a tus procesos de negocio.',
    benefits: [
      'Soluciones a medida',
      'Integración con sistemas existentes',
      'Escalabilidad',
      'Soporte continuo',
    ],
  },
  {
    _id: '6',
    title: 'Plataformas Educativas',
    slug: { current: 'plataformas-educativas' },
    isFeatured: false,
    shortDescription: 'Actualizamos y gestionamos plataformas como Moodle, asegurando un entorno educativo eficiente y moderno.',
    benefits: [
      'Configuración personalizada',
      'Integración de plugins',
      'Soporte técnico',
      'Actualizaciones regulares',
    ],
  },
]

export const mockPortfolio = [
  {
    _id: '1',
    title: 'Sitio Web para Restaurante Gourmet',
    slug: { current: 'restaurante-gourmet' },
    description: [
      {
        children: [
          {
            text: 'Desarrollamos un sitio web responsivo con sistema de reservas online y menú interactivo para un restaurante gourmet en Lima.',
          },
        ],
      },
    ],
    categories: ['Desarrollo Web', 'WordPress'],
    coverImage: { asset: { _ref: 'image-3' } },
    client: 'Restaurante El Chef',
    year: 2024,
    isFeatured: true,
  },
  {
    _id: '2',
    title: 'Migración a AWS para E-commerce',
    slug: { current: 'migracion-aws-ecommerce' },
    description: [
      {
        children: [
          {
            text: 'Migramos la infraestructura de un e-commerce a AWS, mejorando la escalabilidad y reduciendo costos en un 30%.',
          },
        ],
      },
    ],
    categories: ['Cloud', 'AWS'],
    coverImage: { asset: { _ref: 'image-4' } },
    client: 'Tienda Online Perú',
    year: 2023,
    isFeatured: true,
  },
]

export const mockTestimonials = [
  {
    _id: '1',
    name: 'Ana Martínez',
    company: 'Restaurante El Chef',
    position: 'Gerente General',
    quote: 'El sitio web que desarrollaron para nuestro restaurante aumentó nuestras reservas en un 40%. Excelente trabajo y soporte continuo.',
    image: { asset: { _ref: 'image-5' } },
  },
  {
    _id: '2',
    name: 'Carlos Rodríguez',
    company: 'Tienda Online Perú',
    position: 'Director de TI',
    quote: 'La migración a AWS fue impecable, sin tiempo de inactividad y con una mejora significativa en el rendimiento. Recomendados al 100%.',
    image: { asset: { _ref: 'image-6' } },
  },
]