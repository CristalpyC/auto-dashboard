import { FC } from "react";

interface TitleProps {
  title: string;
  message: string;
  spanMessage: string;
  linkTo: string;
}
export const Title: FC<TitleProps> = ({ title, message, spanMessage, linkTo}) => {
  return (
    <div className="mb-5">
        <h2 className="mb-5 text-3xl text-[#165ECA]">Dealw</h2>
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="font-bold mt-2">{message} <a className="text-[#165ECA] hover:border-b-[1px] border-blue-700" href={linkTo}>{spanMessage}</a></p>
    </div>
  )
}
