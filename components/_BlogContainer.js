import Link from 'next/link'

export default function Blog({post}) {
    const {
        link,
        module: {meta},
    } = post

    return (
        <div className="bg-magnolia py-4 px-6 rounded-md my-1">
            <h1 className="text-3xl font-black tracking-wider text-venetian-red">{meta.title}</h1>
            <small className="opacity-75 font-light italic">Posted on: <span className="font-bold">{meta.date}</span></small>
            <p className="mt-1 font-light tracking-wide text-sonic-silver truncate mb-2">{meta.description}</p>
            <Link href={`/blog` + link}>
                <a className="bg-rich-black rounded-md opacity-75 hover:opacity-100 transition-colors duration-500 font-light text-white tracking-wide py-1 px-4 text-sm">Read More</a>
            </Link>
        </div>
    )
}