'use client'

import { clsx } from 'clsx'
import styles from './Header.module.scss'

const Header = () => (
    <div className='flex flex-row py-5'>
        <div className='basis-1/3 p-5'>
            <span className={styles.Brand}>
                Colore
                <br />
                <span className='text-sm'>
                    The If-Less
                    <br />
                    programming
                    <br />
                    framework
                </span>
            </span>
        </div>
        <div className='basis-1/3 p-5'>
            <span className={styles.TagLine}>colore framework and specification</span>
        </div>
        <div className='basis-1/3 p-5'>
            <input
                type='text'
                placeholder='Search'
                className={clsx(styles.Search, 'float-end', 'border-slate-700/50')}
            />
        </div>
    </div>
)

export default Header
