import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Star, Calendar, Gauge, CheckCircle2, ShieldCheck, Clock, ThumbsUp } from 'lucide-react';

const WhatsAppIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const NAV_ITEMS = [
  'INICIO',
  'PLANES ADJUDICADOS',
  'VEHÍCULOS PRENDADOS',
  'VENDA SU PLAN',
  'CONTACTO',
  'NOSOTROS',
];

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Carlos Rodríguez',
    role: 'Comprador de 0km',
    content: 'Excelente atención desde el primer momento. Me asesoraron con los planes avanzados y pude sacar mi auto mucho antes de lo esperado. ¡Totalmente recomendados!',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 2,
    name: 'María Fernanda Gómez',
    role: 'Venta de Plan Adjudicado',
    content: 'Vendí mi plan adjudicado de forma rápida y segura. El proceso fue transparente y me pagaron en el acto. Una tranquilidad enorme operar con esta agencia.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 3,
    name: 'Juan Pablo Silva',
    role: 'Comprador de Usado',
    content: 'Compré una camioneta usada y estaba impecable, tal cual me la describieron. Tienen vehículos de primera calidad y la financiación que me ofrecieron fue clave.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  }
];

const VEHICULOS_PRENDADOS = [
  {
    id: 1,
    title: 'Peugeot 208 Allure MT',
    year: '2025',
    km: '12.500',
    plan: 'Plan 80/20 84 cuotas',
    details: [
      '25 cuotas pagas a Marzo + 20% pago',
      'Cuota con seguro incluido: $635.000'
    ],
    price: '$13.000.000',
    image: 'https://i.imgur.com/PoolNl7.jpeg'
  },
  {
    id: 2,
    title: 'Jeep Renegade Longitud 1.3 AT',
    year: '2026',
    km: '1.000',
    plan: 'Plan 70/30 84 cuotas',
    details: [
      '54 cuotas pagas + cambio de modelo de Sport a Longitude pago',
      '(30% refinanciado en las cuotas. Quedan 22 cuotas de ese refinanciamiento)',
      'Cuota con seguro incluido: $1.257.000'
    ],
    price: '$24.000.000',
    image: 'https://i.imgur.com/tO4semg.jpeg'
  },
  {
    id: 3,
    title: 'Renault Sandero Intense CVT 1.6 AT',
    year: '2023',
    km: '52.000',
    plan: 'Plan 100% 120 cuotas',
    details: [
      '40 cuotas pagas + cambio de modelo pago de Life a Intense',
      'Cuota pura: $292.000',
      'Cuota con seguro incluido: $430.000'
    ],
    price: '$11.500.000',
    image: 'https://i.imgur.com/qXb58qW.jpeg'
  },
  {
    id: 4,
    title: 'Volkswagen Nivus Comfortline AT',
    year: '2024',
    km: '33.000',
    plan: 'Plan 80/20 84 cuotas',
    details: [
      '39 cuotas pagas + 20% pago',
      'Cuota con seguro incluido: $680.000'
    ],
    price: '$17.000.000',
    image: 'https://i.imgur.com/PtIQcYS.jpeg'
  },
  {
    id: 5,
    title: 'Volkswagen Polo Track MT',
    year: '2025',
    km: '16.000',
    plan: 'Plan 80/20 84 cuotas',
    details: [
      '35 cuotas pagas + 20% pago',
      'Cuota con seguro incluido: $530.000'
    ],
    price: '$13.000.000',
    image: 'https://i.imgur.com/aOumSgv.jpeg'
  },
  {
    id: 6,
    title: 'Volkswagen Polo Track',
    year: '2025',
    km: '10.000',
    plan: 'Plan 90/10 84 cuotas',
    details: [
      '22 cuotas pagas a Febrero + 10% pago',
      'Cuota con seguro incluido: $580.000'
    ],
    price: '$10.000.000',
    image: 'https://i.imgur.com/9LZjfIN.jpeg'
  },
  {
    id: 7,
    title: 'Peugeot Allure MT',
    year: '2024',
    km: '29.000',
    plan: 'Plan 80/20 84 cuotas',
    details: [
      '22 cuotas pagas + 20% pago',
      'Cuota con seguro incluido: $570.000'
    ],
    price: '$12.000.000',
    image: 'https://i.imgur.com/dg6iuMV.jpeg'
  },
  {
    id: 8,
    title: 'Volkswagen Nivus Comfortline AT 1.0',
    year: '2024',
    km: '70.000',
    plan: 'Plan 80/20 84 cuotas',
    details: [
      '51 cuotas pagas + 20% pago',
      'Cuota con seguro incluido: $800.000'
    ],
    price: '$18.500.000',
    image: 'https://i.imgur.com/vzfP3QE.jpeg'
  },
  {
    id: 9,
    title: 'Volkswagen Virtus 1.6',
    year: '2024',
    km: '26.500',
    plan: 'Plan 100% 84 cuotas',
    details: [
      '27 cuotas pagas a Febrero',
      'Cuota pura: $527.462',
      'Cuota con seguro incluido: $900.000',
      '(Debe multas $330.000 a cargo de comprador y debe patente que nunca se pagó, se puede hacer una negativa y se va con 08)'
    ],
    price: '$10.000.000',
    image: 'https://i.imgur.com/kcdN7bX.jpeg'
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [sellForm, setSellForm] = useState({
    nombre: '',
    compania: '',
    modelo: '',
    cuotasPagas: '',
    tipoPlan: '',
    mensaje: ''
  });

  const handleSellSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola, quiero cotizar mi plan para venderlo.%0A%0A*Nombre:* ${sellForm.nombre}%0A*Compañía:* ${sellForm.compania}%0A*Vehículo:* ${sellForm.modelo}%0A*Cuotas Pagas:* ${sellForm.cuotasPagas}%0A*Tipo de Plan:* ${sellForm.tipoPlan}%0A*Mensaje:* ${sellForm.mensaje}`;
    window.open(`https://wa.me/5491134563999?text=${text}`, '_blank');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col overflow-x-hidden">
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="#" className="flex items-center gap-2">
                <img
                  src="https://i.imgur.com/AVYhXMT.png"
                  alt="Clagal Automotores"
                  className="h-16 sm:h-20 md:h-24 w-auto object-contain py-1"
                  referrerPolicy="no-referrer"
                />
              </a>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                  className="text-sm font-semibold text-gray-800 hover:text-red-600 transition-colors duration-200 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <a
                href="#usados"
                className="bg-red-600 text-white px-6 py-2.5 rounded-md text-sm font-bold hover:bg-red-700 transition-colors duration-200 shadow-sm hover:shadow-md"
              >
                USADOS
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-800 hover:text-red-600 focus:outline-none p-2"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 max-h-[calc(100vh-80px)] overflow-y-auto">
            <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                  className="block px-3 py-3 text-base font-semibold text-gray-800 hover:text-red-600 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                href="#usados"
                className="block px-3 py-3 mt-2 text-base font-bold text-center text-white bg-red-600 rounded-md hover:bg-red-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                USADOS
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main className="flex-grow pt-[90px] sm:pt-[112px] md:pt-[128px]">
        <section id="inicio" className="relative min-h-[calc(100vh-90px)] md:min-h-[80vh] flex items-center justify-center overflow-hidden py-16 md:py-24">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
              alt="Showroom de autos"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/50 bg-gradient-to-r from-black/80 to-transparent"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-4xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
                Compra y Venta de <br className="hidden md:block" />
                <span className="text-red-500">Vehículos Prendados, Planes Adjudicados y Avanzados</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
                Nos dedicamos a la compra y venta de vehículos prendados, planes adjudicados y avanzados. Te garantizamos una gestión <strong className="text-white font-semibold">clara, simple y transparente</strong> en cada operación. Más de 10 años de experiencia en el mercado automotriz Argentino.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#vehículos-prendados"
                  className="inline-flex items-center justify-center px-6 py-4 sm:px-8 text-sm sm:text-base font-bold text-white bg-red-600 rounded-md hover:bg-red-700 transition-all duration-200 shadow-lg hover:shadow-red-600/30 w-full sm:w-auto text-center"
                >
                  VER DISPONIBILIDAD
                  <ChevronRight className="ml-2 -mr-1" size={20} />
                </a>
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center px-6 py-4 sm:px-8 text-sm sm:text-base font-bold text-white bg-transparent border-2 border-white rounded-md hover:bg-white hover:text-black transition-all duration-200 w-full sm:w-auto text-center"
                >
                  CONTÁCTENOS
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Vehículos Prendados Section */}
        <section id="vehículos-prendados" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Vehículos Prendados por Plan</h2>
              <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Oportunidades únicas de vehículos con planes avanzados. Excelente estado y financiación a tu medida.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {VEHICULOS_PRENDADOS.map((vehiculo) => (
                <div key={vehiculo.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <img src={vehiculo.image} alt={vehiculo.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                    <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                      {vehiculo.price}
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{vehiculo.title}</h3>
                    
                    <div className="flex items-center gap-6 text-sm text-gray-600 mb-4 pb-4 border-b border-gray-100">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={18} className="text-red-500" />
                        <span className="font-medium">{vehiculo.year}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Gauge size={18} className="text-red-500" />
                        <span className="font-medium">{vehiculo.km} KM</span>
                      </div>
                    </div>

                    <div className="mb-6 flex-grow">
                      <span className="inline-block bg-red-50 text-red-700 text-xs font-bold px-3 py-1 rounded-full mb-4 border border-red-100">
                        {vehiculo.plan}
                      </span>
                      <ul className="space-y-2.5">
                        {vehiculo.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-600">
                            <CheckCircle2 size={18} className="text-red-500 mt-0.5 flex-shrink-0" />
                            <span className="leading-snug">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto pt-4">
                      <a href={`https://wa.me/5491134563999?text=Hola, me interesa el ${vehiculo.title} publicado a ${vehiculo.price}`} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-gray-900 text-white font-bold py-3.5 rounded-md hover:bg-red-600 transition-colors duration-200">
                        CONSULTAR AHORA
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Lo que dicen nuestros clientes</h2>
              <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                La satisfacción de quienes confían en nosotros es nuestra mejor garantía. Conoce sus experiencias.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((testimonial) => (
                <div key={testimonial.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-8 border border-gray-100">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-red-500 text-red-500" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-8 italic">"{testimonial.content}"</p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Planes Adjudicados Section */}
        <section id="planes-adjudicados" className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Planes Adjudicados</h2>
              <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Tenemos la mayor variedad de planes adjudicados listos para pedir la unidad. Evitá sorteos y licitaciones, subite a tu 0km de forma rápida y segura.
              </p>
            </div>
            <div className="flex justify-center">
              <a href="https://wa.me/5491134563999?text=Hola, quiero consultar por los planes adjudicados disponibles." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-4 sm:px-8 text-base sm:text-lg font-bold text-white bg-red-600 rounded-md hover:bg-red-700 transition-all duration-200 w-full sm:w-auto text-center">
                <WhatsAppIcon className="w-6 h-6 mr-2 flex-shrink-0" />
                <span>CONSULTAR STOCK DISPONIBLE</span>
              </a>
            </div>
          </div>
        </section>

        {/* Venda Su Plan Section */}
        <section id="venda-su-plan" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Venda su Plan</h2>
              <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Compramos tu plan de ahorro al mejor precio del mercado. Completá los datos y te cotizamos en el acto.
              </p>
            </div>
            <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100">
              <form onSubmit={handleSellSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nombre y Apellido</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-red-500 focus:border-red-500" value={sellForm.nombre} onChange={e => setSellForm({...sellForm, nombre: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Compañía del Plan</label>
                    <input type="text" placeholder="Ej: Fiat Plan, Plan Rombo..." required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-red-500 focus:border-red-500" value={sellForm.compania} onChange={e => setSellForm({...sellForm, compania: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Marca y Modelo del Vehículo</label>
                    <input type="text" placeholder="Ej: Peugeot 208" required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-red-500 focus:border-red-500" value={sellForm.modelo} onChange={e => setSellForm({...sellForm, modelo: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Cantidad de Cuotas Pagas</label>
                    <input type="number" min="0" required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-red-500 focus:border-red-500" value={sellForm.cuotasPagas} onChange={e => setSellForm({...sellForm, cuotasPagas: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de plan</label>
                    <select required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-red-500 focus:border-red-500" value={sellForm.tipoPlan} onChange={e => setSellForm({...sellForm, tipoPlan: e.target.value})}>
                      <option value="" disabled>Seleccione una opción</option>
                      <option value="100%">100%</option>
                      <option value="90/10">90/10</option>
                      <option value="80/20">80/20</option>
                      <option value="70/30">70/30</option>
                      <option value="60/40">60/40</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje Adicional (Opcional)</label>
                  <textarea rows={4} placeholder="Detalles adicionales sobre el plan..." className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-red-500 focus:border-red-500" value={sellForm.mensaje} onChange={e => setSellForm({...sellForm, mensaje: e.target.value})}></textarea>
                </div>
                <button type="submit" className="w-full bg-red-600 text-white font-bold py-4 rounded-md hover:bg-red-700 transition-colors duration-200 flex items-center justify-center gap-2 text-base sm:text-lg">
                  <WhatsAppIcon className="w-6 h-6 flex-shrink-0" />
                  <span>COTIZAR MI PLAN POR WHATSAPP</span>
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Nosotros Section */}
        <section id="nosotros" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Sobre Nosotros</h2>
                <div className="w-24 h-1 bg-red-600 mb-8"></div>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  En <strong className="text-gray-900">Clagal Automotores</strong> somos especialistas con más de 10 años de trayectoria en el mercado automotriz argentino. Nos destacamos por brindar soluciones rápidas, seguras y transparentes en la compra y venta de planes de ahorro y vehículos prendados.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-red-100 p-3 rounded-full text-red-600">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Transparencia Total</h4>
                      <p className="text-sm text-gray-600">Operaciones claras y sin letra chica.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-red-100 p-3 rounded-full text-red-600">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Gestión Rápida</h4>
                      <p className="text-sm text-gray-600">Resolvemos tu necesidad en tiempo récord.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-red-100 p-3 rounded-full text-red-600">
                      <ThumbsUp size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Mejor Cotización</h4>
                      <p className="text-sm text-gray-600">Aseguramos el mejor valor para tu plan o vehículo.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl flex items-center justify-center bg-white p-8">
                <img src="https://i.imgur.com/AVYhXMT.png" alt="Clagal Automotores Logo" className="w-full h-auto max-h-full object-contain" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </section>

        {/* Usados Section */}
        <section id="usados" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vehículos Usados Seleccionados</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-lg">
              Contamos con un amplio catálogo de vehículos usados en excelentes condiciones, revisados y garantizados. Tomamos tu usado en parte de pago.
            </p>
            <a href="https://wa.me/5491134563999?text=Hola, quiero consultar por el catálogo de vehículos usados." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-4 sm:px-8 text-base sm:text-lg font-bold text-white bg-gray-900 rounded-md hover:bg-red-600 transition-all duration-200 w-full sm:w-auto text-center">
              <WhatsAppIcon className="w-6 h-6 mr-2 flex-shrink-0" />
              <span>VER CATÁLOGO DE USADOS</span>
            </a>
          </div>
        </section>
      </main>

      {/* Contacto Section & Footer */}
      <footer id="contacto" className="bg-gray-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div>
              <img src="https://i.imgur.com/AVYhXMT.png" alt="Clagal Automotores" className="h-16 mb-6" referrerPolicy="no-referrer" />
              <p className="text-gray-400 mb-6">
                Tu socio de confianza para la compra y venta de planes adjudicados, vehículos prendados y usados seleccionados.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Enlaces Rápidos</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#inicio" className="hover:text-red-500 transition-colors">Inicio</a></li>
                <li><a href="#planes-adjudicados" className="hover:text-red-500 transition-colors">Planes Adjudicados</a></li>
                <li><a href="#vehículos-prendados" className="hover:text-red-500 transition-colors">Vehículos Prendados</a></li>
                <li><a href="#venda-su-plan" className="hover:text-red-500 transition-colors">Venda su Plan</a></li>
                <li><a href="#usados" className="hover:text-red-500 transition-colors">Usados</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Contacto Directo</h3>
              <p className="text-gray-400 mb-6">
                Atención personalizada inmediata a través de WhatsApp. Resolvemos todas tus dudas en el momento.
              </p>
              <a href="https://wa.me/5491134563999?text=Hola, me comunico desde la página web." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white bg-green-600 rounded-md hover:bg-green-700 transition-all duration-200 w-full sm:w-auto">
                <WhatsAppIcon className="w-6 h-6 mr-2" />
                CHATEAR AHORA
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Clagal Automotores. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
