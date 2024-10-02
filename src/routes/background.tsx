import { createFileRoute } from '@tanstack/react-router'
import { Wiki } from '~/components/Wiki/Wiki'

export const Route = createFileRoute('/background')({
    component: () => <Wiki page='background' />
})
