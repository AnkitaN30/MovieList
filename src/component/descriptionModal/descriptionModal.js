import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';
import { useSelector } from 'react-redux';
import { getModalState, getModalData } from '../../reducers/movieReducer';
import { setModalState } from '../../actions/movieActions';
import { useDispatch } from 'react-redux';
import "./descriptionModal.scss";

export default function DescriptionModal() {
  const modalState = useSelector(getModalState);
  const modalData = useSelector(getModalData);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setModalState(false));
  }

  return (
    <Modal open={modalState} onClose={handleClose}>
      <Box className='modal-wrapper'>
        <Box sx={{display:"flex",flexDirection:"row-reverse"}} onClick={handleClose} data-testid="modal-close">
              <CloseIcon/>
        </Box>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Title: {!!modalData && modalData.title}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Synopsis: {!!modalData && modalData.synopsis}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Release Date : {!!modalData && modalData.releaseDate}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Rank : {!!modalData && modalData.rank}
        </Typography>
      </Box>
    </Modal>
  );
}
