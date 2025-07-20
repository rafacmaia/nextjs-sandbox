import {Montserrat_Alternates} from "next/font/google";

const montserratAlt = Montserrat_Alternates({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    display: 'swap',
});

export default function Home() {
    return (
        <main
            className="flex flex-col-reverse items-center justify-between gap-8 px-6 py-12 mx-auto md:flex-row md:justify-evenly md:min-h-screen">
            <div className="flex-1 space-y-6 md:max-w-2/5">
                <p className="hidden text-sm font-medium text-gray-600 uppercase md:block">
                    The go-to place to find your perfect drink
                </p>
                <h1 className={`${montserratAlt.className} text-4xl font-bold md:text-5xl md:leading-snug`}>
                    Discover what's possible with
                    <br/>T Cocktails
                </h1>
                <p className="text-lg text-gray-600 md:text-xl">
                    Join our community of satisfied drinkers and explore a vast
                    library of custom concoctions.
                </p>

                <button
                    className="uppercase px-6 py-3 text-black transition
                            duration-100 bg-white border-2 border-black
                            hover:bg-black hover:text-white
                            cursor-pointer md:mt-10">
                    Browse Drinks
                </button>
            </div>

            <div
                className="overflow-hidden rounded-full w-full h-[580] md:h-[600] md:w-[35%]">
                <img className="h-full w-full object-cover"
                     src="/cocktails2.jpg" alt="Cocktail illustration."/>
            </div>

        </main>
    )
}