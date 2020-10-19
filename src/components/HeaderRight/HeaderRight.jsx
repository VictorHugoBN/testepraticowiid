import { Box, Button, Checkbox } from '@material-ui/core';
import React from 'react';

const HeaderRight = ({ onArchive }) => {
	return (
		<Box style={{ margin: '10px' }}>
			<Checkbox color="primary" />
			<Button color="default" style={{ margin: '10px' }} variant="contained">
				Atribuir
			</Button>
			<Button
				onClick={onArchive}
				color="secondary"
				style={{ margin: '10px' }}
				variant="contained"
			>
				Arquivar
			</Button>
			<Button color="primary" style={{ margin: '10px' }} variant="contained">
				Agendar
			</Button>
		</Box>
	);
};

export default HeaderRight;
