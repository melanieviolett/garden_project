import Image from 'next/image'

const FeaturesCard = ({ headText, circleColor, imgType, bodyText }) => {

  return (
    <div className="text-white px-6 text-center md:text-start my-8 md:my-0 w-1/3">
      <button className={`rounded-full ${circleColor} p-4 mx-auto md:mx-0 flex justify-center items-center mb-2 opacity-80`}>
        <Image
          src={imgType}
          alt="feature card icon"
          className='w-6 h-auto'
        />
      </button>

      <h2 className="font-bold lg:text-lg pb-4">
        {headText}
      </h2>
      <p className="text-sm lg:text-base text-gray-300">
        {bodyText}
      </p>
    </div>
  )
}

export default FeaturesCard