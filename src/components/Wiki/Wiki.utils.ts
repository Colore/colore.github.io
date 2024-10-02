'use client'

import { capitalizeFirstLetter } from '~/utils'

export const getWikiPathName = (pathname: string, page?: string): string | null => {
    page = Array.isArray(page) ? page[0] : page
    pathname = pathname.startsWith('/') ? pathname.substring(1) : pathname

    if (pathname == null && page == null) return null

    const pageHandle = page ?? pathname

    return pathname != null ? capitalizeFirstLetter(pageHandle) : ''
}
