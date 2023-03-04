import { A } from 'solid-start';

export default function Navbar() {
  return (
    <>
      <nav class="bg-gray-800">
        <div class="container mx-auto px-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <A class="text-white font-bold text-xl" href="/">Bangkok Open Source Hackathon</A>
            </div>
            <div class="hidden md:block">
              <ul class="ml-4 flex items-center">
                <li><A class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/project">Project</A></li>
                <li><A class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/about">About</A></li>
                <li><A class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/contact">Contact</A></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
