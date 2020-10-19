import { Avatar, Box } from '@material-ui/core';
import React from 'react';

const UserAvatar = ({ avatarInitial }) => {
	return (
		<Avatar style={{ cursor: 'pointer' }} alt="User Avatar">
			{avatarInitial}
		</Avatar>
	);
};

export default UserAvatar;
