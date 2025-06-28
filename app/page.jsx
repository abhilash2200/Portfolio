"use client"
import { FiDownload } from "react-icons/fi"
import { Button } from "@/components/ui/button"
import Social from "@/components/Social"

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <span>Frontend Developer</span>
            <h1 className="text-4xl font-bold">Hello I'm <br/><span className="text-blue-500">Abhilash Bera</span></h1>
            <p className="max-w-[400px] mb-9 text-gray-500">I'm a web developer with a passion for creating beautiful and functional websites.</p>
            <div className="flex flex-wrap mf:flex-col items-center gap-8">
              <Button className="flex items-center gap-2" variant="outline" size="lg">
                <span>Download CV</span>
                <FiDownload className="ml-2" />
              </Button>
              <div className="mb-8 lg:mb-0">
                <Social containerStyles="flex items-center gap-4" iconStyles="w-10 h-10 text-gray-500 hover:text-blue-500 transition-colors duration-300" />
              </div>
            </div>
          </div>
          <div>
            photo
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home

