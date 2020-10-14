import React, { useState, useEffect } from 'react';
import './App.css';
import ChatListItem from './components/MenuListItem';

const App = () => {
	const [menuList, setMenuList] = useState([{}, {}, {}, {}]);

	return (
		<div className="app-window">
			<div className="sidebar">
				<header>
					<img
						src="https://www.w3schools.com/howto/img_avatar2.png"
						alt="avatar"
						className="header--avatar"
					/>
					<div className="header--buttons">...</div>
				</header>

				<div className="menulist">
					{menuList.map((item, key) => (
						<div>
							<ChatListItem key={key} />
						</div>
					))}
				</div>
			</div>
			<div className="contentarea">Conteudo</div>
		</div>
	);
};

export default App;
