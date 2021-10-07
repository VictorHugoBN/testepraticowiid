import { BOTAO_AGENDAR, BOTAO_ARQUIVAR, BOTAO_ATRIBUIR } from '../../constants/languages';
import { Box, Button, Checkbox } from '@material-ui/core';

import React from 'react';

const HeaderRight = ({ onArchive, language }) => {
	return (
		<Box style={{ margin: '10px' }}>
			<Checkbox color="primary" />
			<Button color="default" style={{ margin: '10px' }} variant="contained">
				{BOTAO_ATRIBUIR[language]}
			</Button>
			<Button onClick={onArchive} color="secondary" style={{ margin: '10px' }} variant="contained">
				{BOTAO_ARQUIVAR[language]}
			</Button>
			<Button color="primary" style={{ margin: '10px' }} variant="contained">
				{BOTAO_AGENDAR[language]}
			</Button>
		</Box>
	);
};

export default HeaderRight;
