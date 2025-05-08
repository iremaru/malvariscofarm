import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
	const res = NextResponse.next();

	const supabase = createMiddlewareClient({ req, res });

	const { data: { user } } = await supabase.auth.getUser();

	const host = req.headers.get('host') || '';
	const url = req.nextUrl.clone();

	// Subdominio admin => necesita autenticación
	if (host.startsWith('admin.')) {
		if (!user) {
			url.pathname = '/login';
			return NextResponse.redirect(url);
		}

		// Reescribe internamente a la ruta del admin
		url.pathname = `/_admin${url.pathname}`;
		return NextResponse.rewrite(url);
	}

	// Bloquear el acceso a /admin por la ruta normal
	if (url.pathname.startsWith('/admin')) {
		url.pathname = '/';
		return NextResponse.redirect(url);
	}

	return res;
}
