export default function Home() {
    return (
        <main
            className="flex flex-col-reverse items-center justify-between gap-8
                        px-6 py-12 mx-auto md:flex-row max-w-7xl">
            <div className="flex-1 space-y-6">
                <p className="hidden text-sm text-gray-600 uppercase md:block">
                    The go-to place to find your perfect drink
                </p>
                <h1 className="text-4xl font-bold mf:text-5xl">
                    Discover what's possible with T's Cocktails
                </h1>
                <p className="text-lg text-gray-600">
                    Join our community of satisfied drinkers and explore a vast
                    library of custom concoctions.
                </p>

                <div className="flex gap-4">
                    <button
                        className="uppercase px-6 py-3 text-black transition
                            duration-100 bg-white border-2 border-black
                            hover:bg-black hover:text-white
                            cursor-pointer">
                        Browse Drinks
                    </button>
                </div>
            </div>

            <img className="rounded-full" width={350}
                 src="/cocktails.jpg" alt="Cocktail"/>
        </main>
    )
}