import React, { useState } from 'react'
import { Link } from 'gatsby'
import ArrowDown from '../../static/icons/arrow_down.svg'
import ArrowRight from '../../static/icons/arrow_right.svg'
import { useLocation } from '@reach/router'

export default function NodeInformation({ link, title, children }) {
    const { pathname: currentPath } = useLocation()
    const [isOpen, setIsOpen] = useState(childrenIsActive({ link, title, children }, decodeURI(currentPath)))

    if (children && Object.keys(children).length > 0) {
        return <div>
            <div className="flex justify-between items-center p-4 hover:bg-gray-100">
                <p><strong>{title}</strong></p>
                <button className="px-2 py-1 focus:outline-none" onClick={() => setIsOpen(c => !c)}>{isOpen ? <img src={ArrowDown} alt="collapse" /> : <img src={ArrowRight} alt="expand" />}</button>
            </div>
            {isOpen && (
                <ul className="border-l-4 border-solid border-gray-400 ml-4">{Object.values(children).map(child => <NodeInformation key={child.link} {...child} />)}</ul>
            )}
        </div>
    }

    return (
        <div className="flex hover:bg-gray-100">
            <Link to={link} className="p-4 w-full" activeClassName="font-bold bg-gray-300">{title}</Link>
        </div>
    )
}

function childrenIsActive(nodeInformation, activeLink) {
    if (nodeInformation.link === activeLink) return true
    if (Object.keys(nodeInformation.children).length === 0) return false
    return Object.values(nodeInformation.children).some(child => childrenIsActive(child, activeLink))
}
