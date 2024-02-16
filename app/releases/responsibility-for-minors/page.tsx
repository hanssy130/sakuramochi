"use client";

export default function ResponsibilityMinors() {
  return (
    <main>
      <div className="relative flex flex-col w-full min-h-dvl items-center p-24 text-black text-balance">
        <div
          data-aos="fade-up"
          className="relative flex flex-row lg:w-2/3 justify-between"
        >
          <div className="flex flex-col z-40 lg:items-start justify-items-center gap-2 p-0">
            <p className="font-display-en uppercase text-black text-9xl">
              Responsibility for Minors
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="w-2/3 font-sans font-medium text-lg flex flex-col gap-4"
        >
          <p>
            In consideration of the minor attendee (the “Minor”) being permitted
            to participate in the Event, I, the undersigned represent and affirm
            that I am the parent or legal guardian of the Minor and that I have
            the authority to enter into this agreement on the Minor’s behalf. I
            understand and agree that the above terms and conditions apply to
            the Minor and to me.
          </p>
          <p>
            I further agree to indemnify and hold harmless UBC Anime and the
            Pop-Up Hanami team from any and all claims that are brought by, or
            on behalf of, the Minor, and which are in any way connected with the
            Minor’s participation in the Event. I represent and warrant that I
            am over 18 years old and I am mentally competent.
          </p>
        </div>
      </div>
    </main>
  );
}
