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
import { useDispatch } from "react-redux";
import { StateProps } from "@/interfaces/state";
import { AppDispatch } from "@/redux/store";
import { setStatus } from "@/redux/slices/status.slice";

export function SelectScrollable() {
  const userUid = useUser();
  const dispatch: AppDispatch = useDispatch();

  const handleChange = async (value: string) => {
    dispatch(setStatus(value));
  };

  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger className="w-[50vw] mr-3  md:w-[280px] lg:w-[280px]">
        <SelectValue placeholder="Models" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="new">New</SelectItem>
          <SelectItem value="used">Used</SelectItem>
          <SelectItem value="all">All</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
