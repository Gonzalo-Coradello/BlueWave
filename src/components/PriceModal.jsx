import { useState } from 'react'
import { prices } from '../pages/Prices/pricesData'

const PlanDetail = ({ modalVisible, setModalVisible, planId }) => {
  const plan = prices.find(price => price.id === planId)
  const [arrowVisible, setArrowVisible] = useState(true)

  const handleScrollArrow = e => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight
    if (bottom) {
      setArrowVisible(false)
    } else {
      setArrowVisible(true)
    }
  }

  return (
    <div className={modalVisible ? 'flex' : 'hidden'}>
      <div
        className='fixed bg-black/60 w-full h-screen flex justify-center items-center z-50'
        onClick={() => setModalVisible(false)}
      >
        <div
          className='relative bg-white grid justify-center max-w-[550px] max-h-[80vh] overflow-y-scroll no-scrollbar pb-12 rounded-xl shadow-lg'
          onClick={e => e.stopPropagation()}
          onScroll={handleScrollArrow}
        >
          {/* <button
            className='justify-self-end mt-[-2rem] mr-[-1rem] fixed'
            onClick={() => setModalVisible(false)}
          >
            x
          </button> */}
          <div className='bg-white border-b w-full max-w-[550px] px-12 py-8 flex justify-between fixed text-4xl rounded-t-xl'>
            <h3 className='font-bold'>{plan.name}</h3>
            <button
              className='ml-auto hover:opacity-50 transition-all duration-300'
              onClick={() => setModalVisible(false)}
            >
              ✕
            </button>
          </div>
          <div className='mt-32 px-12 space-y-4'>
            {plan.features.map(feature => (
              <div key={feature.id}>
                <h4 className='font-bold'>{feature.name}</h4>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
          <div
            className={`${
              arrowVisible ? 'opacity-100' : 'opacity-0'
            } absolute right-16 bottom-16 pr-4 font-normal text-4xl transition-all duration-300`}
          >
            <div className='fixed'>↓</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlanDetail
