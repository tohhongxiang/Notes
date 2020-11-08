import React, { useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import ArrowDown from '../../static/icons/arrow_down.svg'
import ArrowRight from '../../static/icons/arrow_right.svg'
import { useLocation } from '@reach/router'

function SidebarNode({ link, title, children, ...props }) {
    const data = useStaticQuery(graphql`
        query GetSitePathPrefix {
            site {
                pathPrefix
            }
        }
    `)

    const { pathname: currentPath } = useLocation()
    const [isOpen, setIsOpen] = useState(childrenIsActive({ link: link, title, children }, decodeURI(currentPath).replace(data.site.pathPrefix, '')))

    const hasChildren = children && Object.keys(children).length > 0

    return <>
        <div {...props} className={`flex justify-between items-center text-gray-600 font-medium hover:text-gray-900 rounded-r-lg overflow-hidden ${hasChildren ? "p-4" : ""} ${props.className}`}>
            {hasChildren ? <>
                <p className={`text-gray-700 ${isOpen ? "text-gray-900" : ""}`}><strong>{title}</strong></p>
                <button className="px-2 py-1 focus:outline-none" onClick={() => setIsOpen(c => !c)}>{isOpen ? <img src={ArrowDown} alt="collapse" /> : <img src={ArrowRight} alt="expand" />}</button>
            </> : <Link to={link} className="w-full p-4" {...props} activeClassName={`font-bold bg-gray-200 text-gray-900 ${props.className}`}>{title}</Link>}
        </div>
        {isOpen && (
            <ul className="border-l-4 border-solid border-gray-200 ml-4">
                {Object.values(children).map(child => <li key={child.link}><SidebarNode {...child} /></li>)}
            </ul>
        )}
    </>
}

export default function Sidebar({ directories, ...props }) {
    const [isOpen, setIsOpen] = useState(false)

    return <div {...props}>
        <button className="fixed bottom-0 right-0 m-16 p-4 bg-blue-600 rounded-full outline-none z-10 sm:hidden" onClick={() => setIsOpen(c => !c)}>{isOpen ? "❌" : "🍔"}</button>
        <ul className={`transition-all duration-200 ease-in-out overflow-y-auto flex-0 w-64 sm:ml-0 bg-white ${isOpen ? 'ml-0' : '-ml-64'} relative h-full`}>
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
