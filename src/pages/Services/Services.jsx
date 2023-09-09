import Header from '../../components/Header/Header'
import { servicesData, extraServices } from './servicesData'
import Footer from '../../components/Footer'
import WhatsappButton from '../../components/WhatsappButton'
import ServiceCard from '../../components/ServiceCard'
import { ScrollRestoration } from 'react-router-dom'
import ServicesBackground from './ServicesBackground'

const Services = () => {
  return (
    <>
      <ScrollRestoration />
      <Header />
      <WhatsappButton />
      <ServicesBackground />
      <section className='section service' id='service' aria-label='service'>
        <div className='container'>
          <div>
            <h2 className='h1 font-medium section-title text-center mb-3'>
              Ofrecemos los siguientes{' '}
              <span className='has-before leading-[1.5] lg:leading-[1.3]'>
                servicios
              </span>
            </h2>
            <ul className='grid-list'>
              {servicesData.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </ul>
          </div>
          <div>
            <h2 className='h2 font-medium mt-24 mb-12 text-center'>
              Servicios adicionales
            </h2>
            <ul className='grid-list'>
              {extraServices.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Services
