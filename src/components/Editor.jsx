import React, { useState } from 'react'
import RemarkGfmPlugin from 'remark-gfm'
import RemarkMathPlugin from 'remark-math'
import MathJax from 'react-mathjax2'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import loadable from '@loadable/component'

const MonacoEditor = loadable(() => import('react-monaco-editor'))
export default function Editor() {
    const [text, setText] = useState('')

    return (
        <div className="grid grid-cols-2 h-full overflow-y-hidden">
            <MonacoEditor
                language="markdown"
                theme="vs-dark"
                value={text}
                onChange={(value, event) => setText(value)}
            />
            <div className="p-8 overflow-y-scroll">
                <MarkdownRenderer children={text} />
            </div>
        </div>
    )
}

export function MarkdownRenderer(props) {
    const newProps = {
        ...props,
        plugins: [
            RemarkMathPlugin,
            RemarkGfmPlugin
        ],
        renderers: {
            ...props.renderers,
            math: props => <MathJax.Node>{props.value}</MathJax.Node>,
            inlineMath: props => <MathJax.Node inline>{props.value}</MathJax.Node>,
            code: ({ language = '', value = '' }) => <SyntaxHighlighter style={dracula} language={language} children={value} />
        }
    }

    return <MathJax.Context input="tex"><div className="markdown-body"><ReactMarkdown {...newProps} /></div></MathJax.Context>
}
