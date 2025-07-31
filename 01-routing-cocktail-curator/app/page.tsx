export default function Home() {
  return (
    <main className="mx-auto flex flex-col-reverse items-center gap-6 px-6 py-6 sm:grow sm:flex-row sm:justify-around sm:px-8 lg:justify-evenly">
      <div className="space-y-6 sm:max-w-3/7">
        <p className="text-tertiary hidden text-sm font-medium uppercase md:block">
          The go-to place to find your perfect drink
        </p>
        <h1 className="font-header text-4xl font-bold sm:text-[2.5rem] sm:leading-snug md:text-5xl">
          Discover what's possible with{" "}
          <span className="whitespace-nowrap">T Cocktails</span>
        </h1>
        <p className="text-tertiary text-lg md:text-xl">
          Join our community of satisfied drinkers and explore a vast library of
          custom concoctions.
        </p>

        <button className="hover:bg-primary border-primary bg-secondary text-primary hover:text-secondary cursor-pointer border-2 px-6 py-3 uppercase transition duration-100 sm:mt-6 md:mt-10">
          Browse Drinks
        </button>
      </div>

      <div className="h-[54vh] w-full overflow-hidden rounded-full sm:h-[600] sm:w-[40%] lg:w-[35%]">
        <img
          className="h-full w-full object-cover"
          src="/cocktails2.jpg"
          alt="Stylish cocktail, with olive and herb garnish, on a wodden counter."
        />
      </div>
    </main>
  );
}
