'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useModal } from '@/hooks/useModal';
import { AddProductButton } from './BasicComponents';
import { AddProductForm } from '../forms/AddProductForm';

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

export default function AddFormModal() {
    const [open, handleOpen, handleClose] = useModal(false);

    return (
    <div>
      <AddProductButton onClick={handleOpen}/>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: '70%', border:'none', padding:5 }}>
          <AddProductForm closeModal={handleClose}/>
        </Box>
      </Modal>
    </div>
  );
}
