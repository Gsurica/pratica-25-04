import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

interface SwipeableTemporaryDrawerTypes {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SwipeableTemporaryDrawer: React.FC<SwipeableTemporaryDrawerTypes> = ({ isOpen, setIsOpen }) => {

  const list = () => (
    <Box
      role="presentation"
      onClick={() => {}}
      onKeyDown={() => {}}
    >
      <List>
        <Box sx={{
          display: 'flex',
          justifyContent: 'end',
          padding: '8px'
        }}>
          <IconButton onClick={() => setIsOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <>
        <SwipeableDrawer
          anchor={'left'}
          open={isOpen}
          onClose={() => {}}
          onOpen={() => {}}
        >
          { list() } 
        </SwipeableDrawer>
      </>
    </div>
  );
}

export { SwipeableTemporaryDrawer }