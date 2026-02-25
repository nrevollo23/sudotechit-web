# Configuración de Sanity.io para SUDOTECH IT

## Paso 1: Crear Proyecto en Sanity

1. Ve a [https://www.sanity.io/](https://www.sanity.io/) y crea una cuenta
2. Crea un nuevo proyecto llamado "SUDOTECH IT CMS"
3. Selecciona el plan "Free" (hasta 3 usuarios)
4. Copia el `Project ID` y `Dataset` name

## Paso 2: Configurar Variables de Entorno

En tu archivo `.env.local`, actualiza:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=tu_project_id_aqui
NEXT_PUBLIC_SANITY_DATASET=production
```

## Paso 3: Instalar Dependencias

```bash
npm install @sanity/client @sanity/image-url groq @sanity/vision
```

## Paso 4: Iniciar el Studio de Sanity

```bash
npm run sanity:start
```

Esto abrirá el panel de administración en [http://localhost:3333](http://localhost:3333)

## Paso 5: Configurar Esquemas

### Servicios
El esquema `service` ya está configurado con:
- Título y slug
- Descripción corta y completa
- Beneficios (lista)
- Imágenes (ícono y portada)
- Campos SEO
- Opción para destacar servicios

### Para crear un nuevo servicio:

1. Ve a la sección "Content" en el panel
2. Haz clic en "Create new" → "Service"
3. Rellena los campos:
   - **Title**: "Desarrollo de Sitios Web a Medida"
   - **Is Featured**: ✓ (marcado)
   - **Short Description**: "Landing pages de alta conversión, WordPress personalizado, dominios y SSL"
   - **Benefits**: 
     - "Landing pages individuales de alta conversión"
     - "Implementación de CMS como WordPress personalizado"
     - "Asesoría y gestión en la compra de dominio"
     - "Configuración e instalación de certificado SSL"
     - "Entrega del sitio 100% funcional y seguro (HTTPS listo)"
   - **Icon**: Sube un ícono representativo
   - **Cover Image**: Sube una imagen de portada
   - **SEO**: Configura metadatos para SEO

## Paso 6: Publicar Contenido

```bash
npm run sanity:deploy
```

## Estructura de Contenido Recomendada

### Servicios (ya configurados)
- Consultoría IT
- Soluciones en la Nube
- VoIP y Comunicaciones
- Desarrollo de Software
- **Desarrollo de Sitios Web a Medida** (nuevo, destacado)
- Plataformas Educativas

### Portfolio (por implementar)
Crear esquema `portfolioItem` con:
- Título del proyecto
- Cliente
- Año
- Categorías (ej: "Desarrollo Web", "Cloud", "VoIP")
- Descripción
- Imágenes
- URL del proyecto (si aplica)

### Testimonios (por implementar)
Crear esquema `testimonial` con:
- Nombre del cliente
- Empresa
- Posición
- Cita/testimonio
- Imagen (opcional)

## Queries de Ejemplo (GROQ)

### Obtener servicios destacados
```groq
*[_type == "service" && isFeatured == true] | order(title asc) {
  _id,
  title,
  slug,
  shortDescription,
  "iconUrl": icon.asset->url,
  "coverImageUrl": coverImage.asset->url
}
```

### Obtener un servicio por slug
```groq
*[_type == "service" && slug.current == $slug][0] {
  ...,
  "iconUrl": icon.asset->url,
  "coverImageUrl": coverImage.asset->url
}
```

### Obtener todos los servicios
```groq
*[_type == "service"] | order(title asc) {
  _id,
  title,
  slug,
  shortDescription,
  isFeatured,
  "iconUrl": icon.asset->url
}
```

## Deployment del Studio

Para deployar el studio a Sanity:

```bash
npm run sanity:deploy
```

Esto hará que el studio esté disponible en:
`https://{project-id}.sanity.studio`

## Integración con Next.js

La configuración ya está lista en `src/lib/sanity/client.ts`:

```typescript
// Ejemplo de uso en componentes
iimport { sanityFetch } from '@/lib/sanity/client'

const services = await sanityFetch(
  '*[_type == "service" && isFeatured == true]',
  {},
  ['services']
)
```

## Solución de Problemas

### Error: "Project not found"
- Verifica que el `projectId` en `.env.local` sea correcto
- Asegúrate de que el proyecto exista en tu cuenta de Sanity

### Error: "Dataset not found"
- Verifica que el `dataset` sea "production" (o el que hayas configurado)
- Puedes crear nuevos datasets en la configuración del proyecto

### Imágenes no se muestran
- Verifica que los dominios estén configurados en `next.config.js`:
```javascript
images: {
  domains: ['cdn.sanity.io'],
}
```

## Recursos Adicionales

- [Documentación de Sanity](https://www.sanity.io/docs)
- [Guía de GROQ](https://www.sanity.io/docs/groq)
- [Sanity + Next.js](https://www.sanity.io/docs/sanity-and-nextjs)

## Configuración Avanzada (Opcional)

### Personalizar el Desk Structure

Crea un archivo `sanity/deskStructure.ts`:

```typescript
export const deskStructure = (S: any) => {
  return S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Services')
        .child(S.documentTypeList('service')),
      S.listItem()
        .title('Portfolio')
        .child(S.documentTypeList('portfolioItem')),
      S.listItem()
        .title('Testimonials')
        .child(S.documentTypeList('testimonial')),
      ...S.documentTypeListItems().filter(
        (item: any) => !['service', 'portfolioItem', 'testimonial'].includes(item.getId())
      ),
    ])
}
```

Luego actualiza `sanity.config.ts`:

```typescript
import { deskStructure } from './sanity/deskStructure'

export default defineConfig({
  // ...
  plugins: [
    deskTool({ structure: deskStructure }),
    visionTool()
  ],
  // ...
})
```

### Añadir Validación Personalizada

Puedes añadir validación a los esquemas:

```typescript
defineField({
  name: 'email',
  type: 'string',
  validation: (Rule: any) => Rule.required().email(),
})
```

### Configurar Previsualización

Para previsualización de contenido:

```typescript
// sanity.config.ts
export default defineConfig({
  // ...
  plugins: [
    deskTool(),
    visionTool(),
    presentationTool({
      previewUrl: {
        previewMode: {
          enable: '/api/preview',
        },
      },
    }),
  ],
  // ...
})
```

Y crea un endpoint de API en Next.js para manejar la previsualización.