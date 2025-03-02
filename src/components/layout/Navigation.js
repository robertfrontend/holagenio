import React from 'react'
import { Button } from './ui'

export default function Navigation({ title }) {
    return (
        <nav className="bg-base-100 border-b mb-6">
            <div className="mx-auto px-0 py-3 flex items-center justify-between">
                <Button
                    onClick={() => window.history.back()}
                    styles="btn-ghost text-xl"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    Back
                </Button>
                <h1 className="text-xl md:text-2xl font-bold">
                    {title}
                </h1>
            </div>
        </nav >
    )
}
