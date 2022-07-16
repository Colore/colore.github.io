// import PropTypes from 'prop-types'

import { Row, Col, Image, Nav } from 'react-bootstrap'
import classNames from 'classnames'
import { LinkContainer } from 'react-router-bootstrap'
import { useLocation } from 'react-router'

import { capitalizeFirstLetter } from 'utils'

import imgPageHeader from '../../../assets/images/page-header.jpg'

import styles from './PageHeader.module.scss'

const menuItems = {
  examples: {
    uri: '/examples'
  },
  downloads: {
    uri: '/downloads'
  },
  wiki: {
    external: true,
    uri: process.env.REACT_APP_GH_REPO != null ? `https://github.com/${process.env.REACT_APP_GH_REPO}/wiki` : 'https://github.com/Colore/colore.github.io/wiki'
  }
}

const PageHeader = () => {
  const location = useLocation()

  const keyIndex = Object.keys(menuItems).findIndex(item => item === location.pathname.split('/')[1])
  const activeKey = keyIndex > -1 ? menuItems[keyIndex] : null

  return (
    <Row className={classNames(['spacious', styles.PageHeader])}>
      <Col>
        <Image className={classNames([styles.ImagePageHeader])} src={imgPageHeader} />
        {/* <Row>
          <Col> */}
        <Nav activeKey={activeKey} className={classNames(['spacious', 'justify-content-end', styles.PageHeaderNav])}>
          {Object.entries(menuItems).map(([itemKey, itemValue]) => {
            return (
              <li key={itemKey}>
                <Nav.Item>
                  {
                  itemValue.external != null && itemValue.external === true
                    ? (
                      <Nav.Link eventKey={`${itemKey}`} className={classNames([styles.PageHeaderItem, activeKey === itemKey ? styles.CurrentPageHeaderItem : null])} href={`${itemValue.uri}`}>{capitalizeFirstLetter(itemKey)}</Nav.Link>
                      )
                    : (
                      <LinkContainer to={`${itemValue.uri}`}>
                        <Nav.Link eventKey={`${itemKey}`} className={classNames([styles.PageHeaderItem, activeKey === itemKey ? styles.CurrentPageHeaderItem : null])}>{capitalizeFirstLetter(itemKey)}</Nav.Link>
                      </LinkContainer>
                      )
                }
                </Nav.Item>
              </li>
            )
          })}
        </Nav>
        {/* </Col>
        </Row> */}
      </Col>
    </Row>
  )
}

PageHeader.propTypes = {}

PageHeader.defaultProps = {}

export default PageHeader
