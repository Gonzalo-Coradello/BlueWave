import { useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header/Header'
import PlanDetail from '../../components/PriceModal'

import { prices } from './pricesData'
import PricesBackground from './PricesBackground'
import WhatsappButton from '../../components/WhatsappButton'
import { ScrollRestoration } from 'react-router-dom'

const Prices = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(1)

  const selectPlan = planId => {
    setSelectedPlan(planId)
    setModalVisible(true)
  }

  return (
    <>
      <ScrollRestoration />
      <Header />
      <PlanDetail
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        planId={selectedPlan}
      />
      <PricesBackground />
      <WhatsappButton />
      <section className='section'>
        <div className='max-w-[1600px] mx-auto'>
          <h2 className='h1 font-medium section-title text-center mb-3 px-1'>
            Conocé nuestros{' '}
            <span className='has-before leading-[1.5] lg:leading-[1.3]'>
              precios
            </span>
          </h2>
          <div className='grid grid-cols-[repeat(auto-fit,280px)] gap-16 justify-center'>
            {prices.map(pricePlan => (
              <div key={pricePlan.id} className='w-full'>
                <div className='price-card grid h-[430px] backdrop-blur rounded-xl py-12 px-4 justify-center text-center shadow-lg'>
                  <div>
                    <h4 className='relative leading-[2] self-start text-[2.5rem] font-bold h4'>
                      <span className='has-before'>{pricePlan.name}</span>
                    </h4>
                  </div>
                  <div className='self-center'>
                    <ul className={`text-left space-y-3`}>
                      {pricePlan.features.map(feature => (
                        <li
                          key={feature.id}
                          className='list-disc list-inside text-[1.65rem] leading-[2rem]'
                        >
                          {feature.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className='self-end'>
                    <h4 className='font-bold text-3xl flex w-fit mx-auto align-text-bottom'>
                      {typeof pricePlan.price === 'number' ? '$' : null}
                      {pricePlan.price}
                      {typeof pricePlan.price === 'number' && (
                        <span className='text-xl mt-2 ml-2 '>USD</span>
                      )}
                    </h4>
                  </div>
                </div>
                <button
                  className='mx-auto mt-6 hover:opacity-50 transition-opacity duration-300'
                  onClick={() => selectPlan(pricePlan.id)}
                >
                  <h4 className='font-medium underline'>Ver detalles</h4>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Prices
