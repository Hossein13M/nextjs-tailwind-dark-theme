import Image from "next/image";

export default function Header() {
  const imgSrc: string = "/black-github.png";
  function toggleThemeHandler(): void {
    console.log("toggleTheme");
  }

  return (
    <>
      <div className="flex justify-between bg-stone-200 dark:bg-sky-600 px-2 md:px-20 items-center backdrop-blur-sm w-full py-4">
        <div>
          <a
            className="flex items-center"
            href="https://github.com/hossein13m/nextjs-tailwind-dark-theme"
            target="blank"
          >
            <Image
              className=""
              src={imgSrc}
              alt="GitHub Logo"
              width={27}
              height={27}
            />
            <h1 className="text-black sm:text-2xl ml-2 dark:text-white">
              GitHub Repository
            </h1>
          </a>
        </div>
        <button
          type="button"
          className="py-1 sm:py-2.5 px-2 sm:px-5 mr-2 bg-zinc-800 text-white dark:bg-zinc-200 dark:text-black rounded"
          onClick={toggleThemeHandler}
        >
          Toggle Theme
        </button>
      </div>
    </>
  );
}
