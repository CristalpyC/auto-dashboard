import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export const ActionButtons = () => {
  return (
    <div className='flex gap-2 justify-end text-white'>
        <button className="shadow-lg p-2 ease-in-out duration-150 hover:scale-95 bg-[#52D67F] hover:bg-[#25b053]">
            <EditIcon />
        </button>
        <button className="shadow-lg p-2 ease-in-out duration-150 hover:scale-95 bg-[#E66464] hover:bg-[#bd4d4d]">
            <DeleteIcon />
        </button>
    </div>
  )
}
