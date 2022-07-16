// import PropTypes from 'prop-types'

import { LinkContainer } from 'react-router-bootstrap'

import styles from './Documentation.module.scss'

const Documentation = () => (
  <div className={styles.Documentation}>
    <h2>
      Welcome to the Colore documentation.
    </h2>
    <p>
      A few starting points:
    </p>
    <ul>
      <li>
        <LinkContainer to="/background"><a title="Background">Background</a></LinkContainer>
      </li>
      <li>
        <LinkContainer to="/specification"><a title="Specification">Specification</a></LinkContainer>
      </li>
      <li>
        <LinkContainer to="/implementations"><a title="Implementations">Implementations</a></LinkContainer>
      </li>
    </ul>
  </div>
)

Documentation.propTypes = {}

Documentation.defaultProps = {}

export default Documentation
