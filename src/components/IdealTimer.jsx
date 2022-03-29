import React, { useRef , Fragment, useState, useCallback } from 'react';
import IdleTimer from 'react-idle-timer';
import {Modal,Box,Typography, IconButton,Button} from '@material-ui/core';
import PropTypes from "prop-types";

import AvTimerOutlinedIcon from '@material-ui/icons/HistoryOutlined';
import { userLogout } from '../context/actions/authActions';
import { useHistory } from 'react-router';
import { revokeToken } from '../services/auth';

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius:".5em",
    textAlign: 'center',
    borderColor:"transparent",
    boxShadow: 24,
    padding:"10px",
    "&:focus":{
        outline: "none",
       }
  };
const IdealTimer = ({dispatchAuthActions}) => {

    const history = useHistory();
    const [open, setOpen] = useState(false);
    const idleTimerRef = useRef(null);

    const handleOnIdle = () => {
        console.log('User is Idle')
        setOpen(true)
    };

   
    const handleLogout = useCallback(async() => {
        try{           
            const user = JSON.parse(localStorage.getItem("user"));
            const response = await revokeToken(user.token);  
            console.log(response.data);
            setOpen(false);
            dispatchAuthActions(userLogout());
            history.push("/signin", {
           message: "Logout.Success",
           from: "logout",
           type: "success",
         });
        }
        catch(error){
            throw error;
        }    
    },
        [dispatchAuthActions,history]
    )

  return (
   <Fragment>
       <Modal open={open} 
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description">
        <Box sx={style}>
            <IconButton style={{ padding:"3px"}}>
                 <AvTimerOutlinedIcon color='error' style={{fontSize:"3.2rem",padding:"3px"}} />
            </IconButton>
            <Typography id="modal-modal-title"  variant='h6' >Whoops, Your session has expired</Typography>
            <Typography id="modal-modal-description"  component="p" variant="body2">
              Your session has expired due to your inactivity.No worry simply login again.
            </Typography>
            <Button style={{margin:"0.8em", backgroundColor:"#0086b3",color:"white"}} onClick={handleLogout}>LogOut</Button>
        </Box>
       </Modal>
       <IdleTimer ref={idleTimerRef} timeout={650 * 1000} onIdle={handleOnIdle}/>     
   </Fragment>
  )
}

IdealTimer.propTypes = {
    dispatchAuthActions: PropTypes.func.isRequired
  };
  

export default React.memo(IdealTimer);