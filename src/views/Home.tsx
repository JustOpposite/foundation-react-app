import { ErrorBoundary } from 'react-error-boundary'
import { Suspense } from 'react'
import Countries from '@/components/shared/Countries'
import ErrorFallback from '@/components/shared/ErrorFallback'
import SkeletonDemo from '@/components/shared/SkeletonDemo'
import { doSomethingOnReset } from '@/utils/lib'

export default function Home() {
  return (
    <div>
      <p className="mb-5">Load Countries...</p>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => doSomethingOnReset()}
        // resetKeys
      >
        <Suspense fallback={<SkeletonDemo />}>
          <Countries />
          <p className="mt-5">
            When component rendered without failure, to retry, click on browser
            refresh. Child component simulates failure rate of 50% of the
            randomized time.
          </p>
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}