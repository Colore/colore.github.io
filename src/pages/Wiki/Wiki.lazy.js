import React, { lazy, Suspense } from 'react';

const LazyWiki = lazy(() => import('./Wiki'));

const Wiki = props => (
  <Suspense fallback={null}>
    <LazyWiki {...props} />
  </Suspense>
);

export default Wiki;
