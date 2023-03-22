import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { useTranslation } from 'react-i18next';
import { styled, alpha } from '@mui/material/styles';
import { useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import SearchIcon from '@mui/icons-material/Search';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { PersonAdvancedSearch, PersonCard, PersonRecents } from '../features/persons';
import { appMessageState, appSeverityState, appSnackOpenState } from '../states/notification';
import { currentStudentState, isStudentDeleteState } from '../states/person';
import { themeOptionsState } from '../states/theme';
import { Persons as PersonsData } from '../classes/Persons';

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(0.8, 1, 0.8, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
  '&.MuiInputBase-root': {
    width: '100%',
  },
}));

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
    </div>
  );
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const Persons = () => {
  const { t } = useTranslation('ui');
  const navigate = useNavigate();

  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('md'), { noSsr: true });

  let searchParams = localStorage.getItem('searchParams');
  searchParams = searchParams ? JSON.parse(searchParams) : {};
  const txtSearchInitial = searchParams.txtSearch || '';

  const [advancedOpen, setAdvancedOpen] = useState(false);
  const [persons, setPersons] = useState([]);
  const [anchorElMenuSmall, setAnchorElMenuSmall] = useState(null);
  const [txtSearch, setTxtSearch] = useState(txtSearchInitial);
  const [isSearch, setIsSearch] = useState(false);
  const [tabValue, setTabValue] = useState(0);

  const [isStudentDelete, setIsStudentDelete] = useRecoilState(isStudentDeleteState);

  const setAppSnackOpen = useSetRecoilState(appSnackOpenState);
  const setAppSeverity = useSetRecoilState(appSeverityState);
  const setAppMessage = useSetRecoilState(appMessageState);

  const currentStudent = useRecoilValue(currentStudentState);
  const themeOptions = useRecoilValue(themeOptionsState);

  const openMenuSmall = Boolean(anchorElMenuSmall);

  const handleClickMenuSmall = (event) => {
    setAnchorElMenuSmall(event.currentTarget);
  };

  const handleCloseMenuSmall = () => {
    setAnchorElMenuSmall(null);
  };

  const handleToggleAdvanced = () => {
    handleCloseMenuSmall();
    setAdvancedOpen(!advancedOpen);
  };

  const handleAddStudent = () => {
    navigate('/persons/new');
  };

  const handleClose = () => {
    setIsStudentDelete(false);
  };

  const handleDelete = async () => {
    const varID = currentStudent.person_uid;
    await PersonsData.delete(varID);

    let newPersons = persons.filter((person) => person.person_uid !== varID);
    setIsStudentDelete(false);
    setPersons(newPersons);

    setAppSnackOpen(true);
    setAppSeverity('success');
    setAppMessage(t('deleteSucess'));
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleSearchChange = (value) => {
    let searchParams = localStorage.getItem('searchParams');
    searchParams = searchParams ? JSON.parse(searchParams) : {};
    searchParams.txtSearch = value;
    setTxtSearch(value);

    localStorage.setItem('searchParams', JSON.stringify(searchParams));
  };

  const handleSearchStudent = useCallback(() => {
    setTabValue(0);
    setAdvancedOpen(false);

    handleCloseMenuSmall();

    let searchParams = localStorage.getItem('searchParams');
    searchParams = searchParams ? JSON.parse(searchParams) : {};

    const txtSearch = searchParams.txtSearch || '';
    const isMale = searchParams.isMale === undefined ? false : searchParams.isMale;
    const isFemale = searchParams.isFemale === undefined ? false : searchParams.isFemale;
    const isUnassigned = searchParams.isUnassigned === undefined ? false : searchParams.isUnassigned;
    const assTypes = searchParams.assTypes || [];

    setIsSearch(true);
    setTimeout(async () => {
      const result = PersonsData.filter({ txtSearch, isMale, isFemale, isUnassigned, assTypes });
      setPersons(result);
      setIsSearch(false);
    }, [1000]);
  }, []);

  const handleSearchEnter = (e) => {
    if (e.key === 'Enter') handleSearchStudent();
  };

  useEffect(() => {
    if (!mdUp) setAnchorElMenuSmall(null);
  }, [mdUp]);

  useEffect(() => {
    handleSearchStudent();
  }, [handleSearchStudent]);

  return (
    <>
      {isStudentDelete && (
        <Dialog open={isStudentDelete} onClose={handleClose}>
          <DialogTitle>
            <Box sx={{ lineHeight: 1.2 }}>
              {t('deleteTitle', {
                currentStudent: currentStudent.name,
              })}
            </Box>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">{t('deleteConfirmation')}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDelete} color="primary">
              {t('delete')}
            </Button>
            <Button onClick={handleClose} color="primary" autoFocus>
              {t('cancel')}
            </Button>
          </DialogActions>
        </Dialog>
      )}

      <Typography sx={{ margin: '0px 0px 20px 0px', textTransform: 'uppercase', fontWeight: 'bold' }}>
        {t('persons')}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          marginTop: '10px',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            borderRadius: '5px',
            backgroundColor: alpha(theme.palette.common[themeOptions.searchBg], 0.25),
            '&:hover': {
              backgroundColor: alpha(theme.palette.common[themeOptions.searchBg], 0.15),
            },
            marginBottom: '5px',
            flexGrow: 1,
            minWidth: '330px',
          }}
        >
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder={t('search')}
            inputProps={{ 'aria-label': 'search' }}
            value={txtSearch}
            onChange={(e) => handleSearchChange(e.target.value)}
            onKeyUp={handleSearchEnter}
          />
        </Box>

        {mdUp && (
          <Box>
            <IconButton
              onClick={handleToggleAdvanced}
              sx={{
                backgroundColor: alpha(theme.palette.common[themeOptions.searchBg], 0.5),
                '&:hover': {
                  backgroundColor: alpha(theme.palette.common[themeOptions.searchBg], 0.3),
                },
                margin: '-5px 5px 0 5px',
              }}
            >
              {advancedOpen ? (
                <ExpandLessIcon sx={{ fontSize: '25px' }} />
              ) : (
                <ExpandMoreIcon sx={{ fontSize: '25px' }} />
              )}
            </IconButton>
            <IconButton
              sx={{
                backgroundColor: alpha(theme.palette.common[themeOptions.searchBg], 0.5),
                '&:hover': {
                  backgroundColor: alpha(theme.palette.common[themeOptions.searchBg], 0.3),
                },
                marginTop: '-5px',
                marginRight: '5px',
              }}
              onClick={handleSearchStudent}
            >
              <PersonSearchIcon sx={{ fontSize: '25px' }} />
            </IconButton>
            <IconButton
              sx={{
                backgroundColor: alpha(theme.palette.common[themeOptions.searchBg], 0.5),
                '&:hover': {
                  backgroundColor: alpha(theme.palette.common[themeOptions.searchBg], 0.3),
                },
                marginTop: '-5px',
              }}
              onClick={handleAddStudent}
            >
              <AddCircleIcon sx={{ fontSize: '25px' }} />
            </IconButton>
          </Box>
        )}
        {!mdUp && (
          <>
            <IconButton
              sx={{
                backgroundColor: '#ABB2B9',
                margin: '-5px 5px 0 5px',
              }}
              aria-label="more"
              id="persons-small-button"
              aria-controls={openMenuSmall ? 'persons-small-menu' : undefined}
              aria-expanded={openMenuSmall ? 'true' : undefined}
              aria-haspopup="true"
              onClick={handleClickMenuSmall}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="persons-small-menu"
              anchorEl={anchorElMenuSmall}
              open={!mdUp && openMenuSmall}
              onClose={handleCloseMenuSmall}
              MenuListProps={{
                'aria-labelledby': 'persons-small-button',
              }}
            >
              <MenuItem onClick={handleToggleAdvanced}>
                <ListItemIcon>
                  {advancedOpen ? (
                    <ExpandLessIcon sx={{ fontSize: '25px' }} />
                  ) : (
                    <ExpandMoreIcon sx={{ fontSize: '25px' }} />
                  )}
                </ListItemIcon>
                <ListItemText>{advancedOpen ? t('hideAvancedSearch') : t('advancedSearch')}</ListItemText>
              </MenuItem>
              <MenuItem onClick={handleSearchStudent}>
                <ListItemIcon>
                  <PersonSearchIcon sx={{ fontSize: '25px' }} />
                </ListItemIcon>
                <ListItemText>{t('search')}</ListItemText>
              </MenuItem>
              <MenuItem onClick={handleAddStudent}>
                <ListItemIcon>
                  <AddCircleIcon sx={{ fontSize: '25px' }} />
                </ListItemIcon>
                <ListItemText>{t('addNew')}</ListItemText>
              </MenuItem>
            </Menu>
          </>
        )}
      </Box>

      <PersonAdvancedSearch
        advancedOpen={advancedOpen}
        setAdvancedOpen={(value) => setAdvancedOpen(value)}
        txtSearch={txtSearch}
        handleSearchStudent={handleSearchStudent}
      />

      <Box sx={{ marginBottom: '10px' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tabValue} onChange={handleTabChange} aria-label="basic tabs example">
            <Tab label={`${t('searchResult')} (${isSearch ? 0 : persons.length})`} {...a11yProps(0)} />
            <Tab label={t('recentStudents')} {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={tabValue} index={0}>
          {!isSearch && (
            <>
              {persons.length > 0 && (
                <Grid container>
                  {persons.map((person) => (
                    <PersonCard key={person.person_uid} person={person} />
                  ))}
                </Grid>
              )}
            </>
          )}
          {isSearch && (
            <CircularProgress
              color="secondary"
              size={80}
              disableShrink={true}
              sx={{
                display: 'flex',
                margin: '20vh auto',
              }}
            />
          )}
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <PersonRecents />
        </TabPanel>
      </Box>
    </>
  );
};

export default Persons;
