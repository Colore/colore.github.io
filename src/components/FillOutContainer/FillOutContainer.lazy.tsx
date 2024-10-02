import React, { lazy, Suspense } from 'react'

const LazyFillOutContainer = lazy(() => import('./FillOutContainer'))

const FillOutContainer = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode }) => (
    <Suspense fallback={null}>
        <LazyFillOutContainer {...props} />
    </Suspense>
)

export default FillOutContainer
