import { User } from "@/interfaces/user";
import { signIn } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface handleLoginProps {
  values: User;
  setLoadingStart: () => void;
  setLoadingEnd: () => void;
  router?: ReturnType<typeof useRouter>;
}

export const handleLogin = async ({ values, setLoadingStart, setLoadingEnd, router }: handleLoginProps) => {
    try{
      setLoadingStart();
      const res = await signIn(values);
      const userKey = res.uid; // UID es único para cada usuario en Firebase
      
      localStorage.setItem(userKey, JSON.stringify(res));

      const data = localStorage.getItem(userKey);

      if (data){
        if (res.providerData.length !== 0){
          const user = JSON.parse(data);
          toast.success(`Welcome ${user.displayName}!`, { duration: 2500 });
          router?.push(`/${user?.displayName}`)
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