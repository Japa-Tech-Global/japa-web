import Header from "@/components/Header"

import { Sidebar } from "@/components/sidebar/Sidebar"
import { SideProvider } from "@/components/sidebar/SideContext"
import HeadSection from "@/components/header/Header"
        
export default function Admin() {
  return (
    <section className="flex h-screen bg-[#f5f5f5ea]">
        <HeadSection />
      <SideProvider>
        <Sidebar />
      </SideProvider>
    </section>
  )
}
