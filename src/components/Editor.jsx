import React, { useState } from 'react'
import RemarkGfmPlugin from 'remark-gfm'
import RemarkMathPlugin from 'remark-math'
import MathJax from 'react-mathjax2'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import loadable from '@loadable/component'
import Button from './Button'

const MonacoEditor = loadable(() => import('react-monaco-editor'))
export default function Editor() {
    const [text, setText] = useState('')

    const downloadText = () => {
        const element = document.createElement('a')
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text))
        element.setAttribute('download', 'test.md')

        element.style.display = 'none'
        document.body.appendChild(element)
        element.click()
        document.body.removeChild(element)
    }

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
                <Button className="fixed m-16 bottom-0 right-0" onClick={downloadText}>Download</Button>
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
