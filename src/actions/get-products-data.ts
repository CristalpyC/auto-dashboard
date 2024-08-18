import { getDocuments } from "@/lib/firebase";

export const getProductData = async (uid: string | null) => {
    const path = `users/${uid}/products`;
    const res = await getDocuments(path);
    return res;
};