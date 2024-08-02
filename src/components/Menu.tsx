import { FC, ReactNode } from "react"

interface MenuProps {
  children: ReactNode
}
export const Menu: FC<MenuProps> = ({ children }) => {
  return (
    <nav className="text-2xl flex p-4 bg-[#165ECA] justify-between text-white">
        <h1>Dealw</h1>
        {children}
    </nav>
  )
}
