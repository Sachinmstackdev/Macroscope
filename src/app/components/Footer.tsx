import { Twitter, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full pb-12">
      <div className="border-t border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center mb-2">
                <svg className="h-8 w-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 9L12 3L22 9V20H2V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-2xl font-bold">Macroscope</span>
              </div>
              <p className="text-sm text-center md:text-left max-w-md">
                Create Interactive Market Maps that helps you <br />  build authority in your niche and drive traffic
              </p>
              <p className="text-sm mt-2">
                Made with ♥ by Cebe
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <span className="sr-only">Reddit</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm6 9c0-.793-.652-1.436-1.45-1.436-.389 0-.742.15-1.008.39-.962-.664-2.279-1.08-3.742-1.134l.673-3.182 2.217.47c.026.54.478.97 1.022.97.565 0 1.023-.458 1.023-1.023S16.277 7 15.712 7c-.392 0-.729.22-.902.54l-2.473-.523c-.12-.023-.245.064-.28.188l-.748 3.54c-1.438.063-2.73.476-3.68 1.137-.266-.25-.62-.406-1.012-.406C5.652 11.477 5 12.12 5 12.912c0 .612.395 1.135.944 1.337-.052.17-.08.348-.08.53 0 2.208 2.56 4 5.712 4 3.153 0 5.712-1.792 5.712-4 0-.18-.026-.354-.077-.522.554-.2.953-.726.953-1.343z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <span className="sr-only">Discord</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <span className="sr-only">Email</span>
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-500">
            <div className="flex items-center justify-center space-x-4">
              <span>© 2024 Macroscope. All rights reserved</span>
              <span>|</span>
              <a href="#" className="hover:text-gray-900">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-gray-900">Terms of Service</a>
              <span>|</span>
              <a href="#" className="hover:text-gray-900">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}