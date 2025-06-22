import type { Metadata } from "next";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Image from "next/image";
import { BtnWhatsapp } from "@/app/home/components/btn_whatsapp/btnWhatsapp";
import { Navbar } from "@/app/home/components/navbar/navbar";
import "@/app/globals.scss";

export const metadata: Metadata = {
  title: "Malva Risco",
  description: "Finca Ecológica Malva Risco",
};

export default function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='es'>
      <body>
        <BtnWhatsapp />
        <Navbar />
        {children}
        <footer>
          <Image
            src='/certificates/Contraetiqueta-2019.jpg'
            alt='Certificado de agricultura ecológica'
            className='ecolabel'
            width={50}
            height={75}
          />
          <div>
            <p>
              &copy; <span id='year'>{new Date().getFullYear()}</span> Finca
              Malva-Risco. Todos los derechos reservados.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
