"use client";

export default function Liability() {
  return (
    <main>
      <div className="relative flex flex-col w-full min-h-dvl items-center p-10 pb-24 text-black text-pretty">
        <div
          data-aos="fade-up"
          className="relative flex flex-row lg:w-2/3 justify-between"
        >
          <div className="flex flex-col z-40 lg:items-start justify-items-center gap-2 p-0">
            <p className="font-display-en uppercase text-black text-8xl mb-6 md:text-9xl md:text-nowrap">
              Liability Release
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="lg:w-2/3 font-sans font-medium md:text-lg flex flex-col gap-4"
        >
          <p>
            This section outlines a release of liability for the UBC Anime Club
            and Pop-Up Hanami staff and volunteers from all liability relating
            to injuries and or lost or damaged property that may occur during
            March 23rd, 2024 within the premises of Pop-Up Hanami. By entering
            Pop-Up Hanami, I agree to hold the UBC Anime Club and the Pop-Up
            Hanami staff and volunteers free from any liability, including
            financial responsibility for injuries incurred, and property lost or
            damaged regardless of whether such is caused by negligence and loss
            of possessions. I also acknowledge that my participation in any
            activity at the Event is voluntary. I further understand that some
            activities at the Event, such as but not limited to dancing or
            role-playing, have inherent risks and dangers, including but not
            limited to loss or injury to my person or property, and that as a
            condition of being permitted to participate in any activity at the
            Event, I must assume and accept all risks of harm, loss, or injury
            that may arise from or be related to participation in that activity.
            I hereby waive and release, indemnify and hold harmless the UBC
            Anime Club, Pop-Up Hanami planning committee, the volunteers,
            sponsors, performers, attendees and affiliates. Additionally, I do
            not have any conditions that will increase my likelihood of
            experiencing injuries while engaging in any activity.
          </p>
          <p>
            In the event of any injury or illness to me during my participation,
            I authorize the staff of Pop-Up Hanami or the security team to seek
            and obtain such emergency or medical services as may be deemed
            necessary at the time, but understand and agree that they shall not
            be obligated to do so.
          </p>
          <p>
            I further acknowledge that{" "}
            <span className="font-semibold">
              I may be subject to being filmed or photographed at any time
              during the Event
            </span>{" "}
            and hereby release the UBC Anime Club, Pop-Up Hanami and its legal
            representatives for all claims and liability relating to said images
            or video. Furthermore, I grant permission to the above-mentioned
            parties the right to use photographs and/or video images taken of
            me, or members of my family, for the purpose of publication,
            promotion and advertising, in any manner or in any medium.
          </p>
          <p>Final Notice:</p>
          <p>
            <span className="font-semibold">
              By entering the premises of this event and purchasing access
            </span>{" "}
            I have read the above statements and hereby forfeit all right to
            bring a suit against the UBC Anime Club and any persons affiliated
            with Pop-Up Hanami for any reason. In return, I will receive the
            right to participate as an attendee in this Event. I will also make
            an effort to obey every safety precaution listed either in writing
            or verbally. I will ask for clarification when needed.
          </p>
        </div>
      </div>
    </main>
  );
}
