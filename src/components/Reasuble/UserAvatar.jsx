import { Avatar } from '@material-ui/core';
import React from 'react';

const UserAvatar = ({ avatarInitial }) => {
	return <Avatar alt="User Avatar">{avatarInitial}</Avatar>;
};

export default UserAvatar;
