import React, { lazy, Suspense } from 'react';

const LazyDocumentation = lazy(() => import('./Documentation'));

const Documentation = props => (
  <Suspense fallback={null}>
    <LazyDocumentation {...props} />
  </Suspense>
);

export default Documentation;
