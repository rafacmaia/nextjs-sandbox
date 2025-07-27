export default function Home() {
  return (
    <main className="mx-auto flex flex-col-reverse items-center justify-between gap-8 px-6 py-12 md:min-h-screen md:flex-row md:justify-evenly md:gap-4">
      <div className="flex-1 space-y-6 md:max-w-2/5">
        <p className="hidden text-sm font-medium text-gray-600 uppercase md:block">
          The go-to place to find your perfect drink
        </p>
        <h1 className="font-mont-alt text-4xl font-bold md:text-5xl md:leading-snug">
          Discover what's possible with{" "}
          <span className="whitespace-nowrap">T Cocktails</span>
        </h1>
        <p className="text-lg text-gray-600 md:text-xl">
          Join our community of satisfied drinkers and explore a vast library of
          custom concoctions.
        </p>

        <button className="cursor-pointer border-2 border-black bg-white px-6 py-3 text-black uppercase transition duration-100 hover:bg-black hover:text-white md:mt-10">
          Browse Drinks
        </button>
      </div>

      <div className="h-[580] w-full overflow-hidden rounded-full md:h-[600] md:w-[40%] lg:w-[35%]">
        <img
          className="h-full w-full object-cover"
          src="/cocktails2.jpg"
          alt="Stylish cocktail with olives and herb garnish."
        />
      </div>
    </main>
  );
}
