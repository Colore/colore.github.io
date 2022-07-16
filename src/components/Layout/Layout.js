// import PropTypes from 'prop-types'

import { Container, Row, Col } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import classNames from 'classnames'

import Header from './Header/Header'
import Navigation from './Navigation/Navigation'
import PageHeader from './PageHeader/PageHeader'
import Footer from './Footer/Footer'

import styles from './Layout.module.scss'

const Layout = () => (
  <Container className={classNames([styles.Layout])}>
    <Row>
      <Col xs={3} md={1} lg={3}></Col>
      <Col xs={6} md={12} lg={6} className={classNames([styles.Content])}>
        <Header />
        <Navigation />
        <PageHeader />
        <Outlet />
        <Footer />
      </Col>
      <Col xs={3} md={1} lg={3}></Col>
    </Row>
  </Container>
)

Layout.propTypes = {}

Layout.defaultProps = {}

export default Layout
