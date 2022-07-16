import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Image } from 'react-bootstrap'
import classNames from 'classnames'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useLocation } from 'react-router'

import styles from './Wiki.module.scss'

import WikiImg from '../../assets/images/Wiki.png'
import { capitalizeFirstLetter } from 'utils'
import Loading from 'components/Loading/Loading'

const baseUri = (() => {
  let uri = (process.env.REACT_APP_WIKI_CONTENT_URI != null ? process.env.REACT_APP_WIKI_CONTENT_URI : 'https://raw.githubusercontent.com/wiki')

  if (uri.substring(uri.length - 1) === '/') {
    uri = uri.substring(0, uri.length - 1)
  }

  return uri
})()

const wikiUrl = (() => {
  let url = process.env.REACT_APP_GH_REPO != null ? `https://github.com/${process.env.REACT_APP_GH_REPO}/wiki` : 'https://github.com/Colore/colore.github.io/wiki'

  if (url.substring(url.length - 1) === '/') {
    url = url.substring(0, url.length - 1)
  }

  return url
})()

const Wiki = ({ page }) => {
  const { pathname } = useLocation()

  const [loading, setLoading] = useState(true)
  const [content, setContent] = useState(null)

  const getContent = async (wikiPath) => {
    try {
      const response = await fetch(`${baseUri}/${wikiPath}.md`)
      if (response.ok) {
        const markdown = await response.text()

        setContent(markdown)
        setLoading(false)
      } else {
        setLoading(false)
        setContent('# Page not found\n\nThis page does not exist.')
      }
    } catch (e) {
      console.log(e)
      setContent('# Unknown Error\n\nAn unknown error occured while fetching this page.\n\nPlease try again later. Or if this error persists, please report it to the [Colore GitHub repository](' + wikiUrl + ')')
      setLoading(false)
    }
  }

  useEffect(() => {
    console.log('construction', 'call', page, pathname)
    const wikiPath = capitalizeFirstLetter(page != null ? page : pathname.split('/')[1])

    getContent(wikiPath)
  }, [])

  useEffect(() => {
    console.log('page update', 'call', page, pathname)
    const wikiPath = capitalizeFirstLetter(page != null ? page : pathname.split('/')[1])

    getContent(wikiPath)
  }, [page, pathname])

  if (loading === true) {
    return (
      <div className={classNames([styles.Wiki, 'centered'])}>
        <Loading />
      </div>
    )
  }

  return (
    <div className={styles.Wiki}>
      <a href={`${wikiUrl}/${page}`}><Image alt="Wiki" className={classNames([styles.WikiLink])} src={WikiImg} /></a>
      {loading === false && content.length > 0 && (<ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>)}
    </div>
  )
}

Wiki.propTypes = {
  page: PropTypes.string
}

Wiki.defaultProps = {}

export default Wiki
