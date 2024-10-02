'use client'

import clsx from 'clsx'
import { useLocation } from '@tanstack/react-router'
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import styles from './Wiki.module.scss'

import Loading from '~/components/Loading/Loading'
import { WikiButton } from '../WikiButton/WikiButton'
import { WikiProps } from './Wiki.types'
import { getWikiPathName } from './Wiki.utils'
import FillOutContainer from '../FillOutContainer/FillOutContainer'

const repo = import.meta.env.VITE_APP_GH_REPO ?? 'Colore/colore.github.io'

const wikiUrl = `https://github.com/${repo}/wiki`

const baseUri = (() => {
    let uri = import.meta.env.VITE_APP_WIKI_CONTENT_URI ?? `https://raw.githubusercontent.com/wiki/${repo}`

    if (uri.endsWith('/')) {
        uri = uri.substring(0, uri.length - 1)
    }

    return uri
})()

const getContent = async (
    wikiPath: string,
    setContent: Dispatch<SetStateAction<string | undefined>>,
    setLoading: Dispatch<SetStateAction<boolean>>
) => {
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

        setContent(
            `# Unknown Error\n\nAn unknown error occured while fetching this page.\n\nPlease try again later. Or if this error persists, please report it to the [Colore GitHub repository](${wikiUrl})`
        )
        setLoading(false)
    }
}

export const Wiki: FC<WikiProps> = ({ page }) => {
    const pathname = useLocation({
        select: (location) => location.pathname
    })

    const [loading, setLoading] = useState(true)
    const [content, setContent] = useState<string | undefined>(undefined)
    const [wikiPageName, setWikiPath] = useState<string | null>(getWikiPathName(pathname, page))

    useEffect(() => {
        setWikiPath(getWikiPathName(pathname, page))
    }, [pathname, page])

    useEffect(() => {
        if (wikiPageName != null) getContent(wikiPageName, setContent, setLoading)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (wikiPageName != null) getContent(wikiPageName, setContent, setLoading)
    }, [page, pathname, wikiPageName])

    if (loading === true || wikiPageName == null) {
        return (
            <div className={clsx(styles.Wiki, 'centered', 'min-h-96')}>
                <FillOutContainer>
                    <Loading />
                </FillOutContainer>
            </div>
        )
    }

    return (
        <div className={clsx('text-darkolivegreen')}>
            <WikiButton uri={`${wikiUrl}/${wikiPageName}`} />
            {loading === false && content != null && (
                <div className={styles.WikiContent}>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
                </div>
            )}
        </div>
    )
}

export default Wiki
