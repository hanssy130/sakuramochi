"use client";

export default function Food() {
  return (
    <main>
      <div className="relative flex flex-col w-full min-h-dvl items-center p-24 text-black text-balance">
        <div
          data-aos="fade-up"
          className="relative flex flex-row lg:w-2/3 justify-between"
        >
          <div className="flex flex-col z-40 lg:items-start justify-items-center gap-2 p-0">
            <p className="font-display-en uppercase text-black text-9xl">
              Food and Allergens
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="lg:w-2/3 font-sans font-medium text-lg flex flex-col gap-4"
        >
          <p>
            Although the Pop-Up Hanami will, to the best of our ability, provide
            an ingredients list for all food and drink items served at the
            Sakura Cosplay Cafe, UBC Anime and the Pop-Up Hanami team cannot
            guarantee there is no cross contamination between food items, or
            that allergens not listed in the ingredients list are not present in
            and/or around the food and drink items and the facilities they were
            produced and prepared in.
          </p>
          <p className="font-bold">
            I UNDERSTAND THAT IT IS MY FULL RESPONSIBILITY TO ALERT MY SERVER
            AND EVENT STAFF OF ANY ALLERGIES I MAY HAVE, AND THAT DINING AT THE
            SAKURA COSPLAY CAFE IS BY MY OWN CHOICE.
          </p>
          <p>
            By purchasing a ticket to the Pop-Up Hanami and dining at the Sakura
            Cosplay Cafe, I hereby agree to hold UBC Anime and the Pop-Up Hanami
            team free from any liability for allergic reactions, and/or other
            related illnesses.
          </p>
        </div>
      </div>
    </main>
  );
}
