export default function Header() {
    return (
        <div className="flexbox justify-center items-center h-[20] border-t-4 border-stone-700 mt-4">
            <hr className="mt-1 border-1 border-stone-700"/>
            <h1 className="chonburi whitespace-nowrap font-bold uppercase text-center text-[clamp(1rem,11.5vw,8rem)]">Daily News</h1>
            <hr className="mb-1 border-1 border-stone-700"/>
        </div>
    )
}