import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

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

export const DeleteButton = ({ onClick }: { onClick: () => void}) => {
  <button 
    className="shadow-lg p-2 ease-in-out duration-150 hover:scale-95 bg-[#E66464] hover:bg-[#bd4d4d]"
    onClick={onClick}
    >
    <DeleteIcon />
  </button>
}
