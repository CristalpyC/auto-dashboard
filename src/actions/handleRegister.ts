import { User } from "@/interfaces/user";
import { registerUser } from "@/lib/firebase";
import toast from "react-hot-toast";

export const handleRegister = async (values: User, setLoadingStart: () => void, setLoadingEnd: () => void) => {
    setLoadingStart();

    try {
      await registerUser(values);
      toast.success("Register sucessful", { duration: 2500 });

    } catch (error: any) {

      if (error.message === "Firebase: Error (auth/email-already-in-use)."){
        toast.error("This user already exist", {
            duration: 2500,
        });

      } else {

        toast.error("Registration failed. Please try again or check your details", {
            duration: 2500,
        });
      }
    } finally{
        setLoadingEnd();
    }
  };