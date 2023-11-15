'use client';
import Image from "next/image"
import { GrPowerCycle } from 'react-icons/gr'
import { IoWaterOutline, IoSunnyOutline } from 'react-icons/io5'
import flower from '/public/flowerImg.png'
import Link from "next/link";

function Sunlight({ d }) {
    if (d.sunlight) {
        return <p className="font-medium">

            Sunlight:
            {' ' + d.sunlight.filter((item) => {
                return (item.length > 1)
            }
            ).join(", ")}

        </p>
    }
    else {
        return <></>
    }
}

const Card = ({ d }) => {
    return (
        <div key={d.id} className="w-72 min-h-[16rem] p-4 rounded-lg shadow bg-[#E0AFA5]/80 flex flex-col items-center">
            <div className=" w-full flex items-center mb-5">

                <Image
                    src={(d.default_image?.original_url || flower)}
                    alt="image"
                    className=" rounded-md w-20 h-20 mr-5"
                    width={112}
                    height={112}
                />

                <h5 className="text-lg font-bold text-deep-green">{d.common_name}</h5>

            </div>


            <div className="w-full mb-5">
                <div className="font-normal text-deep-green/70 flex items-center">
                    <GrPowerCycle className="mr-1" />
                    <p className="font-medium">Cycle: {' ' + d.cycle}</p>
                </div>

                <div className="font-normal text-deep-green/70 flex items-center">
                    <IoWaterOutline className="mr-1" />
                    <p className="font-medium">
                        Watering:

                        {' ' + d.watering}
                    </p>
                </div>

                <div className="font-normal text-deep-green/70 flex items-center">
                    <IoSunnyOutline className="mr-1" />
                    <Sunlight d={d} />
                </div>

            </div>

            <button className="bg-coral font-medium rounded-lg w-3/4 text-md py-1 hover:bg-coral/80">
                <Link href="/learn">See more...</Link>
            </button>

        </div>
    )
}

export default Card