import fs from 'fs/promises';
import path from 'path';
import heicConvert from 'heic-convert';
import sharp from 'sharp';

const inputDir = './public/farmfarm';
const outputDir = './public/farmsfarm-webp';

async function convertImages() {
	try {
		await fs.mkdir(outputDir, { recursive: true });
		const files = await fs.readdir(inputDir);

		for (const file of files) {
			const ext = path.extname(file).toLowerCase();
			const name = path.basename(file, ext);
			const inputPath = path.join(inputDir, file);
			const outputPath = path.join(outputDir, `${name}.webp`);

			if (ext === '.heic') {
				console.log(`Convirtiendo: ${file}`);
				const inputBuffer = await fs.readFile(inputPath);
				const outputBuffer = await heicConvert({
					buffer: inputBuffer,
					format: 'JPEG',
					quality: 0.9,
				});

				await sharp(outputBuffer)
					.resize(1200) // ajusta a tu gusto
					.webp({ quality: 80 })
					.toFile(outputPath);
			}
		}

		console.log('✅ Conversión completada.');
	} catch (error) {
		console.error('❌ Error al convertir imágenes:', error);
	}
}

convertImages();
