'use client'

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import '../app/globals.css';

const NotFound = () => {
    const router = useRouter()

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-4">
            <div className="text-center space-y-6 max-w-lg">
                {/* Animated 404 Text */}
                <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-500 animate-pulse">
                    404
                </h1>
                
                <h2 className="text-3xl md:text-4xl font-bold">
                    Oops! You seem to be lost.
                </h2>
                
                <p className="text-lg text-gray-600 dark:text-gray-400">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Or maybe it went on a pilgrimage?
                </p>

                {/* Funny Illustration Placeholder or Icon */}
                <div className="text-6xl animate-bounce py-4">
                    🧭
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link 
                        href="/"
                        className="px-8 py-3 rounded-full bg-green-600 hover:bg-green-700 text-white font-semibold transition-all transform hover:scale-105 shadow-lg"
                    >
                        Return Home
                    </Link>
                    <button 
                        onClick={() => router.back()}
                        className="px-8 py-3 rounded-full border-2 border-green-600 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-gray-800 font-semibold transition-all"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NotFound