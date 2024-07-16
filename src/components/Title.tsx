import Link from "next/link"

export const Title = () => {
  return (
    <div className="mb-5">
        <h2 className="mb-5 text-3xl text-[#165ECA]">Dealw</h2>
        <h1 className="text-4xl font-bold">Login</h1>
        <p className="font-bold mt-2">{"You don’t have an account? "} <Link className="text-[#165ECA] hover:border-b-[1px] border-blue-700" href="/">Register</Link></p>
    </div>
  )
}
