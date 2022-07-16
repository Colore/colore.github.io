import { Spinner } from 'react-bootstrap'

import styles from './Loading.module.scss'

const Loading = () => (
  <div className={styles.Loading}>
    <Spinner animation="grow" variant="primary" />
    <Spinner animation="grow" variant="secondary" />
    <Spinner animation="grow" variant="success" />
    <Spinner animation="grow" variant="danger" />
    <Spinner animation="grow" variant="warning" />
    <Spinner animation="grow" variant="info" />
    <span className="visually-hidden">Loading...</span>
  </div>
)

Loading.propTypes = {}

Loading.defaultProps = {}

export default Loading
