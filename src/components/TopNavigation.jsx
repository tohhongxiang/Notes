import React from 'react'

export default function TopNavigation({ children }) {
    return (
        <nav className="mx-auto p-4 flex justify-between w-full flex-0 border-solid shadow z-10">
            {children}
        </nav>
    )
}
