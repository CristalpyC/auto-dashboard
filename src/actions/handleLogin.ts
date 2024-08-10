import { User } from "@/interfaces/user";
import { signIn } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface handleLoginProps {
  values: User;
  setLoadingStart: () => void;
  setLoadingEnd: () => void;
  setUser: (res: any) => void;
  router?: ReturnType<typeof useRouter>;
}

export const handleLogin = async ({ values, setLoadingStart, setLoadingEnd, setUser, router }: handleLoginProps) => {
    setLoadingStart();

    try{
      const res = await signIn(values);
      localStorage.setItem('userInfo', JSON.stringify(res));
      const data = localStorage.getItem('userInfo');

      if (data){
        //console.log(res.providerData)
        if (res.providerData.length !== 0){
          const user = JSON.parse(data);
          toast.success(`Welcome ${user.displayName}!`, { duration: 2500 });
          router?.push(`/${user?.displayName}`)
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