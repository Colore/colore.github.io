'use client'

const Header = () => (
    <div className='my-5 w-full'>
        <div className='flex flex-row'>
            <div className='basis-1/3 p-3'>
                <div className='p-0 pr-3 uppercase tracking-widest border-r border-r-gray-400'>
                    <span className='font-medium'>Colore</span>
                    <br />
                    <span className='text-sm'>
                        The If-Less
                        <br />
                        programming
                        <br />
                        framework
                    </span>
                </div>
            </div>
            <div className='basis-2/3 p-3'>
                <div className='flex flex-col lg:flex-row'>
                    <div className='basis-1/2 p-3 text-center'>
                        <span className='text-center lowercase'>colore framework and specification</span>
                    </div>
                    <div className='basis-1/2 p-3'>
                        <input
                            type='text'
                            placeholder='Search'
                            className='rounded outline-0 focus:outline-0 ring-1 ring-slate-400/50 focus:ring-2 focus:ring-slate-700/50 float-right'
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Header
