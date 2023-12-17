import Link from "next/link"

const Button = ({children,link, disabled}) => {
  return (
    <button className="px-7 py-3 rounded-full bg-primary hover:bg-primary/80 border-8 border-foreground text-2xl font-bold tracking-widest shadow">
        {!disabled? <Link href={link}>{children}</Link> : ''}
    </button>
  )
}

export default Button