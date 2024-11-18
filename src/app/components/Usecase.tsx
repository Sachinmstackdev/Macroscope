export default function Component() {
  return (
    <section className="bg-[#CBCBCA] px-4 py-16 md:py-24">
      <div className="container mx-auto max-w-7xl">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center">
            <button className="mb-6 rounded-full border-2 border-black px-6 py-2 text-sm font-medium transition-colors hover:bg-black hover:text-white">
              USE CASES
            </button>
            <h2 className="font-['DM_Sans'] text-3xl font-medium leading-[105%] text-[#464646] md:text-5xl">
              Create visually engaging maps of your niche the complexity of your niche in a visually engaging map that gets
              attention and captivates your audience.
            </h2>
          </div>

          {/* Cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <div className="group relative overflow-hidden rounded-lg border-2 border-white bg-white p-6 transition-transform hover:-translate-y-1 hover:shadow-xl h-[480px] flex flex-col">
              <img
                src="https://placehold.co/300x300/EAEAEA/464646/png?text=Creators+and+Influencers"
                alt="Creators and Influencers illustration"
                className="mb-4 h-64 w-full object-cover rounded-md"
              />
              <h3 className="mb-3 text-xl font-semibold text-[#464646]">Creators and Influencers</h3>
              <p className="text-sm text-gray-600 flex-grow">
                Create a market map of your niche that becomes a go-to resource for your audience and drive qualified leads
                to your courses, newsletter, YouTube channel and more.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-lg border-2 border-white bg-white p-6 transition-transform hover:-translate-y-1 hover:shadow-xl h-[480px] flex flex-col">
              <img
                src="https://placehold.co/300x300/EAEAEA/464646/png?text=Directory+Makers"
                alt="Directory Makers illustration"
                className="mb-4 h-64 w-full object-cover rounded-md"
              />
              <h3 className="mb-3 text-xl font-semibold text-[#464646]">Directory Makers</h3>
              <p className="text-sm text-gray-600 flex-grow">
                Turn your directory data into a visually engaging market map that easily captures attention, gets shared on
                social media, and drives traffic back to your directory site.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group relative overflow-hidden rounded-lg border-2 border-white bg-white p-6 transition-transform hover:-translate-y-1 hover:shadow-xl h-[480px] flex flex-col">
              <img
                src="https://placehold.co/300x300/EAEAEA/464646/png?text=Communities"
                alt="Communities illustration"
                className="mb-4 h-64 w-full object-cover rounded-md"
              />
              <h3 className="mb-3 text-xl font-semibold text-[#464646]">Communities</h3>
              <p className="text-sm text-gray-600 flex-grow">
                Engage your community members with a crowed-sourced map that promotes active participation and discussions,
                while creating a valuable asset for the community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}