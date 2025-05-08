'use client';
import { supabase } from '@/utils/supabaseClient';
import { useState } from 'react';

export default function Login() {
	const [email, setEmail] = useState('');

	const handleLogin = async () => {
		const { error } = await supabase.auth.signInWithOtp({ email });
		if (error) console.error('Error logging in:', error);
		else alert('Revisa tu correo para entrar');
	};

	console.log('login')
	return (
		<div className='page'>
			<h1>Inicia sesión como administrador</h1>
			<input
				type="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				placeholder="Tu email"
			/>
			<button onClick={handleLogin}>Enviar link mágico</button>
		</div>
	);
}
