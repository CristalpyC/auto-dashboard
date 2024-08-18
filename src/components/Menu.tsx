import { FC, ReactNode } from "react"

interface MenuProps {
  children: ReactNode
}
export const Menu: FC<MenuProps> = ({ children }) => {
  return (
    <header className="text-[5.5vmin] sm:text-[4vmin] md:text-xl lg:text-2xl flex p-4 bg-[#3b79d6] justify-between text-white sticky top-0 z-20">
        <h1 className="mt-2">Dealw</h1>
        {children}
    </header>
  )
}
