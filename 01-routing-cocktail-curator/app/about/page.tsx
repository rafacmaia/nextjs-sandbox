import { Martini, BottleWine, Wine } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="- mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-6 py-10 pb-12 text-lg md:gap-12">
      <div className="flex w-full flex-col max-lg:items-center max-lg:space-y-4 lg:flex-row lg:justify-around">
        <img
          className="aspect-square w-full object-cover md:max-w-lg lg:max-w-3/7"
          src="./absurd.png"
          alt="Illustration of a martini glass and a bottle."
        />

        <div className="flex flex-col space-y-6 md:w-lg md:text-xl">
          <p className="md:text-md text-tertiary text-sm font-medium uppercase md:block">
            About T Cocktails
          </p>
          <h1 className="font-header text-4xl font-bold md:text-5xl">
            Empowering drinkers worldwide
          </h1>
          <p className="text-muted">
            Born in 1983, Tristan Stevens, the shaking arms behind T Cocktails,
            has been playing behind the bar since 1985 when he toppled two
            bottles from his mother's stash, blessing the floor of their
            Montréal apartment with his very first cocktail.
          </p>
          <p className="text-muted">
            Since then, he has made it his mission to foster a vibrant community
            where creativity meets alcohol, giving tangible shape to dreamy
            concepts like Rosemary Rubicon, and enabling anyone to feel alive
            through the magic of cocktails.
          </p>
          <p className="text-muted">
            You too, with the help of T Cocktails, can be the master of your own
            pleasure.
          </p>
        </div>
      </div>

      <hr className="w-screen border-t border-gray-200" />

      <div className="flex w-full flex-col text-base max-md:space-y-9 md:flex-row md:gap-8 md:px-10">
        <article className="space-y-3 md:w-xs">
          <h2 className="font-header text-2xl font-bold">
            <Martini className="text-tertiary mr-1 inline-block -translate-y-[2px]" />
            40+ Creations
          </h2>
          <p className="text-tertiary">
            Access our vast selection of concoctions, from shake-and-go
            practical pours to shattering,
            <br />
            fascism-toppling tipples.
          </p>
        </article>
        <div className="border-tertiary mx-4 hidden h-auto border-l md:block"></div>
        <article className="space-y-3 md:w-xs">
          <h2 className="font-header text-2xl font-bold">
            <BottleWine className="text-tertiary mr-1 inline-block -translate-y-[2px]" />
            Active Community
          </h2>
          <p className="text-tertiary">
            Join dozens of happy drinkers who share tips, provide feedback, and
            are brought together by T's life-changing cocktails.
          </p>
        </article>
        <div className="border-tertiary mx-4 hidden h-auto border-l md:block"></div>
        <article className="space-y-3 md:w-xs">
          <h2 className="font-header text-2xl font-bold">
            <Wine className="text-tertiary mr-1 inline-block -translate-y-[2px]" />
            Free to Enjoy
          </h2>
          <p className="text-tertiary">
            Most mixes are free to be recreated, with optional premium garnishes
            and techniques available for power drinkers.
          </p>
        </article>
      </div>

      <hr className="w-screen border-t border-gray-200" />

      <div className="flex flex-col space-y-6 md:w-2xl md:text-xl">
        <h1 className="font-header text-4xl font-bold md:text-5xl">
          Our Vision
        </h1>
        <p className="text-muted">
          At T Cocktails, we believe that customized drinking experiences are
          revolutionizing the way we drink, feel, and navigate this world. Our
          platform serves as a bridge between T's brain and drinkers worldwide,
          enabling the sharing of spirits and creativity that pushes the
          boundaries of what's possible with a shaker.
        </p>

        <hr className="border-primary mx-auto w-2/3" />

        <p className="text-muted">
          Whether you're an amateur looking for inspiration, a househusband,
          housewife, or housethey seeking meaningful escape, or a professional
          drinker wanting to elevate your vice, T Cocktails provides the bespoke
          expertise and community to support your journey towards more
          fulfilling, personalized drinks.
        </p>
      </div>
    </main>
  );
}
