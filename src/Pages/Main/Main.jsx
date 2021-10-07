import { Box, Divider, Select, Switch, TextField, makeStyles } from '@material-ui/core';
import { LABEL_NOVO, LABEL_PESQUISA, LANGUAGES } from '../../constants/languages';
import React, { useState } from 'react';

import HeaderLeft from '../../components/HeaderLeft/HeaderLeft';
import HeaderRight from '../../components/HeaderRight/HeaderRight';
import MenuTree from '../../components/MenuTree/MenuTree';
import SubMenuItems from '../../components/SubMenuItems/SubMenuItems';

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.background.paper,
		width: '100vw',
		height: '100vh',
		display: 'flex',
		flexDirection: 'row',
	},
	leftContainer: {
		backgroundColor: theme.palette.background.default,
		resize: 'horizontal',
		overflow: 'auto',
		display: 'flex',
		flexDirection: 'column',
		minWidth: '200px',
		maxWidth: '500px',
	},
	leftHeader: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '10px',
	},
	rightContainer: {
		padding: '10px',
		width: '100%',
	},
	menuTree: {},
	rightHeader: {
		display: 'flex',
		flexDirection: 'column',
	},
	rightContentArea: {},
}));

const Main = () => {
	const styles = useStyles();
	const [subMenuItens, setSubMenuItens] = useState([]);
	const [language, setLanguage] = useState(LANGUAGES.PTBR);
	const [selectedInboxId, setSelectedInboxId] = useState(11);
	const [selectedRowsIds, setSelectedRowsIds] = useState([]);

	const onArchive = () => {
		setSubMenuItens(subMenuItens.filter((item) => !selectedRowsIds.includes(item.id)));
	};

	const handleChangeInbox = (id) => {
		setSelectedInboxId(id);
	};

	return (
		<Box container className={styles.root}>
			<Box container className={styles.leftContainer} xs={3} direction="column">
				<Box className={styles.leftHeader}>
					<HeaderLeft />
					<Select value={LABEL_NOVO[language]}>
						<option value={LABEL_NOVO[language]}>{LABEL_NOVO[language]}</option>
					</Select>
				</Box>
				<Box mx={2}>
					<Divider />
				</Box>
				<Box className={styles.menuTree}>
					<MenuTree handleChangeInbox={handleChangeInbox} />
				</Box>
			</Box>

			<Box container className={styles.rightContainer} xs={9} direction="column">
				<Box className={styles.rightHeader}>
					<Box display="flex" justifyContent="space-between" alignItems="center">
						<Box width="90%">
							<TextField size="small" fullWidth label={LABEL_PESQUISA[language]} variant="outlined" />
						</Box>
						{/* 						<Switch checked={darkMode} onChange={handleDarkMode} />
						 */}
						<Select variant="standard" value={language} onChange={(e) => setLanguage(e.target.value)}>
							{Object.values(LANGUAGES).map((item, index) => (
								<option key={index} value={item}>
									{item}
								</option>
							))}
						</Select>
					</Box>

					<HeaderRight onArchive={onArchive} language={language} />

					<SubMenuItems
						id={selectedInboxId}
						selectedRowsIds={selectedRowsIds}
						setSelectedRowsIds={setSelectedRowsIds}
						subMenuItens={subMenuItens}
						setSubMenuItens={setSubMenuItens}
					/>
				</Box>
			</Box>
		</Box>
	);
};

export default Main;
