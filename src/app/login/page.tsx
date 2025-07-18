"use client";

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await signIn('credentials', {
            redirect: false,
            email,
            password,
        });
        if (res?.ok) {
            router.push('/admin/dashboard');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(to bottom right, #1E3A8A, #312E81)',
                padding: '1rem',
                fontFamily: 'Poppins, sans-serif',
            }}
        >
            <div
                style={{
                    backgroundColor: 'white',
                    width: '100%',
                    maxWidth: '400px',
                    borderRadius: '8px',
                    padding: '2rem',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    fontFamily: 'Poppins, sans-serif',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginBottom: '1.5rem',
                    }}
                >
                    <div
                        style={{
                            width: '40px',
                            height: '40px',
                            backgroundColor: '#FACC15',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '0.5rem',
                        }}
                    >
                        <span style={{ fontWeight: 'bold', color: 'black' }}>T</span>
                    </div>
                    <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Taplox</h1>
                    <p style={{ color: '#6B7280', marginTop: '0.25rem' }}>Welcome Back!</p>
                    <p style={{ fontSize: '0.875rem', color: '#9CA3AF' }}>Sign in to your account to continue</p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.25rem' }}>Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your username or email"
                            style={{
                                width: '100%',
                                border: '1px solid #D1D5DB',
                                borderRadius: '4px',
                                padding: '0.5rem 0.75rem',
                                outline: 'none',
                                fontFamily: 'Poppins, sans-serif',
                            }}
                            required
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.25rem' }}>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            style={{
                                width: '100%',
                                border: '1px solid #D1D5DB',
                                borderRadius: '4px',
                                padding: '0.5rem 0.75rem',
                                outline: 'none',
                                fontFamily: 'Poppins, sans-serif',
                            }}
                            required
                        />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input id="remember" type="checkbox" style={{ marginRight: '0.5rem' }} />
                        <label htmlFor="remember" style={{ fontSize: '0.875rem' }}>
                            Remember me
                        </label>
                    </div>
                    <button
                        type="submit"
                        style={{
                            width: '100%',
                            backgroundColor: 'black',
                            color: 'white',
                            borderRadius: '4px',
                            padding: '0.5rem 0',
                            fontWeight: '500',
                            border: 'none',
                            cursor: 'pointer',
                            fontFamily: 'Poppins, sans-serif',
                        }}
                    >
                        Sign In
                    </button>
                </form>
                <p style={{ marginTop: '1rem', textAlign: 'center', fontSize: '0.875rem', color: '#6B7280' }}>
                    Don’t have an account?{' '}
                    <a href="#" style={{ color: '#3B82F6', textDecoration: 'underline' }}>
                        Sign Up
                    </a>
                </p>
            </div>
        </div>
    );
}
