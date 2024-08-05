import { User } from "@/interfaces/user";
import { signIn } from "@/lib/firebase";
import toast from "react-hot-toast";

export const handleLogin = async (values: User, setLoadingStart: () => void, setLoadingEnd: () => void, setUser: (res: any) => void, router?: any) => {
    setLoadingStart();

    try{
      const res = await signIn(values);
      localStorage.setItem('userInfo', JSON.stringify(res));

      const data = localStorage.getItem('userInfo');

      if (data){
        const user = JSON.parse(data);
        toast.success(`Welcome ${user.displayName}!`, { duration: 2500 });
      }
      {router}
      
    } catch(error) {
      toast.error("Login failed. Please check your credentials and try again", { duration: 2500 });
    } finally {
        setLoadingEnd();
    }
  }