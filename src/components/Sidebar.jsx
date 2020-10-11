import React, { useState } from 'react'
import { Link } from 'gatsby'
import ArrowDown from '../../static/icons/arrow_down.svg'
import ArrowRight from '../../static/icons/arrow_right.svg'
import { useLocation } from '@reach/router'

function SidebarNode({ link, title, children }) {
    const { pathname: currentPath } = useLocation()
    const [isOpen, setIsOpen] = useState(childrenIsActive({ link, title, children }, decodeURI(currentPath)))

    if (children && Object.keys(children).length > 0) {
        return <div>
            <div className="flex justify-between items-center p-4 hover:bg-gray-100">
                <p><strong>{title}</strong></p>
                <button className="px-2 py-1 focus:outline-none" onClick={() => setIsOpen(c => !c)}>{isOpen ? <img src={ArrowDown} alt="collapse" /> : <img src={ArrowRight} alt="expand" />}</button>
            </div>
            {isOpen && (
                <ul className="border-l-4 border-solid border-gray-400 ml-4">{Object.values(children).map(child => <SidebarNode key={child.link} {...child} />)}</ul>
            )}
        </div>
    }

    return (
        <div className="flex hover:bg-gray-100">
            <Link to={link} className="p-4 w-full" activeClassName="font-bold bg-gray-300">{title}</Link>
        </div>
    )
}

export default function Sidebar({ directories }) {
    const [isOpen, setIsOpen] = useState(false)

    return <div>
        <button className="absolute bottom-0 right-0 m-16 p-4 bg-blue-600 rounded-full outline-none z-10 sm:hidden" onClick={() => setIsOpen(c => !c)}>{isOpen ? "❌" : "🍔"}</button>
        <ul className={`transition-all duration-200 ease-in-out overflow-y-auto flex-0 border-solid border-r border-gray-300 w-64 sm:ml-0 relative ${isOpen ? 'ml-0' : '-ml-64'} z-10 bg-white h-full`}>
            {Object.values(directories).map(directory => (
                <li key={directory.link}><SidebarNode {...directory} /></li>
            ))}
        </ul>
    </div>
}

function childrenIsActive(nodeInformation, activeLink) {
    if (nodeInformation.link === activeLink) return true
    if (Object.keys(nodeInformation.children).length === 0) return false
    return Object.values(nodeInformation.children).some(child => childrenIsActive(child, activeLink))
}
