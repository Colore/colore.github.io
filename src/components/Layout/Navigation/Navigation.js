// import PropTypes from 'prop-types'

import classNames from 'classnames'
// import { Row, Col, Nav } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { capitalizeFirstLetter } from 'utils'
import { useLocation } from 'react-router'

import styles from './Navigation.module.scss'

const menuItems = ['home', 'background', 'documentation', 'FAQ', 'links', 'contact']

const Navigation = () => {
  const location = useLocation()

  const keyIndex = menuItems.findIndex(item => item === location.pathname.split('/')[1])
  const activeKey = keyIndex > -1 ? menuItems[keyIndex] : location.pathname === '/' ? menuItems[0] : null

  return (
    <Nav activeKey={activeKey} className={classNames(['spacious', styles.Navigation])}>
      {menuItems.map(item => {
        return (
          <li key={item}>
            <Nav.Item>
              <LinkContainer to={`/${item}`}>
                <Nav.Link eventKey={`${item}`} className={classNames([styles.NavigationItem, activeKey === item ? styles.CurrentNavigationItem : null])}>{capitalizeFirstLetter(item)}</Nav.Link>
              </LinkContainer>
            </Nav.Item>
          </li>
        )
      })}
    </Nav>
  )
}

Navigation.propTypes = {}

Navigation.defaultProps = {}

export default Navigation
