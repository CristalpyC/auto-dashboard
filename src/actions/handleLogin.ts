import { User } from "@/interfaces/user";
import { signIn } from "@/lib/firebase";
import toast from "react-hot-toast";

interface handleLoginProps {
  values: User;
  setLoadingStart: () => void;
  setLoadingEnd: () => void;
}

export const handleLogin = async ({ values, setLoadingStart, setLoadingEnd }: handleLoginProps) => {
    try{
      setLoadingStart();
      const res = await signIn(values);
      const userKey = res.uid; // Unique user uid
      
      localStorage.setItem(userKey, JSON.stringify(res));

      const data = localStorage.getItem(userKey);

      if (data){
        if (res.providerData.length !== 0){
          const user = JSON.parse(data);
          toast.success(`Welcome ${user.displayName}!`, { duration: 2500 });
          window.location.href = `/${user?.displayName}`
          setLoadingEnd();
          
        } else {
          return;
        }
      }
    } catch(error) {
      toast.error("Login failed. Please check your credentials and try again", { duration: 2500 });
      
    } finally {
      setLoadingEnd();
    }
  }