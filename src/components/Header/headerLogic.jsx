import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import titles from '../titles'

export const useHeaderLogic = () => {
  const [navbarActive, setNavbarActive] = useState(false)
  const [currentPage, setCurrentPage] = useState('')
  const [pageTitle, setPageTitle] = useState('') // Este es el título por defecto
  const location = useLocation()

  useEffect(() => {
    setCurrentPage(location.pathname)
  }, [location])

  useEffect(() => {
    setPageTitle(titles[currentPage] || pageTitle)

    document.title = pageTitle // Esto es para actualizar el título de la página
  }, [currentPage, pageTitle])

  useEffect(() => {
    const addEventOnElem = function (elem, type, callback) {
      if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
          elem[i].addEventListener(type, callback)
        }
      } else {
        elem.addEventListener(type, callback)
      }
    }

    const header = document.querySelector('[data-header]')
    const backTopBtn = document.querySelector('[data-back-top-btn]')
    const navbarButton = document.querySelector('a.btn')

    location.pathname === '/' && navbarButton?.classList?.add('invert-button')

    const headerActive = function () {
      if (window.scrollY > 80) {
        header.classList.add('active')
        backTopBtn?.classList?.add('active')
        location.pathname === '/' &&
          navbarButton?.classList?.remove('invert-button')
      } else {
        header.classList.remove('active')
        backTopBtn?.classList?.remove('active')
        location.pathname === '/' &&
          navbarButton?.classList?.add('invert-button')
      }
    }

    addEventOnElem(window, 'scroll', headerActive)

    return () => {
      addEventOnElem(window, 'scroll', headerActive)
    }
  }, [location])

  useEffect(() => {
    const addEventOnElem = function (elem, type, callback) {
      if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
          elem[i].addEventListener(type, callback)
        }
      } else {
        elem.addEventListener(type, callback)
      }
    }

    const navTogglers = document.querySelectorAll('[data-nav-toggler]')
    const navbarLinks = document.querySelectorAll('[data-nav-link]')

    const toggleNavbar = function () {
      setNavbarActive(prevState => !prevState)
    }

    const closeNavbar = function () {
      setNavbarActive(false)
    }

    addEventOnElem(navTogglers, 'click', () => toggleNavbar())
    addEventOnElem(navbarLinks, 'click', () => closeNavbar())

    return () => {
      addEventOnElem(navTogglers, 'click', toggleNavbar)
      addEventOnElem(navbarLinks, 'click', closeNavbar)
    }
  }, [])

  const navClass = navbarActive ? 'navbar active' : 'navbar'

  return navClass
}
