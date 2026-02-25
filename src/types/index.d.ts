// Tipos globales para la aplicación

declare module '*.module.css' {
  const classes: { [key: string]: string }
  export default classes
}

declare module '*.module.scss' {
  const classes: { [key: string]: string }
  export default classes
}

// Tipos para Sanity
declare namespace Sanity {
  interface Service {
    _id: string
    _type: 'service'
    title: string
    slug: {
      current: string
      _type: 'slug'
    }
    isFeatured: boolean
    shortDescription: string
    description: any[] // Portable Text
    benefits?: string[]
    icon?: {
      asset: {
        _ref: string
        _type: 'reference'
      }
    }
    coverImage?: {
      asset: {
        _ref: string
        _type: 'reference'
      }
    }
    seo?: {
      metaTitle?: string
      metaDescription?: string
      ogImage?: {
        asset: {
          _ref: string
          _type: 'reference'
        }
      }
      keywords?: string[]
    }
  }

  interface PortfolioItem {
    _id: string
    _type: 'portfolioItem'
    title: string
    slug: {
      current: string
      _type: 'slug'
    }
    description: any[] // Portable Text
    categories: string[]
    coverImage: {
      asset: {
        _ref: string
        _type: 'reference'
      }
    }
    client: string
    year: number
    isFeatured: boolean
  }

  interface Testimonial {
    _id: string
    _type: 'testimonial'
    name: string
    company: string
    position: string
    quote: string
    image?: {
      asset: {
        _ref: string
        _type: 'reference'
      }
    }
  }
}