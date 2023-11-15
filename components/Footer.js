const Footer = ({ backgroundColor }) => {
  return (
    <>
      <section className={`${backgroundColor} h-1/6 py-12 w-full bottom-0 flex flex-col justify-center items-center text-sm md:text-base text-coral`}>

        <button className="h-1 w-5/6 bg-coral flex justify-center items-center my-4">
        </button>

        <p>Footer</p>
      </section>
    </>
  )
}
export default Footer