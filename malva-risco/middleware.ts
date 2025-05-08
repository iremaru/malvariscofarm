import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
	const res = NextResponse.next();
	const supabase = createMiddlewareClient({ req, res });
	const {
		data: { session },
	} = await supabase.auth.getSession();

	// Rutas que deseas proteger
	const adminRoutes = /^\/admin(\/.*)?$/;
	const loginRoute = '/admin/login';

	// Comprueba si la ruta actual coincide con las rutas de administración
	if (adminRoutes.test(req.nextUrl.pathname)) {
		// Si no hay sesión y no estás en la página de login, redirige al login
		if (!session && req.nextUrl.pathname !== loginRoute) {
			return NextResponse.redirect(new URL(loginRoute, req.url));
		}

		// Si hay sesión o estás en la página de login, permite el acceso
		return res;
	}

	// Para cualquier otra ruta, permite el acceso directamente
	return NextResponse.redirect(new URL(loginRoute, req.url));;
}

// Configuración para que el middleware se ejecute solo en las rutas que coinciden con el matcher
export const config = {
	matcher: '/admin/:path*',
};