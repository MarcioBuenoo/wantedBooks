import Sidebar from "../ui/Sidebar";

export default function Header() {
    return (
        <header>
            <a href="#">
                WantedBooks
            </a>
            <Sidebar isOpen={false} onClose={() => {}} />
        </header>
    )
}