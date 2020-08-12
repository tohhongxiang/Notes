import React from 'react'
import { Link } from 'gatsby'

export default function NotePreview({ title, excerpt, date, slug }) {
    const path = slug.split('/').filter(Boolean)

    return (
        <Link to={slug}>
            <div className="p-4 pt-8 border-b border-gray-300 border-solid hover:bg-gray-100">
                <header className="flex justify-between">
                    <h2 className="font-bold hover:underline">{title}</h2>
                    <p className="flex-none"><small>{date}</small></p>
                </header>
                <p>{excerpt}</p>
                {path.length > 1 && <p className="text-gray-600"><small>{path.slice(0, path.length - 1).join(' > ')}</small></p>}
            </div>
        </Link>
    )
}
