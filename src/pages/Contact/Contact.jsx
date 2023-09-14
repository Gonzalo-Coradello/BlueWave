import Swal from 'sweetalert2'
import Footer from '../../components/Footer'
import Header from '../../components/Header/Header'
import { useInput } from '../../hooks'
import { sendEmail } from '../../services/email'
import Spinner from '../../components/Spinner'
import { useState } from 'react'
import PricesBackground from '../Prices/PricesBackground'
import logo from '../../assets/images/logo-white.png'
import WhatsappButton from '../../components/WhatsappButton'
import { ScrollRestoration } from 'react-router-dom'

const Contact = () => {
  const {
    reset: resetEmail,
    touched: touchedEmail,
    ...email
  } = useInput('text')
  const {
    reset: resetSubject,
    touched: touchedSubject,
    ...subject
  } = useInput('text')
  const { reset: resetBody, touched: touchedBody, ...body } = useInput()
  const {
    reset: resetNumber,
    touched: touchedNumber, //eslint-disable-line
    ...number
  } = useInput('tel')

  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    setIsLoading(true)

    const data = {
      email: email.value,
      subject: subject.value,
      phoneNumber: number.value,
      message: body.value,
    }

    await sendEmail(data)

    resetEmail()
    resetSubject()
    resetBody()
    resetNumber()
    Swal.fire({
      title: '¡Gracias por tu mensaje!',
      text: 'Nos vamos a poner en contacto pronto.',
      confirmButtonColor: '#FFFFFF',
      confirmButtonText: 'Confirmar',
    })

    setIsLoading(false)
  }

  const validateEmail = () => {
    const regex = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/

    return regex.test(email.value)
  }

  const isFormValid =
    email.value && validateEmail(email.value) && subject.value && body.value

  return (
    <>
      <ScrollRestoration />
      <Header />
      <PricesBackground />
      <WhatsappButton />
      <section className='section contact'>
        <div className='max-w-[1600px] mx-auto px-8'>
          <h2 className='h1 section-title text-center mb-3'>
            <span className='has-before leading-[1.5] lg:leading-[1.3]'>
              Contactanos
            </span>
          </h2>
          <div className='bg-white max-w-[450px] lg:max-w-[780px] mx-auto rounded-3xl shadow-md lg:flex'>
            <form
              className='mx-auto grid gap-6 justify-center px-8 md:px-32 py-24'
              onSubmit={handleSubmit}
            >
              <div className='form-field'>
                <label className=' font-medium flex gap-1'>
                  Email <span className='text-red-600'>*</span>
                </label>
                <input
                  className='input'
                  required
                  placeholder='ejemplo@email.com'
                  {...email}
                />
                {touchedEmail && email.value === '' ? (
                  <p className='text-center text-red-600 block pt-2'>
                    El email es requerido
                  </p>
                ) : touchedEmail && !validateEmail(email.value) ? (
                  <p className='text-center text-red-600 block pt-2'>
                    Ingrese un email válido
                  </p>
                ) : null}
              </div>
              <div className='form-field'>
                <label className=' font-medium flex gap-1'>
                  Asunto <span className='text-red-600'>*</span>
                </label>
                <input
                  className='input'
                  required
                  placeholder='Página web para emprendimiento'
                  {...subject}
                />
                {touchedSubject && subject.value === '' ? (
                  <p className='text-center text-red-600 block pt-2'>
                    El asunto es requerido
                  </p>
                ) : null}
              </div>
              <div className='form-field'>
                <label className=' font-medium flex gap-1'>
                  Número de teléfono
                </label>
                <input className='input' placeholder='12345678' {...number} />
                {touchedNumber &&
                number.value !== '' &&
                isNaN(Number(number.value)) ? (
                  <p className='text-center text-red-600 block pt-2'>
                    Este campo sólo admite números
                  </p>
                ) : null}
              </div>
              <div className='form-field space-y-1'>
                <label className='font-medium flex gap-1'>
                  Mensaje <span className='text-red-600'>*</span>
                </label>
                <textarea
                  placeholder='Escribe tu mensaje'
                  required
                  {...body}
                  className='textarea'
                />
                {touchedBody && body.value === '' ? (
                  <p className='text-center text-red-600 block pt-2'>
                    El mensaje es requerido
                  </p>
                ) : null}
              </div>
              <div className='grid justify-center'>
                {isLoading ? (
                  <button
                    className={`btn btn-primary !px-32 !h-20 mt-4 !block !pb-2 pt-2`}
                    type='submit'
                    disabled
                  >
                    <Spinner />
                  </button>
                ) : (
                  <button
                    className={`btn btn-primary !px-32 !h-20 mt-4 ${
                      isFormValid ? 'has-before has-after' : 'opacity-70'
                    }`}
                    type='submit'
                    disabled={!isFormValid}
                  >
                    Enviar
                  </button>
                )}
              </div>
            </form>
            <div className='contact-logo hidden lg:grid min-w-[320px] justify-center items-center rounded-r-3xl'>
              <img src={logo} alt='BlueWave logo' width={150} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Contact
