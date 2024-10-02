import React, { lazy, Suspense } from 'react'

const LazyCenteredRow = lazy(() => import('./CenteredRow'))

const CenteredRow = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode }) => (
    <Suspense fallback={null}>
        <LazyCenteredRow {...props} />
    </Suspense>
)

export default CenteredRow
