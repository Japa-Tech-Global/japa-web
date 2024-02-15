import { IoIosNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

export default function Header() {
  return (
    <header className='fixed w-full top-0 bg-white flex p-6 pr-16 border border-gray-200 justify-end items-center'>
          <div className="flex justify-end gap-4">
            <IoIosNotifications size={'1.5rem'} />
            <FaUserCircle  size={'1.5rem'}/>
            <div>
              <span className="font-bold">Tofunmi</span>
              <p className="text-sm">Tofunmi@japatalent.com</p>
            </div>
      </div>
    </header>
  )
}
