import { Link } from 'react-router-dom'
import herobanner from '../assets/images/herobanner.png'

const Hero = () => {
  return (
    <article>
      {/* HERO */}
      <section className='section hero' id='home' aria-label='hero'>
        <div className='hero-right-band' />
        <div className='container'>
          <div className='hero-content'>
            <h1 className='h1 hero-title leading-[1.3]'>
              Tu web perfecta: diseñada y construida por expertos en
              <span className='has-before leading-[1.3]'>BlueWave.</span>
            </h1>
            {/* <p className='hero-text'>
              En BlueWave, estamos dedicados a ayudarte a materializar tus ideas
              y metas en el mundo digital. Somos un equipo apasionado de
              desarrolladores que se esfuerzan por construir la presencia en
              línea perfecta para ti.
            </p> */}
            <p className='hero-text'>
              En BlueWave estamos dedicados a ayudarte a materializar tus ideas
              en el mundo digital. Somos un equipo de desarrolladores
              apasionados que se esfuerza por impulsar tu presencia en línea,
              ayudándote a cumplir tus metas más rápido.
            </p>
            <div className='wrapper'>
              <Link
                to='/contact'
                className='btn btn-primary has-before has-after'
              >
                Contactanos
              </Link>
            </div>
          </div>
          <figure className='hero-banner'>
            <img src={herobanner} alt='hero banner' className='img-cover' />
          </figure>
        </div>
      </section>
    </article>
  )
}

export default Hero
