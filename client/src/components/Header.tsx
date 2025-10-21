export default function Header() {
  return (
    <div className="flexbox justify-center items-center h-[20%] border-t-4 border-stone-700 mt-4">
      <hr className="mt-1 border-1 border-stone-700" />
      <a href="/">
        <h1 className="unifrak whitespace-nowrap font-bold text-center text-[clamp(1rem,7.5vw,7rem)]">
          The Daily Newsletter
        </h1>
      </a>
      <hr className="mb-1 border-1 border-stone-700" />
    </div>
  );
}
