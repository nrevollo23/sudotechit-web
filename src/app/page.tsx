import { sanityFetch } from '@/lib/sanity/client'

export default async function HomePage() {
  // Ejemplo de consulta a Sanity
  const services = await sanityFetch<Service[]>({
    query: '*[_type == "service" && isFeatured == true] | order(title asc)',
  })

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">SUDOTECH IT</h1>
      <p className="mb-6">Soluciones tecnológicas para PYMES</p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Nuestros Servicios</h2>
        {services.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service._id} className="border p-4 rounded-lg">
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-gray-600">{service.shortDescription}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>Cargando servicios...</p>
        )}
      </section>
    </main>
  )
}

// Tipo para los servicios
interface Service {
  _id: string
  title: string
  slug: {
    current: string
  }
  shortDescription: string
  isFeatured: boolean
}