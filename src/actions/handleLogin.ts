import { User } from "@/interfaces/user";
import { signIn } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const handleLogin = async (values: User, setLoadingStart: () => void, setLoadingEnd: () => void, router: any) => {
    setLoadingStart();
    try{
      const res = await signIn(values);
      console.log(res)
      toast.success("Login sucessful", { duration: 2500 });
      {router}
    } catch(error) {
      toast.error("Login failed. Please check your credentials and try again", { duration: 2500 });
    } finally {
        setLoadingEnd();
    }
  }