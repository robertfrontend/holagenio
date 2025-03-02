'use client'
import AuthForm, { checkAuthStatus } from '@/components/AuthForm';
import Navigation from '@/components/layout/Navigation';
import React, { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast';
import CreateForm from '@/components/lost-found/CreateForm';

export default function Page() {
    const [showAuthForm, setShowAuthForm] = useState(true);

    useEffect(() => {
        const unsubscribe = checkAuthStatus((authState) => {
            setShowAuthForm(!authState.isAuthenticated);
        })

        return () => unsubscribe()
    }, [])

    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />
            <Navigation title="Create a post" />
            {showAuthForm ? <AuthForm /> : <CreateForm />}
        </>
    )
}

