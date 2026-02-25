import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Configuración del cliente Sanity
export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03',
  useCdn: process.env.NODE_ENV === 'production',
  perspective: 'published',
})

// Builder para URLs de imágenes
export const urlFor = (source: any) => 
  imageUrlBuilder(sanityClient).image(source)

// Función para obtener datos
export async function sanityFetch(query: string, params: any = {}, tags: string[] = []) {
  return sanityClient.fetch(query, params, { 
    next: { 
      revalidate: process.env.NODE_ENV === 'development' ? 30 : 3600, 
      tags,
    },
  })
}