import {
  EmailOutlined,
  EmailRounded,
  Instagram,
  Twitter,
} from "@mui/icons-material";

export function Footer() {
  return (
    <footer className="bg-black font-sans text-white text-lg w-full">
      <div className="w-full max-w-[85rem] py-10 px-10 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
        <div className="flex lg:flex-row flex-col gap-16 justify-between">
          <div className="">
            <h4 className="font-semibold uppercase tracking-wider">UBCANI</h4>

            <div className="mt-3 grid space-y-3">
              <p>
                <a
                  className="inline-flex gap-x-2 hover:text-pink transition"
                  href="https://www.ubcani.com/membership/info/"
                  target="_blank"
                >
                  Join the Club
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 hover:text-pink transition"
                  href="https://www.ubcani.com/contactus/info/"
                  target="_blank"
                >
                  Contact Us
                </a>
              </p>
            </div>
          </div>

          <div className="">
            <h4 className="font-semibold uppercase tracking-wider">Releases</h4>

            <div className="mt-3 grid space-y-3">
              <p>
                <a
                  className="inline-flex gap-x-2 hover:text-pink transition"
                  href="/releases/liability"
                >
                  Liability Release
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 hover:text-pink transition"
                  href="/releases/responsibility-for-minors"
                >
                  Responsibility for Minors
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 hover:text-pink transition"
                  href="/releases/food"
                >
                  Food and Allergens
                </a>
              </p>
            </div>
          </div>

          <div className="">
            <h4 className="font-semibold uppercase tracking-wider">
              Newsletter
            </h4>

            <form>
              <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-lg p-2">
                <div className="w-full">
                  <input
                    type="text"
                    id="hero-input"
                    name="hero-input"
                    className="py-3 px-4 block w-full border-transparent rounded-lg text-black focus:outline-none"
                    placeholder="Enter your email"
                  />
                </div>
                <a
                  className="w-full sm:w-auto whitespace-nowrap p-3 px-6 inline-flex justify-center items-center font-semibold rounded-lg border border-transparent bg-green text-white"
                  href="#"
                >
                  Subscribe
                </a>
              </div>
              <p className="mt-3">
                Weekly newsletters about our upcoming events, news, and
                opportunities.
              </p>
            </form>
          </div>
        </div>
        <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
          <div className="flex justify-between items-center">
            <p>© 2025 UBC Anime Club. All rights reserved.</p>
          </div>

          <div>
            <a
              className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
              href="https://instagram.com/popuphanami"
            >
              <Instagram />
            </a>
            <a
              className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
              href="mailto: hanami@ubcani.com"
            >
              <EmailOutlined />
            </a>
            <a
              className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
              href="https://x.com/ubcani"
            >
              <Twitter />
            </a>
            <a
              className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
              href="https://discord.gg/ubcani"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-discord"
                viewBox="0 0 16 16"
              >
                <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
