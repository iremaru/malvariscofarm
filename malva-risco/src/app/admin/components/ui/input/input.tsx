import React from 'react'
import { TextField } from '@mui/material'

export interface MFInputProps {
	label: string,
	onPressEnter: () => void,
}

export const MFInput = (props : MFInputProps) => {
	const { label, onPressEnter } = props;
	
	const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
		if (event.key === 'Enter') {
			event.preventDefault(); 
			onPressEnter(); 
		}
	}
	
	return (
			<TextField
				id="outlined-basic"
				label={ label }
				variant="outlined"
				onKeyDown={handleKeyDown}
			/>
  )
}
