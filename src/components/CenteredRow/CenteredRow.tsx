import { FC } from 'react'
import { CenteredRowProps } from './CenteredRow.types'

export const CenteredRow: FC<CenteredRowProps> = ({ children }) => (
    <div className='my-3 flex flex-row w-full'>
        <div className='text-center mx-auto'>{children}</div>
    </div>
)

export default CenteredRow
