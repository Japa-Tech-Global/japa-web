import Header from "@/components/Header"
import { Sidebar } from "@/components/Sidebar/Sidebar"
import { SideProvider } from "@/components/Sidebar/SideContext"

export default function Admin() {
  return (
    <SideProvider>
      <Sidebar />
    </SideProvider>
  )
}
