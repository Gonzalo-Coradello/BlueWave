import Swal from 'sweetalert2'
import Footer from '../../components/Footer'
import Header from '../../components/Header/Header'
import { useInput } from '../../hooks'
import { sendEmail } from '../../services/email'
import Spinner from '../../components/Spinner'
import { useState } from 'react'
import PricesBackground from '../Prices/PricesBackground'
import logo from '../../assets/images/logo-white.png'

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

  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    setIsLoading(true)

    const data = {
      to: email.value,
      subject: subject.value,
      body: body.value,
    }
    // const data = {
    //   email: email.value,
    //   subject: subject.value,
    //   body: body.value,
    // }

    await sendEmail(data)

    resetEmail()
    resetSubject()
    resetBody()
    Swal.fire({
      title: '¡Gracias por tu mensaje!',
      text: 'Nos vamos a poner en contacto pronto.',
      icon: 'success',
      confirmButtonColor: 'var(--dark-blue)',
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
      <Header />
      <PricesBackground />
      <section className='section contact'>
        <div className='max-w-[1600px] mx-auto px-8'>
          <h2 className='h1 section-title text-center mb-3'>
            <span className='has-before leading-[1.3]'>Contactanos</span>
          </h2>
          <div className='bg-white max-w-[450px] lg:max-w-[780px] mx-auto rounded-3xl shadow-md lg:flex'>
            <form
              className='mx-auto grid gap-6 justify-center px-8 md:px-32 py-24'
              onSubmit={handleSubmit}
            >
              <div className='form-field'>
                <label className=' font-medium'>Email</label>
                <input
                  className='input'
                  required
                  placeholder='Email'
                  {...email}
                />
                {touchedEmail && email.value === '' ? (
                  <p className='text-center text-red-600 block pt-2'>
                    Todos los campos son requeridos
                  </p>
                ) : touchedEmail && !validateEmail(email.value) ? (
                  <p className='text-center text-red-600 block pt-2'>
                    Ingrese un email válido
                  </p>
                ) : null}
              </div>
              <div className='form-field'>
                <label className=' font-medium'>Asunto</label>
                <input
                  className='input'
                  required
                  placeholder='Asunto'
                  {...subject}
                />
                {touchedSubject && subject.value === '' ? (
                  <p className='text-center text-red-600 block pt-2'>
                    Todos los campos son requeridos
                  </p>
                ) : null}
              </div>
              <div className='form-field space-y-1'>
                <label className='font-medium'>Mensaje</label>
                <textarea
                  placeholder='Mensaje'
                  required
                  {...body}
                  className='textarea'
                />
                {touchedBody && body.value === '' ? (
                  <p className='text-center text-red-600 block pt-2'>
                    Todos los campos son requeridos
                  </p>
                ) : null}
              </div>
              <div className='grid justify-center'>
                {isLoading ? (
                  <button
                    className={`btn btn-primary !px-40 mt-4 !block !pb-2 pt-2`}
                    type='submit'
                    disabled
                  >
                    <Spinner />
                  </button>
                ) : (
                  <button
                    className={`btn btn-primary !px-40 mt-4 ${
                      isFormValid
                        ? 'has-before has-after'
                        : '!bg-gray-700 !hover:bg-gray-500 !text-white opacity-50'
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
