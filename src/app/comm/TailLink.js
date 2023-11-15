import Link from "next/link"
export default function TailLink({href, title}) {
    return (
        <Link href={href} className="bg-slate-100" p-2 m-2 rounded-lg>{title}</Link>
    );
}