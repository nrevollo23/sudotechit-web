// Importar todos los schemas
import { service } from './documents/service'
import { seo } from './objects/seo'

// Exportar array de schemas
export const schemaTypes = [
  // Documentos
  service,
  // Objetos
  seo,
]