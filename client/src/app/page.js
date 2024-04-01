import NotificationButton from "@/components/NotificationButton";
import { RiNotification2Line } from "react-icons/ri";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      <div className="flex flex-col gap-2 sm:gap-3 text-white">
        <p className="text-[32px] sm:text-[28px]">Lorem Ipsum...</p>
        <p className='opacity-70'>Lorem Ipsum dolor sit amet.</p>
      </div>

      <div className="p-6 sm:p-8 border-t-2 border-yellow-800 rounded-[50%]">
        <div className="p-6 sm:p-8 rounded-[50%] border-t-2 border-yellow-800">
          <div className="p-6 sm:p-8 rounded-[50%] border-t-2 border-yellow-800">
            <div className="p-6 sm:p-8 rounded-[50%] border-t-2 border-yellow-800">
              <div className="p-4 sm:p-4 rounded-[50%] bg-gradient-to-tl from-red-700 to-yellow-700"><RiNotification2Line color="white" size={'53px'} /></div>
            </div>
          </div>
        </div>
      </div>
     <NotificationButton />
    </main>
  );
}
