import plantsImg from '/public/pexels-karolina-grabowska-4750343.jpg'
import Image from "next/image";
import Card from './components/Card';
import SearchBar from './components/SearchBar';


export async function getPlants(searchParams) {
    if (searchParams.q) {
        const response = await fetch(process.env.ALL_PLANTS_API + `&q=${searchParams.q}`, {})
        return response.json()
    }
    else {
        const response = await fetch(process.env.ALL_PLANTS_API, {})
        return response.json()
    }
}

export default async function Page({ searchParams }) {
    const { data } = await getPlants(searchParams);

    const searchPlant = (common, scientific) => {
        if (searchParams.q) {
            return common.toLowerCase().includes(searchParams.q.toLowerCase()) || scientific.some(i => i.toLowerCase().includes(searchParams.q.toLowerCase()));
        }
        return true;
    }

    return (
        <>
            <section className="bg-deep-green">
                <section className="flex flex-row justify-around items-center mb-12">
                    <Image
                        src={plantsImg}
                        alt="plants image"
                        className="w-1/4 h-auto"
                    />

                    <div className="flex flex-col items-center w-3/5 text-center">

                        <h2 className="text-[#E0AFA5] font-bold text-4xl py-4">
                            Find the Best Plants to Start Growing Next!
                        </h2>

                        <p className="text-sm md:text-base text-[#E0AFA5]/70 font-semibold">
                            Filter by as many
                            options as possible to get the best results for you (and your plants).
                            Click "Learn More" on your card result to learn all the inside tips on how to
                            care for your new plant. Happy Gardening!
                        </p>
                    </div>

                </section>
                <SearchBar></SearchBar>
                <section className="flex flex-wrap gap-10 justify-around items-center">
                    {
                        data?.map((d) => {
                            if (!d.cycle.includes('Upgrade') && searchPlant(d.common_name, d.scientific_name))
                                return (
                                    <Card d={d} />
                                )
                        })
                    }
                </section>

            </section>
        </>
    )
}