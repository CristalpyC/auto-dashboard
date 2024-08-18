"use client"
import { useState } from "react"

type UseModalReturnType = [boolean, () => void, () => void];

export const useModal = (initialState: boolean): UseModalReturnType => {
  const [open, setOpen] = useState(initialState);

  const handleOpen = () => { 
    setOpen(true)
  }
  const handleClose = () => { setOpen(false); }

  return [open, handleOpen, handleClose];
}
