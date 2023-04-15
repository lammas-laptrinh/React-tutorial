import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import InboxIcon from '@mui/icons-material/Inbox';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function PaymentAdversityForm() {
    return (
        <Box sx={{ height: "100%", position: 'relative',borderRadius:'12px'}}>
            <Box sx={{ display: 'flex', height: '50%', backgroundColor: 'black', alignItems: 'center' }}>
                <Box sx={{ textAlign: 'center', ml: 5, mr: 5, fontSize: '30px', color: 'white', fontWeight: 'bold' }}>
                    Subcribe and start saving your money today
                </Box>
            </Box>
            <Box sx={{ height: '45%', backgroundColor: '#dbdbdb' }}>
                <List sx={{ pt: 4 }}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <FiberManualRecordIcon color="primary" fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="All features in basic include" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <FiberManualRecordIcon color="primary" fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="All features in basic include" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <FiberManualRecordIcon color="primary" fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="All features in basic include" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <FiberManualRecordIcon color="primary" fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="All features in basic include" />
                        </ListItemButton>
                    </ListItem>

                </List>
                <Box sx={{ textAlign: "center", height: "10%", width: '80%', backgroundColor: "white", position: 'absolute', top: '45%', left: '10%', borderRadius: '15px',display: 'flex', flexDirection: 'row' }}>
                    <Box sx={{ width: '18%', height: '80%', backgroundColor: 'red', borderRadius:'12px', m:1}}></Box>
                    <Box sx={{ m:1}}>
                        <Box sx={{textAlign:"left"}}>Professional Plan</Box>
                        <Box sx={{textAlign:"left", fontWeight:'bold'}}>96$/mounth</Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}