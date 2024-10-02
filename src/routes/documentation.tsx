import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/documentation')({
    component: Documentation
})

function Documentation() {
    return (
        <div className='text-colore'>
            <h2>Welcome to the Colore documentation.</h2>
            <p>A few starting points:</p>
            <ul className='list-disc ps-8'>
                <li>
                    <Link to='/background' title='Background'>
                        Background
                    </Link>
                </li>
                <li>
                    <Link to='/specification' title='Specification'>
                        Specification
                    </Link>
                </li>
                <li>
                    <Link to='/implementations' title='Implementations'>
                        Implementations
                    </Link>
                </li>
            </ul>
        </div>
    )
}
