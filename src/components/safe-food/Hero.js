import React from 'react'

const Hero = () => {
    return (
        <section className="px-4 py-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Safe Eats Boston 🍽️🏙️
            </h1>
            <p className="text-base md:text-lg mb-6 max-w-2xl mx-auto">
                Discover the results of Boston&apos;s annual food safety inspections
            </p>
            <div className="max-w-xl mx-auto">
                <ul className="list-none space-y-2 text-center">
                    <li>🏆 Find top-rated restaurants</li>
                    <li>🔍 Review the latest inspection reports</li>
                    <li>📊 Compare food safety histories</li>
                </ul>
            </div>
        </section>
    )
}

export default Hero