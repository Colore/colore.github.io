'use client'

import { capitalizeFirstLetter } from '~/utils'

import { clsx } from 'clsx'
import { Link, useLocation } from '@tanstack/react-router'
import { MenuItems } from './PageHeader.types'
import { getActiveLocationKey } from './PageHeader.utils'

const menuItems: MenuItems = {
    examples: {
        uri: '/examples'
    },
    downloads: {
        uri: '/downloads'
    },
    wiki: {
        external: true,
        uri:
            import.meta.env.VITE_GH_REPO != null
                ? `https://github.com/${import.meta.env.VITE_GH_REPO}/wiki`
                : 'https://github.com/Colore/colore.github.io/wiki'
    }
}

const styles = {
    'PageHeaderNav': 'h-9 leading-9 w-full my-3 text-white relative bottom-6 flex flex-row-reverse',
    'PageHeaderItem': 'bg-slate-500 px-auto inline-block mx-2.5 px-2.5 z-50',
    'PageHeaderItem:active': 'bg-menu-hover bg-slate-700',
    'CurrentPageHeaderItem': 'bg-menu-hover bg-slate-700 text-sky-50'
}

const PageHeader = () => {
    const pathname = useLocation({
        select: (location) => location.pathname
    })

    const activeKey = getActiveLocationKey(menuItems, pathname)

    return (
        <div className={clsx(styles.PageHeaderNav)}>
            <div className='flex flex-row'>
                {Object.entries(menuItems).map(([itemKey, itemValue]) => {
                    return (
                        <div
                            key={itemKey}
                            className={clsx(
                                styles.PageHeaderItem,
                                activeKey === itemKey ? styles.CurrentPageHeaderItem : null
                            )}>
                            <Link to={`${itemValue.uri}`}>{capitalizeFirstLetter(itemKey)}</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PageHeader
