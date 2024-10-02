import React, { lazy, Suspense } from 'react'
import { WikiButtonProps } from './WikiButton.types'

const LazyWikiButton = lazy(() => import('./WikiButton'))

const WikiButton = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode } & WikiButtonProps) => (
    <Suspense fallback={null}>
        <LazyWikiButton {...props} />
    </Suspense>
)

export default WikiButton
