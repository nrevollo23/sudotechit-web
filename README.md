# SUDOTECH IT Website - Next.js + Sanity.io

Rediseño del sitio web de SUDOTECH IT con enfoque en el nuevo servicio de "Desarrollo de Sitios Web a Medida".

## Tecnologías

- **Frontend**: Next.js 14 (App Router)
- **CMS**: Sanity.io (Headless)
- **Deployment**: GitHub Pages
- **Estilos**: CSS Modules / Tailwind (opcional)
- **Lenguaje**: TypeScript

## Estructura del Proyecto

```
sudotechit-web/
├── src/                  # Código fuente
│   ├── app/              # Páginas y rutas
│   ├── components/       # Componentes reutilizables
│   ├── lib/              # Utilidades y configuración
│   │   └── sanity/       # Configuración Sanity
│   ├── styles/           # Estilos globales
│   └── types/            # Definiciones TypeScript
├── sanity/              # Configuración Sanity CMS
│   └── schemas/          # Esquemas de contenido
├── public/              # Assets estáticos
└── ...
```

## Configuración Inicial

### 1. Instalar dependencias

```bash
npm install
```

### 2. Configurar Sanity

1. Crear proyecto en [Sanity.io](https://www.sanity.io/)
2. Copiar las credenciales en `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=tu_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

### 3. Desarrollo

```bash
npm run dev
```

### 4. Deployment a GitHub Pages

```bash
npm run deploy
```

## Esquemas Sanity

### Servicios
- **Tipo**: `service`
- **Campos**: título, slug, descripción, beneficios, ícono, imagen, SEO
- **Ejemplo destacado**: "Desarrollo de Sitios Web a Medida"

### Portfolio
- **Tipo**: `portfolioItem` (por implementar)
- **Campos**: título, cliente, año, categorías, imágenes, descripción

### Testimonios
- **Tipo**: `testimonial` (por implementar)
- **Campos**: nombre, empresa, posición, cita, imagen

## Rutas Principales

- `/` - Homepage con servicios destacados
- `/servicios` - Lista completa de servicios
- `/servicios/[slug]` - Página individual de servicio
- `/portfolio` - Proyectos realizados
- `/desarrollo-web` - Landing page del servicio estrella
- `/contacto` - Formulario de contacto

## SEO

- Metadatos dinámicos desde Sanity
- Sitemap.xml generado automáticamente
- OpenGraph y Twitter Cards
- Estructura semántica HTML5

## Contribuir

1. Crear branch: `git checkout -b feature/nueva-funcionalidad`
2. Hacer commits: `git commit -m "Añadir funcionalidad X"`
3. Push: `git push origin feature/nueva-funcionalidad`
4. Crear Pull Request

## Licencia

MIT