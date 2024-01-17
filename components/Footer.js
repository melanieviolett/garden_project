import Link from "next/link";
const Footer = ({ backgroundColor }) => {
  return (
    <>
      <section
        className={`${backgroundColor} h-1/6 py-12 w-full bottom-0 flex flex-col justify-center items-center text-sm md:text-base`}
      >
        <button className="h-1 w-5/6 bg-coral flex justify-center items-center my-4"></button>

        <div className="flex flex-row w-full justify-around">
          <p className="text-white">
            Check out my{" "}
            <Link
              className="font-extrabold text-[#E0AFA5] underline hover:text-[#E0AFA5]/80 decoration-wavy"
              href="https://github.com/melanieviolett"
            >
              GitHub!
            </Link>
          </p>
          <Link
            className="text-[#E0AFA5] font-bold underline hover:text-[#E0AFA5]/80 decoration-wavy"
            href="/disclaimer"
          >
            Disclaimer
          </Link>
        </div>
      </section>
    </>
  );
};
export default Footer;
