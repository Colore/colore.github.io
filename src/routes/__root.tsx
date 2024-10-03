import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

import PageHeaderImage from '~/assets/images/page-header.jpg'
import Footer from '~/components/Footer/Footer'
import Header from '~/components/Header/Header'
import Navigation from '~/components/Navigation/Navigation'
import PageHeader from '~/components/PageHeader/PageHeader'

import '~/styles/find-me.css'
import '~/styles/globals.css'

export const Route = createRootRoute({
    component: () => (
        <>
            <div className='flex flex-row'>
                <div className='basis-0 sm:basis-1/12 md:basis-1/4'></div>
                <div className='basis-full sm:basis-10/12 md:basis-2/4 shadow-content'>
                    <div className='min-h-full'>
                        <div className='flex flex-col'>
                            <div className='flex-none'>
                                <Header />
                                <Navigation />
                                <img className='w-full' src={PageHeaderImage} alt='header' />
                                <PageHeader />
                            </div>
                            <div className='basis-auto p-2'>
                                <Outlet />
                            </div>
                            <div className='flex-none bottom-0'>
                                <Footer />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='basis-0 sm:basis-1/12 md:basis-1/4'></div>
            </div>
            <TanStackRouterDevtools />
        </>
    )
})
