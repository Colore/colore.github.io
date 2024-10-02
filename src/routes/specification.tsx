import { createFileRoute } from '@tanstack/react-router'
import { Wiki } from '~/components/Wiki/Wiki'

export const Route = createFileRoute('/specification')({
    component: () => <Wiki page='background' />
})
