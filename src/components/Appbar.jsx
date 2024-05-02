import React from 'react';

function Appbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-rose-500 flex items-center justify-between px-4 py-2">
            <div className='flex-shrink-0'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-30 h-20 text-slate-200 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
                </svg>

            </div>
            <nav className="ml-auto">
                {/* Add your navigation links here */}
            </nav>
        </header>
    );
}

export default Appbar;
