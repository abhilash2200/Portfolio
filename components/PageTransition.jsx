"use client"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"



const PageTransition = ({ children }) => {

    const pathname = usePathname()
  return (
    <AnimatePresence>
        <div key={pathname}>
            <motion.div 
            initial={{ opacity: 1 }}
            animate={{ opacity: 0, transition: { delay: 1, duration: 0.5, ease: "easeInOut" } }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="h-screen w-screen fixed top-0 bg-[#1c1c1c] pointer-events-none"
            />{children}
        </div>
    </AnimatePresence>
  )
}

export default PageTransition
