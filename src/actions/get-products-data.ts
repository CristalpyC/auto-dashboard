import { getDocuments } from "@/lib/firebase";

//data
const data = localStorage.getItem('userInfo');
let user: any;

if (data){
  user = JSON.parse(data);
}

export const getProductData = async () => {
    const path = `users/${user?.uid}/products`;
    const res = await getDocuments(path);
    return res;
};