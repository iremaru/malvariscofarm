import { NextRequest } from 'next/server';
import { updateSession } from './utils/supabase/middleware';


export async function middleware(req: NextRequest) {
	const response = await updateSession(req);
	return response;
}

// Configuración para que el middleware se ejecute solo en las rutas que coinciden con el matcher
export const config = {
	matcher: '/admin/:path*',
	//matcher: '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
};