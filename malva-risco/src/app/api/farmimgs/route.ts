import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
	const dirPath = path.join(process.cwd(), 'public/farmsfarm-webp');
	const files = fs.readdirSync(dirPath);
	const images = files.filter(file => /\.(jpg|jpeg|png|webp|gif)$/i.test(file));
	return NextResponse.json(images);
}
