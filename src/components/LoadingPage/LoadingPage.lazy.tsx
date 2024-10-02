import { lazy, Suspense } from 'react'
import { LoadingPageProps } from './LoadingPage.types'

const LazyLoadingPage = lazy(() => import('./LoadingPage'))

const LoadingPage = (props: LoadingPageProps) => (
    <Suspense fallback={null}>
        <LazyLoadingPage {...props} />
    </Suspense>
)

export default LoadingPage
