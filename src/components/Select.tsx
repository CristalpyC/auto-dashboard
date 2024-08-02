import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectScrollable() {
  return (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Models" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="est">New</SelectItem>
          <SelectItem value="cst">Used</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
