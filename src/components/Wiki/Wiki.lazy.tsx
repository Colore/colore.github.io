import { FC, lazy, Suspense } from 'react'
import { WikiProps } from './Wiki.types'

const LazyWiki = lazy(() => import('./Wiki'))

const Wiki: FC<WikiProps> = (props) => (
    <Suspense fallback={null}>
        <LazyWiki {...props} />
    </Suspense>
)

export default Wiki
