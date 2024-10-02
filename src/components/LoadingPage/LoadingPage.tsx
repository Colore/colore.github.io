'use client'

import styles from './LoadingPage.module.scss'

const LoadingPage = () => (
    <div className={styles.Loading}>
        <div className={styles.Spinner}>
            <div className='flex'>
                <span className='animate-ping animation-delay rounded-full bg-red-400 text-red inline-flex size-3'></span>
                <span className='animate-ping animation-delay animation-delay-100 rounded-full bg-orange-400 text-orange inline-flex size-3'></span>
                <span className='animate-ping animation-delay animation-delay-200 rounded-full bg-yellow-400 text-yellow inline-flex size-3'></span>
                <span className='animate-ping animation-delay animation-delay-300 rounded-full bg-green-400 text-green inline-flex size-3'></span>
                <span className='animate-ping animation-delay animation-delay-400 rounded-full bg-blue-400 text-lightblue inline-flex size-3'></span>
                <span className='animate-ping animation-delay animation-delay-500 rounded-full bg-indigo-400 text-indigo inline-flex size-3'></span>
                <span className='animate-ping animation-delay animation-delay-600 rounded-full bg-violet-400 text-violet inline-flex size-3'></span>
            </div>
        </div>
    </div>
)

export default LoadingPage
