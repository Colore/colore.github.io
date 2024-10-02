import { createFileRoute } from '@tanstack/react-router'
import { Wiki } from '~/components/Wiki/Wiki'

export const Route = createFileRoute('/')({
    component: Index,
    notFoundComponent: DefaultWiki
})

function Index() {
    return <Wiki page='home' />
}

function DefaultWiki() {
    return <Wiki />
}
