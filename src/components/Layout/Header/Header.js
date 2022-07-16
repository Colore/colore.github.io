// import PropTypes from 'prop-types'

import classNames from 'classnames'
import { Row, Col, Form } from 'react-bootstrap'

import styles from './Header.module.scss'

const Header = () => (
  <div className={classNames([styles.Header])}>
    <Row className="spacious">
      <Col xs={4}>
        <span className={styles.Brand}>Colore - <br />The If-Less<br />programming<br />framework</span>
      </Col>
      <Col xs={4}>
        <span className={styles.TagLine}>colore framework and specification</span>
      </Col>
      <Col xs={4}>
        <Form.Control type="text" placeholder="Search" className={styles.Search} />
      </Col>
    </Row>
  </div>
)

Header.propTypes = {}

Header.defaultProps = {}

export default Header
