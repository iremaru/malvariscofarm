import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export const BtnWhatsapp = ({
	msg = 'me gustaría obtener más información',
	cta = '',
	isFloating = true
}) => {
	const telfone = "34647184827";
	const mensaje = `Hola, Finca Malva-Risco, ${msg}`;
	return (
		<a href={`https://wa.me/${telfone}?text=${encodeURIComponent(mensaje)}`}
			className={isFloating ? "whatsapp-float" : "whatsapp-btn"}
			target="_blank">
			<FontAwesomeIcon icon={faWhatsapp} className="text-white" />
			{cta && <span className="whatsapp-text">{cta}</span>}
		</a>
	)
}
