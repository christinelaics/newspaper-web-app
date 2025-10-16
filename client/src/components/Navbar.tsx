
interface NavbarProps {
    categories: string[],
    onSelectCategory: (category: string) => void
}
export default function Navbar({categories, onSelectCategory}: NavbarProps) {
    return (
        <nav className="mb-4 mx-auto">
            {categories.map((category) => (
                <button
                key={category}
                onClick={() => onSelectCategory(category)}
                >{category}</button>
            ))}
        </nav>
    )
}