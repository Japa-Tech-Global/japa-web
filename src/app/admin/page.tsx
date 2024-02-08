import Header from "@/components/Header"
import { Sidebar } from "@/components/sidebar/Sidebar"
import { SideProvider } from "@/components/sidebar/SideContext"

export default function Admin() {
  return (
    <SideProvider>
      <Sidebar />
    </SideProvider>
  )
}
