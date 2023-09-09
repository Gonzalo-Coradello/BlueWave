import { useState } from 'react'
import servicexd from '../assets/images/service-icon-2.png'

const ServiceCard = ({ service, index }) => {
  const [expandedCardIndex, setExpandedCardIndex] = useState(null)

  const handleMouseEnter = index => {
    setExpandedCardIndex(index)
  }

  const handleMouseLeave = () => {
    setExpandedCardIndex(null)
  }

  return (
    <li
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`service-card ${
          expandedCardIndex === index ? 'expanded' : ''
        }`}
      >
        <div className='card-icon'>
          <img
            src={servicexd}
            width='30'
            height='30'
            loading='lazy'
            alt='icon'
          />
        </div>
        <h3 className='h4 text-[2.1rem] leading-[2.8rem] font-medium'>
          <div className='card-title'>
          {service.title}
          </div>
        </h3>
        <p className='card-description mt-6 pt-4 border-t'>{service.content}</p>
      </div>
    </li>
  )
}

export default ServiceCard
