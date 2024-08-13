import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; // Asegúrate de que estos imports son correctos

export function SelectScrollable() {
  // Estado para manejar el valor seleccionado
  const [selectedValue, setSelectedValue] = React.useState<string>('');

  const handleChange = (value: string) => {
    setSelectedValue(value);
    //console.log(`Selected: ${value}`);
  }


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
