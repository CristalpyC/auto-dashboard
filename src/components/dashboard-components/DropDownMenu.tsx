// update user photo
import {
  LogOut,
  Settings,
  Upload,
  User,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Avatar from "@mui/material/Avatar";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { fileToBase64 } from "@/actions/convert-file-to-base64";
import toast from "react-hot-toast";
import { uploaderBase64 } from "@/lib/firebase";
import { getAuth, updateProfile } from "firebase/auth";

export function DropdownMenuDemo() {
    const [user, setUser] = useState<any>(null);
    
    useEffect(() => {
      const data = localStorage.getItem('userInfo');

      if (data){
        setUser(JSON.parse(data));
      }
    }, [])
    

    const router = useRouter();

    const logOut = () => {
        localStorage.removeItem('userInfo');
        router.push('/');
    }

    const chooseImage = async (e: any) => {
      const files = e.target.files[0];

      try{
        const auth = getAuth();
        const authUser = auth.currentUser;

        if (!authUser) {
          throw new Error("User is not authenticated");
        }

        const base64 = await fileToBase64(files);
        const imagePath = `${user?.uid}/profile`;
        const imageUrl = await uploaderBase64(imagePath, base64);

        // Update user info in db
        await updateProfile(authUser, {
          photoURL: imageUrl
        });

        const updatedUser = {...user, photoURL: imageUrl}

        // Update info in local storage by adding the photo url
        localStorage.setItem('userInfo', JSON.stringify(updatedUser));

        // Update state to trigger re-render
        setUser(updatedUser);

      } catch(error) {
        toast.error("Couldn't upload the photo", { duration: 2500 });
      }
    }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar
          alt="Remy Sharp"
          src={user?.photoURL ? user.photoURL : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhOaaBAY_yOcJXbL4jW0I_Y5sePbzagqN2aA&s'}
          sx={{
            width: 40,
            height: 40,
            transition: "ease-in-out",
            duration: "3s",
            "&:hover": {
              transform: "Scale(1.2)",
            },
          }}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 text-center">
        <DropdownMenuLabel>
          <input id="files" type="file" className="hidden" onChange={(e) => chooseImage(e)}/>
          <button className="bg-[#165ECA] p-2 rounded-3xl text-white hover:bg-[#165ecad3]"><label htmlFor="files"><Upload /></label></button>
        </DropdownMenuLabel>
        <DropdownMenuLabel>{user?.displayName}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <span onClick={logOut}>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
