import {
	Box,
	Divider,
	FormControl,
	Grid,
	makeStyles,
	Select,
	Switch,
	TextField,
} from '@material-ui/core';
import React, { useState } from 'react';
import HeaderLeft from '../../components/HeaderLeft/HeaderLeft';
import MenuTree from '../../components/MenuTree/MenuTree';
import SubMenuItems from '../../components/SubMenuItems/SubMenuItems';
import HeaderRight from '../../components/HeaderRight/HeaderRight';
import { LABEL_PESQUISA, LANGUAGES } from '../../constants/languages';

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.background.paper,
		width: '100vw',
		height: '100vh',
	},
	leftContainer: {
		backgroundColor: theme.palette.background.default,
		width: '100vw',
	},
	leftHeader: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '10px',
	},
	rightContainer: {
		padding: '10px',
	},
	menuTree: {},
	rightHeader: {
		display: 'flex',
		flexDirection: 'column',
	},
	rightContentArea: {},
}));

const Main = ({ handleDarkMode, darkMode }) => {
	const styles = useStyles();
	const [subMenuItens, setSubMenuItens] = useState([]);
	const [language, setLanguage] = useState(LANGUAGES.PTBR);
	const [selectedInboxId, setSelectedInboxId] = useState(11);
	const [selectedRowsIds, setSelectedRowsIds] = useState([]);

	const onArchive = () => {
		setSubMenuItens(
			subMenuItens.filter((item) => !selectedRowsIds.includes(item.id))
		);
	};

	const handleChangeInbox = (id) => {
		setSelectedInboxId(id);
	};

	return (
		<Grid container className={styles.root}>
			<Grid
				container
				className={styles.leftContainer}
				xs={3}
				direction="column"
			>
				<Box className={styles.leftHeader}>
					<HeaderLeft />
					<Select
						variant="standard"
						value={language}
						onChange={(e) => setLanguage(e.target.value)}
					>
						{Object.values(LANGUAGES).map((item) => (
							<option value={item}> {item} </option>
						))}
					</Select>
				</Box>
				<Box mx={2}>
					<Divider />
				</Box>
				<Box className={styles.menuTree}>
					<MenuTree handleChangeInbox={handleChangeInbox} />
				</Box>
			</Grid>

			<Grid
				container
				className={styles.rightContainer}
				xs={9}
				direction="column"
			>
				<Box className={styles.rightHeader}>
					<Box
						display="flex"
						justifyContent="space-between"
						alignItems="center"
					>
						<Box width="90%">
							<TextField
								size="small"
								fullWidth
								label={LABEL_PESQUISA[language]}
								variant="outlined"
							/>
						</Box>
						<Switch checked={darkMode} onChange={handleDarkMode} />
						<Select
							variant="standard"
							value={language}
							onChange={(e) => setLanguage(e.target.value)}
						>
							{Object.values(LANGUAGES).map((item) => (
								<option value={item}> {item} </option>
							))}
						</Select>
					</Box>

					<HeaderRight onArchive={onArchive} />

					<SubMenuItems
						id={selectedInboxId}
						selectedRowsIds={selectedRowsIds}
						setSelectedRowsIds={setSelectedRowsIds}
						subMenuItens={subMenuItens}
						setSubMenuItens={setSubMenuItens}
					/>
				</Box>
			</Grid>
		</Grid>
	);
};

export default Main;
