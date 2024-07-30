import { FC, ReactNode } from "react"

interface MenuProps {
  children: ReactNode
}
export const Menu: FC<MenuProps> = ({ children }) => {
  return (
    <nav className="text-xl flex p-4 bg-[#165ECA] justify-between text-white">
        <h1 className="text-2xl">Dealw</h1>
        {children}
    </nav>
  )
}
