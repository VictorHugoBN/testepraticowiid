import { Box, Button, Checkbox } from '@material-ui/core';
import React from 'react';

const HeaderRight = () => {
	return (
		<Box style={{ margin: '10px' }}>
			<Checkbox color="primary" />
			<Button style={{ margin: '10px' }} variant="outlined">
				Atribuir
			</Button>
			<Button style={{ margin: '10px' }} variant="outlined">
				Arquivar
			</Button>
			<Button style={{ margin: '10px' }} variant="outlined">
				Agendar
			</Button>
		</Box>
	);
};

export default HeaderRight;
