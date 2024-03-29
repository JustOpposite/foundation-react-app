import { createFileRoute } from '@tanstack/react-router'
import HomeQueryAndSuspense from '@/views/HomeQueryAndSuspense'
import {
  exampleQueryOption1WithRealFetch,
  exampleQueryOption2SimulatedFetch,
  exampleQueryOption3SimulatedFetch
} from '@/utils/exampleQueryOptions'
// import SkeletonDemo from '@/components/shared/SkeletonDemo'

export const Route = createFileRoute('/homewqs')({
  loader: async (opts) => {
    const promise1 = opts.context.queryClient.ensureQueryData(
      exampleQueryOption1WithRealFetch()
    )
    const promise2 = opts.context.queryClient.ensureQueryData(
      exampleQueryOption2SimulatedFetch()
    )
    const promise3 = opts.context.queryClient.ensureQueryData(
      exampleQueryOption3SimulatedFetch()
    )
    const [myData1, myData2, myData3] = await Promise.all([
      promise1,
      promise2,
      promise3
    ])
    return { myData1, myData2, myData3 }
  },
  // loader: (opts) =>
  //   opts.context.queryClient.ensureQueryData(countriesQueryOption()),
  component: HomeQueryAndSuspense
  // pendingComponent: SkeletonDemo
})
