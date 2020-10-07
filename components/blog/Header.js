export default function Header({ content }) {
    return (
        <div className="py-4 text-center">
            <h1 className="text-3xl font-black">{content.title}</h1>
            <small classname="font-thin">{content.date}</small>
        </div>
    )
}