import 'boxicons/css/boxicons.min.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-gradient-to-r from-blue-950 bg-white  to-sky-700  text-white py-6 grid gap-4 pt-16 pb-8'>
      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
          <div className='text-center'>
            <h6 className='text-white uppercase font-bold text-center'>
              BlueWave
            </h6>
            <p className='mt-2 text-center text-[1.65rem] leading-[1.5] italic'>
              BlueWave es una agencia creativa líder en diseño web, marketing y
              desarrollo profesional. Transformamos ideas en soluciones
              innovadoras, impulsando el éxito en línea y la proyección
              profesional.
            </p>
          </div>

          <div className='text-center'>
            <h6 className='text-white uppercase font-bold'>Categorias</h6>
            <ul className='mt-2'>
              <li>
                <Link
                  to='/'
                  className='text-gray-300 hover:text-white w-fit mx-auto'
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to='/services'
                  className='text-gray-300 hover:text-white w-fit mx-auto'
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  to='/prices'
                  className='text-gray-300 hover:text-white w-fit mx-auto'
                >
                  Precios
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
                  className='text-gray-300 hover:text-white w-fit mx-auto'
                >
                  Contacto
                </Link>
              </li>
              {/* <li>
                <a href='' className='text-gray-300 hover:text-white w-fit mx-auto'>
                  Portafolio
                </a>
              </li> */}
            </ul>
          </div>
          <div className='text-center'>
            <h6 className='text-white uppercase font-bold'>Contactanos</h6>
            <ul className='mt-4 grid gap-4 justify-center items-center footer-contact'>
              <li className='bx bx-phone flex justify-center'>
                <a
                  className='text-gray-300 ml-2 hover:text-white'
                  href='https://wa.me/5491164423999?text=%C2%A1Hola%21%20Estoy%20interesado%20en%20saber%20m%C3%A1s%20sobre%20los%20servicios%20de%20BlueWave.%20%C2%BFPodr%C3%ADas%20proporcionarme%20informaci%C3%B3n%20adicional%3F'
                >
                  +54 9 11 6442-3999
                </a>
              </li>
              <li className='bx bx-envelope flex justify-center'>
                <a
                  href='mailto:bluewavedesignagency@gmail.com'
                  className='text-gray-300 ml-2 hover:text-white'
                >
                  bluewavedesignagency@gmail.com
                </a>
              </li>
              <li className='bx bxl-discord flex justify-center'>
                <p className='text-gray-300 ml-2 hover:text-white'>@gajerr.</p>
              </li>
            </ul>
          </div>
        </div>
        <hr className='border-t border-cyan-200 my-4' />
      </div>
      <div className='container justify-center'>
        <div className='flex justify-center mt-4'>
          <ul className='flex space-x-4'>
            <li>
              <a
                href='https://www.tiktok.com/@bluewavewebdesign'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white hover:text-red-500'
              >
                <i className='bx bxl-tiktok'></i>
              </a>
            </li>
            <li>
              <a
                href='https://twitter.com/BlueWaveweb'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white hover:text-blue-500'
              >
                <i className='bx bxl-twitter'></i>
              </a>
            </li>
            <li>
              <a
                href='https://www.instagram.com/bluewave.webdesign/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white hover:text-red-500'
              >
                <i className='bx bxl-instagram'></i>
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/alejo-rodriguez-148959275'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white hover:text-blue-500'
              >
                <i className='bx bxl-linkedin'></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p className='text-center text-white'>
          &copy; {new Date().getFullYear()} BlueWave.
        </p>
      </div>
      {/* <div className='footer-bottom text-center w-fix mx-auto'>
        <ul>
          <li>
            <a
              href=''
              className='footer-bottom-link text-center mr-2 text-gray-300 hover:text-white'
            >
              Politica de privacidad
            </a>
            <a
              href=''
              className='footer-bottom-link text-center text-gray-300 hover:text-white'
            >
              Terminos y condiciones
            </a>
          </li>
        </ul>
      </div> */}
    </footer>
  )
}

export default Footer
