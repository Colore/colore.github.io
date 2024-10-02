import { FC } from 'react'
import { FillOutContainerProps } from './FillOutContainer.types'

export const FillOutContainer: FC<FillOutContainerProps> = ({ children }) => (
    <div className='grid h-full w-full'>
        <div className='place-self-center'>{children}</div>
    </div>
)

export default FillOutContainer
