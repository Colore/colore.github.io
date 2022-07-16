// import PropTypes from 'prop-types'

import { Row, Col } from 'react-bootstrap'
import classNames from 'classnames'

import styles from './Footer.module.scss'

const Footer = () => (
  <div className={classNames([styles.Footer])}>
    <Row className={classNames(['spacious'])}>
      <Col>&nbsp;
      </Col>
    </Row>
    <Row>
      <Col className="centered">
        Copyright &copy; 2009-2022 Colore. All rights reserved.<br />
        Based on a design by Sadhana Ganapathiraju.
      </Col>
    </Row>
  </div>
)

Footer.propTypes = {}

Footer.defaultProps = {}

export default Footer
