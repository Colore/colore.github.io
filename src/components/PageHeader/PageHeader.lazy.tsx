import React, { lazy, Suspense } from 'react'

const LazyPageHeader = lazy(() => import('./PageHeader'))

const PageHeader = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode }) => (
    <Suspense fallback={null}>
        <LazyPageHeader {...props} />
    </Suspense>
)

export default PageHeader
