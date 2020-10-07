const today = new Date() // for using the current year in the footer or other purposes

export default function Footer() {
    return (
        <div className="py-4 w-full text-white text-center">
            <p className="font-light text-sm tracking-wider">Creep | TheBoringDude &copy; {today.getFullYear()}</p>
        </div>
    )
}