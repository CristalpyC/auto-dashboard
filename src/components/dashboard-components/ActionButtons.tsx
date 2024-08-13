import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import toast from 'react-hot-toast';
import { deleteDocument } from '@/lib/firebase';
import Swal from 'sweetalert2'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';
import { useUser } from '@/hooks/useUser';

// Edit button
export const EditButton = ({ onClick }: { onClick: () => void}) => {
    return(
      <button 
        className="shadow-lg p-2 ease-in-out duration-150 hover:scale-95 bg-[#52D67F] hover:bg-[#25b053]"
        onClick={onClick}
        >
        <EditIcon />
      </button>
    );
}

// Delete button
export const DeleteButton = ({ productId }: { productId: string | undefined }) => {
  const userUid = useUser();
  
  let user: any;
  //data
  if (userUid){
    const data = localStorage.getItem(userUid);

    if (data){
      user = JSON.parse(data);
    }
  }
  
  // Delete car function
  const deleteCar = async ( productId: string | undefined ) => {
    const path = `users/${user?.uid}/products/${productId}`;

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3ab86b",
      cancelButtonColor: "#d94545",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your product has been deleted.",
          icon: "success",
          confirmButtonColor: "#3c79ba"
        }).then(async () => {
          try{
            await deleteDocument(path);
          } catch(error){
            toast.error("Couldn't delete de product", { duration: 2500 });
          }
        })
      }
    });
  }

  return (
    <button 
      className="shadow-lg p-2 ease-in-out duration-150 hover:scale-95 bg-[#E66464] hover:bg-[#bd4d4d]"
      onClick={() => deleteCar(productId)}
      >
      <DeleteIcon />
    </button>
  );
}
