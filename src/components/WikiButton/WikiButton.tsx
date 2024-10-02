import { FC } from 'react'
import { WikiButtonProps } from './WikiButton.types'
import { Link } from '@tanstack/react-router'

export const WikiButton: FC<WikiButtonProps> = ({ uri }) => (
    <div className='float-right mr-2'>
        <Link to={uri}>
            <div className='rounded-md border border-black dark:border-white bg-white dark:bg-transparent text-black dark:text-white size-11 grid drop-shadow-lg'>
                <div className='text-3xl place-self-center'>
                    <span className='drop-shadow-lg'>W</span>
                </div>
            </div>
        </Link>
    </div>
)

export default WikiButton
