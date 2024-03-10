import { createFileRoute } from '@tanstack/react-router'
import HomeQueryOnly from '@/views/HomeQueryOnly'
import { countriesQueryOption } from '@/utils/queryOptions'

export const Route = createFileRoute('/homewq')({
  loader: (opts) =>
    opts.context.queryClient.ensureQueryData(countriesQueryOption()),
  component: HomeQueryOnly
})