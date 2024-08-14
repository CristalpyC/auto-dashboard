import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; 
import { getDocumentsByStatus } from "@/lib/firebase";
import { useUser } from "@/hooks/useUser";
import { useDispatch, useSelector } from "react-redux";
import { StateProps } from "@/interfaces/state";
import { setData } from "@/redux/slices/data.slice";

export function SelectScrollable() {
  const userUid = useUser();
  const dispatch = useDispatch();
  const carsData = useSelector((state: StateProps) => state.carsData)

  const handleChange = async (value: string) => {
    try {
      if (userUid) {
        const path = `users/${userUid}/products`;
        const data = await getDocumentsByStatus(path, value);
        
        data.map(item => {
          delete item.id;
          delete item.createdAt;
          return item;
        });
  
        console.log("Data fetched and processed:", data);
        dispatch(setData(data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Models" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="new">New</SelectItem>
          <SelectItem value="used">Used</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
