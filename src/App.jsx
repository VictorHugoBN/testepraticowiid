import { Box } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import './App.css';
import ChatListItem from './components/MenuListItem';

const App = () => {
	const [menuList, setMenuList] = useState([{}, {}, {}, {}]);

	return (
		<Box className="app-window">
			<Box className="sidebar">
				<Box>
					<img
						src="https://www.w3schools.com/howto/img_avatar2.png"
						alt="avatar"
						className="header--avatar"
					/>
					<Box className="header--buttons">...</Box>
				</Box>

				<Box className="menulist">
					{menuList.map((item, key) => (
						<Box>
							<ChatListItem key={key} />
						</Box>
					))}
				</Box>
			</Box>
			<Box className="contentarea">Conteudo</Box>
		</Box>
	);
};

export default App;
