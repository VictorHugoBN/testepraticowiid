import React, { useState } from 'react';

import { Box } from '@material-ui/core';
import Main from '../../Pages/Main/Main';
import { useParams } from 'react-router';

const SwitchContents = () => {
	const { section } = useParams();
	/* const [content, setContent] = useState(null); */

	let content = null;

	switch (section) {
		case 'home':
			content = <Main />;
			break;

		default:
			content = null;
			break;
	}

	return <Box style={{ backgroundColor: 'gray' }}>{content}</Box>;
};

export default SwitchContents;
