export function CafeFaq() {
  return (
    <div className="mx-auto font-sans">
      <div className="mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          Got questions about the Cafe?
        </h2>
      </div>

      <div className="mx-auto">
        <div className="hs-accordion-group">
          <div
            className="hs-accordion hs-accordion-active:bg-grey bg-opacity-25 rounded-xl p-6 active"
            id="hs-basic-with-title-and-arrow-stretched-heading-one"
          >
            <button
              className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-green"
              aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
            >
              I have allergies, can I still dine at the Sakura Cosplay Cafe?
              <svg
                className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-black group-hover:text-green"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
              <svg
                className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-black group-hover:text-green"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
            </button>
            <div
              id="hs-basic-with-title-and-arrow-stretched-collapse-one"
              className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
            >
              <p className="text-gray-800 dark:text-gray-200">
                We cannot guarantee an allergen-free environment at the Sakura
                Cosplay Cafe. We will provide a list of ingredients for each
                menu item, but it is ultimately up to your own discretion
                whether you choose to dine at our cafe.
              </p>
            </div>
          </div>

          <div
            className="hs-accordion hs-accordion-active:bg-grey bg-opacity-25 rounded-xl p-6"
            id="hs-basic-with-title-and-arrow-stretched-heading-two"
          >
            <button
              className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-green"
              aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
            >
              Can I reserve a seat at the Sakura Cosplay Cafe?
              <svg
                className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-black group-hover:text-green"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
              <svg
                className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-black group-hover:text-green"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
            </button>
            <div
              id="hs-basic-with-title-and-arrow-stretched-collapse-two"
              className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
            >
              <p className="text-gray-800 dark:text-gray-200">
                No. All seats are first come first serve at the Sakura Cosplay
                Cafe. We recommend arriving early to secure your cosplay dining
                experience at our cafe!
              </p>
            </div>
          </div>

          <div
            className="hs-accordion hs-accordion-active:bg-grey bg-opacity-25 rounded-xl p-6"
            id="hs-basic-with-title-and-arrow-stretched-heading-three"
          >
            <button
              className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-green"
              aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three"
            >
              What methods of payment do you accept at the Sakura Cosplay Cafe?
              <svg
                className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-black group-hover:text-green"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
              <svg
                className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-black group-hover:text-green"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
            </button>
            <div
              id="hs-basic-with-title-and-arrow-stretched-collapse-three"
              className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three"
            >
              <p className="text-gray-800 dark:text-gray-200">
                We accept card payments only.
              </p>
            </div>
          </div>

          <div
            className="hs-accordion hs-accordion-active:bg-grey bg-opacity-25 rounded-xl p-6"
            id="hs-basic-with-title-and-arrow-stretched-heading-four"
          >
            <button
              className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-green"
              aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four"
            >
              What time does the Sakura Cosplay Cafe run until?
              <svg
                className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-black group-hover:text-green"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
              <svg
                className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-black group-hover:text-green"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
            </button>
            <div
              id="hs-basic-with-title-and-arrow-stretched-collapse-four"
              className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four"
            >
              <p className="text-gray-800 dark:text-gray-200">
                The Sakura Cosplay Cafe will open at 1pm and be open until we
                run out of food. Food and drink is limited, so we recommend
                coming as early as possible to secure your favourite treat at
                the Sakura Cosplay Cafe!
              </p>
            </div>
          </div>

          <div
            className="hs-accordion hs-accordion-active:bg-grey bg-opacity-25 rounded-xl p-6"
            id="hs-basic-with-title-and-arrow-stretched-heading-five"
          >
            <button
              className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-green"
              aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five"
            >
              How many people can sit together at the Sakura Cosplay Cafe?
              <svg
                className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-black group-hover:text-green"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
              <svg
                className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-black group-hover:text-green"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
            </button>
            <div
              id="hs-basic-with-title-and-arrow-stretched-collapse-five"
              className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five"
            >
              <p className="text-gray-800 dark:text-gray-200">
                Our tables seat a maximum of 6, and a minimum of 2. If you want
                to come eat solo, please understand that you might get seated
                with other solos as seating space is limited in the cafe.
              </p>
            </div>
          </div>

          <div
            className="hs-accordion hs-accordion-active:bg-grey bg-opacity-25 rounded-xl p-6"
            id="hs-basic-with-title-and-arrow-stretched-heading-six"
          >
            <button
              className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-green"
              aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six"
            >
              What time does the Sakura Cosplay Cafe run until?
              <svg
                className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-black group-hover:text-green"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
              <svg
                className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-black group-hover:text-green"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
            </button>
            <div
              id="hs-basic-with-title-and-arrow-stretched-collapse-six"
              className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six"
            >
              <p className="text-gray-800 dark:text-gray-200">
                The Sakura Cosplay Cafe will open at 1pm and be open until we
                run out of food. Food and drink is limited, so we recommend
                coming as early as possible to secure your favourite treat at
                the Sakura Cosplay Cafe!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
