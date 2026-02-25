import { sanityFetch } from '@/lib/sanity/client'
import { mockServices } from '@/lib/mock-data'

export default async function HomePage() {
  // Intentar obtener datos de Sanity, si falla usar mock
  try {
    const services = await sanityFetch(
      '*[_type == "service" && isFeatured == true] | order(title asc)',
      {},
      ['services']
    )
    
    return (
      <main className="min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-8">SUDOTECH IT</h1>
        <p className="mb-6">Soluciones tecnológicas para PYMES</p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Nuestros Servicios</h2>
          {services && services.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service: any) => (
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
  } catch (error) {
    // Usar datos mock si Sanity no está disponible
    return (
      <main className="min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-8">SUDOTECH IT</h1>
        <p className="mb-6">Soluciones tecnológicas para PYMES</p>
        
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-8" role="alert">
          <p className="font-bold">Modo Demo</p>
          <p>Visualizando datos de ejemplo. Conecta Sanity para ver contenido real.</p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockServices.filter(service => service.isFeatured).map((service) => (
              <div key={service._id} className="border p-4 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-3">{service.shortDescription}</p>
                <div className="mt-4">
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">
                    Destacado
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Sección especial para el nuevo servicio */}
        <section className="mb-12 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-center">🚀 Nuevo Servicio</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-green-600">Desarrollo de Sitios Web a Medida</h3>
              <p className="text-gray-700 mb-6">
                Transformamos tu presencia digital con soluciones web profesionales que convierten visitantes en clientes.
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Incluye:</h4>
                <ul className="list-disc list-inside space-y-2">
                  {mockServices[0].benefits.map((benefit, index) => (
                    <li key={index} className="text-gray-600">✓ {benefit}</li>
                  ))}
                </ul>
              </div>
              
              <div className="text-center">
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                  Solicitar Cotización
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }
}