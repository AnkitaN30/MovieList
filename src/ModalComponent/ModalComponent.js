import React from "react";
import {Modal,Box,Typography,Grid} from '@mui/material';
import {getModalState,getModalData,setModalState} from "../reducers/movieReducer";
import { useDispatch, useSelector } from "react-redux";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function ModalComponent(){
   const modalState = useSelector(getModalState);
   const modalData = useSelector(getModalData);
   const dispatch = useDispatch();

   const handleClose = ()=>{
    dispatch(setModalState(false))
   }
  
       return(
        <Modal open={modalState} onClose={handleClose}>
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                   Title: {!! modalData && modalData.title}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Synopsis: {!! modalData && modalData.synopsis}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Release Date : {!! modalData && modalData.releaseDate}
                </Typography>
            </Box>
        </Modal>    
    )
}

export default ModalComponent;