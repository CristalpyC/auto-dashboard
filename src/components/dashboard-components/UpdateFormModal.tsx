"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useModal } from '@/hooks/useModal';
import { UpdateProductForm } from '../forms/UpdateProductForm';
import { EditButton } from './ActionButtons';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

interface UpdateModal {
  values?: any;
  onClick?: () => void;
}

export default function UpdateModal({ values }: UpdateModal) {
    const [open, handleOpen, handleClose] = useModal(false);
    
    return (
    <div>
      <EditButton onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: '70%', border:'none', padding:5 }}>
          <UpdateProductForm closeModal={handleClose} itemToUpdate={values} />
        </Box>
      </Modal>
    </div>
  );
}
