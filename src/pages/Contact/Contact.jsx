import Swal from 'sweetalert2'
import Footer from '../../components/Footer'
import Header from '../../components/Header/Header'
import { useInput } from '../../hooks'
import { sendEmail } from '../../services/email'
import Spinner from '../../components/Spinner'
import { useState } from 'react'

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
      <section className='section bg-ghost'>
        <div className='max-w-[1600px] mx-auto px-8'>
          <h2 className='h1 section-title text-center mb-3'>
            <span className='has-before'>Contactanos</span>
          </h2>
          <div className='bg-white md:w-[550px] mx-auto px-8 md:px-32 py-24 rounded-3xl shadow-lg'>
            {/* <div className='xl:flex justify-center'> */}
            {/* <div className='basis-1/2 mx-auto w-full'> */}
            {/* <div>
                <h4 className='h2 text-center'>
                  Hacemos <span className='has-before'>realidad</span>
                </h4>
                <h4 className='h2 text-center'>tus ideas.</h4>
              </div> */}
            {/* <div>
                <img
                  src={logo}
                  className='w-full max-w-[400px] mx-auto rounded-3xl'
                />
              </div> */}
            {/* </div> */}
            <form
              className='max-w-[550px] mx-auto space-y-6'
              onSubmit={handleSubmit}
            >
              <div className='space-y-1'>
                <label className='font-medium'>Email</label>
                <input className='input' placeholder='Email' {...email} />
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
              <div className='space-y-1'>
                <label className='font-medium'>Asunto</label>
                <input className='input' placeholder='Asunto' {...subject} />
                {touchedSubject && subject.value === '' ? (
                  <p className='text-center text-red-600 block pt-2'>
                    Todos los campos son requeridos
                  </p>
                ) : null}
              </div>
              <div className='space-y-1'>
                <label className='font-medium'>Mensaje</label>
                <textarea placeholder='Mensaje' {...body} className='input' />
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
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Contact
