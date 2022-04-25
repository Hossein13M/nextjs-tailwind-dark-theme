import Image from "next/image";

export default function Footer() {
  const imgSrc: string = "/black-portfolio.png";

  return (
    <>
      <div className="flex justify-center bg-stone-200 dark:bg-sky-600 px-2 md:px-20 items-center backdrop-blur-sm w-full py-4">
        <a
          className="flex items-center"
          href="https://hmousavi.dev"
          target="blank"
        >
          <Image
            className=""
            src={imgSrc}
            alt="GitHub Logo"
            width={50}
            height={50}
          />
          <h1 className="text-black sm:text-2xl ml-2 dark:text-white">
            Hossein Mousavi Portfolio
          </h1>
        </a>
      </div>
    </>
  );
}
