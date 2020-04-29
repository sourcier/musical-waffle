import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { connect } from 'react-redux'

import { closeNav } from '../store/reducers/nav'

const CloseNav = ({ closeNav }) => {
  const { pathname } = useLocation()

  useEffect(() => {
    closeNav()
  }, [pathname])

  return null
}

const mapDispatchToProps = { closeNav }

export default connect(null, mapDispatchToProps)(CloseNav)
