import {Montserrat_Alternates} from "next/font/google";
import {Martini, BottleWine, Wine} from 'lucide-react'

const montserratAlt = Montserrat_Alternates({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    display: 'swap',
});

export default function AboutPage() {
    return (
        <main className="flex flex-col items-center justify-between gap-8 px-6
                        py-12 mx-auto max-w-7xl text-lg md:gap-12">
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row
                            md:justify-around w-full">

                <img className="w-full md:max-w-3/7 aspect-square object-cover"
                     src="./absurd.png"
                     alt="Illustration of cat hugging liquor bottle."/>

                <div className="flex flex-col space-y-6 md:w-lg md:text-xl">
                    <p className="uppercase text-sm font-medium md:text-md md:block">
                        About T Cocktails
                    </p>
                    <h1 className={`${montserratAlt.className} text-4xl font-bold md:text-5xl`}>
                        Empowering drinkers worldwide
                    </h1>
                    <p>Born in 1983, Tristan Stevens, the shaking arms behind T
                        Cocktails, has been playing behind the bar since 1985
                        when he toppled two bottles from his
                        mother's stash, blessing the floor of their Montréal
                        apartment with his very first cocktail.</p>
                    <p>Since then, he has made it his mission to foster a
                        vibrant community where creativity meets alcohol,
                        giving tangible shape to dreamy concepts like Rosemary
                        Rubicon, and enabling anyone to feel alive through the
                        magic of cocktails.</p>
                    <p>You too, with the help of T Cocktails, can be the master
                        of your own pleasure.</p>
                </div>
            </div>

            <hr className="w-screen border-t border-gray-200"/>

            <div className="flex flex-col max-sm:space-y-9 text-base
                            md:flex-row md:px-10 md:gap-8 w-full">
                <div className="space-y-3 md:w-xs">
                    <h2 className={`${montserratAlt.className} text-2xl font-bold`}>
                        <Martini className="inline-block mr-1 text-gray-600
                                            -translate-y-[2px] "/>
                        40+ Creations
                    </h2>
                    <p className="">Access our vast selection of
                        concoctions, from shake-and-go
                        practical pours to shattering,<br/>fascism-toppling
                        tipples.</p>
                </div>
                <div
                    className="hidden md:block border-l border-gray-600 mx-4 h-auto">
                </div>
                <div className="space-y-3 md:w-xs">
                    <h2 className={`${montserratAlt.className} text-2xl font-bold`}>
                        <BottleWine className="inline-block mr-1 text-gray-600
                                            -translate-y-[2px] "/>
                        Active Community
                    </h2>
                    <p>Join dozens of happy drinkers who share tips, provide
                        feedback, and are brought together by T's life-changing
                        cocktails.</p>
                </div>
                <div
                    className="hidden md:block border-l border-gray-600 mx-4 h-auto">
                </div>
                <div className="space-y-3 md:w-xs">
                    <h2 className={`${montserratAlt.className} text-2xl font-bold`}>
                        <Wine className="inline-block mr-1 text-gray-600
                                            -translate-y-[2px] "/>
                        Free to Enjoy
                    </h2>
                    <p>Most mixes are free to be recreated, with optional
                        premium garnishes and techniques available for power
                        drinkers.</p>
                </div>
            </div>

            <hr className="w-screen border-t border-gray-200"/>

            <div className="flex flex-col space-y-6 md:text-xl md:w-2xl">
                <h1 className={`${montserratAlt.className} 
                                 text-4xl font-bold md:text-5xl`}>
                    Our Vision
                </h1>
                <p>At T Cocktails, we believe that customized drinking
                    experiences are revolutionizing the way we drink, feel, and
                    navigate this world. Our platform serves as a bridge
                    between T's brain and drinkers worldwide, enabling the
                    sharing of spirits and creativity that pushes the
                    boundaries of what's possible with a shaker.</p>

                <hr className="mx-auto border-black w-2/3"/>

                <p>Whether you're an amateur looking for inspiration, a
                    househusband our housewife seeking meaningful escape, or a
                    professional drinker wanting to elevate your vice, T
                    Cocktails provides the bespoke expertise and community to
                    support your journey towards more fulfilling, personalized
                    drinks.</p>
            </div>
        </main>
    )
}