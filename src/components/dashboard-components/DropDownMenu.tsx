// update user photo
"use client"
import {
  ChartColumnBigIcon,
  LogOut,
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
import React, { useEffect } from "react";
import { fileToBase64 } from "@/actions/convert-file-to-base64";
import toast from "react-hot-toast";
import { uploaderBase64 } from "@/lib/firebase";
import { getAuth, updateProfile } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/redux/slices/user.slice";
import { StateProps } from "@/interfaces/state";
import { useUser } from "@/hooks/useUser";

export function DropdownMenuDemo() {
    const dispatch = useDispatch();
    const user = useSelector((state: StateProps ) => state.user);
    const userUid = useUser() || '';

    const auth = getAuth();
    const info = localStorage.getItem('carsInfo');

    useEffect(() => {
      if (userUid) {
        const data = localStorage.getItem(userUid);
        
        if (data) {
          dispatch(setUser(JSON.parse(data)));
        }
      }
    }, [userUid, dispatch]);
    
    
    const logOut = () => {
        localStorage.removeItem(userUid);
        if (info) {
          try {
            localStorage.removeItem('carsInfo');
            auth.signOut();

            } catch (error) {
              console.log('Error parsing JSON from localStorage:', error);
            }
        }
      }

    const chooseImage = async (e: any) => {
      const files = e.target.files[0];
      const authUser = auth.currentUser;

      try{
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
        localStorage.setItem(userUid, JSON.stringify(updatedUser));

        // Update state to trigger re-render
        dispatch(setUser(updatedUser));
      } catch(error) {
        console.log(error)
        toast.error("Couldn't upload the photo", { duration: 2500 });
      }
    }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar
          alt="Remy Sharp"
          src={
            user?.photoURL ? user.photoURL
            : 'unknown-user-avatar.png'
          }
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
          <a href={`${user?.displayName}/analytics`}>
            <DropdownMenuItem>
              <ChartColumnBigIcon className="mr-2 h-4 w-4" />
              Analytics
            </DropdownMenuItem>
          </a>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <a href="/"  onClick={logOut}>
          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            Log out
          </DropdownMenuItem>
        </a>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
