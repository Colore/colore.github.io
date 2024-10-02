'use client'

import { capitalizeFirstLetter } from '~/utils'

// import styles from './Navigation.module.scss'
import { clsx } from 'clsx'
import { Link, useLocation } from '@tanstack/react-router'

const menuItems: string[] = ['home', 'background', 'documentation', 'FAQ', 'links', 'contact']

const styles = {
    NavigationItem: 'float-left px-2.5 h-9 leading-9 text-white tracking-widest uppercase',
    CurrentNavigationItem: 'bg-menu-hover bg-slate-700 text-sky-50'
}

const getActiveLocationKey = (menuItems: string[], location: string): string | undefined => {
    const uri = location != null ? location.substring(1) : location

    if (location === '/') return menuItems[0]

    return Object.values(menuItems).find((item) => item === uri)
}

const Navigation = () => {
    const pathname = useLocation({
        select: (location) => location.pathname
    })

    const activeKey = getActiveLocationKey(menuItems, pathname)

    return (
        <div className='my-3 flex flex-row bg-slate-500 text-white h-9 '>
            {menuItems.map((item) => {
                return (
                    <div
                        key={item}
                        className={clsx(
                            styles.NavigationItem,
                            activeKey === item ? 'bg-slate-700' : null,
                            'hover:bg-slate-700'
                        )}>
                        <Link to={`/${item}`} className={clsx('align-middle')}>
                            {capitalizeFirstLetter(item)}
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Navigation
