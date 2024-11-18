import { ArrowRight } from 'lucide-react'

export default function Component() {
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-[45px] font-inter font-normal text-black mb-8 leading-tight whitespace-nowrap">
          Be the first to launch a map in your niche.
        </h2>
        <div className="space-y-4">
          <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-[20px] font-inter font-normal rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200">
            Create a map for free
            <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
          </button>
          <p className="text-sm text-gray-600">
            Try premium features with 15 days free trial
          </p>
        </div>
      </div>
    </section>
  )
}