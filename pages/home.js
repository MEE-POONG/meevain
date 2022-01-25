import Image from 'next/image';
import { BsCalendarCheck } from "react-icons/bs";
import { MdGroupAdd } from "react-icons/md";

export default function Home() {
    return (
        <div className="bg-sky-50 h-screen">
            <div
                className="py-2 px-5 w-full bg-gradient-to-r from-cyan-600 to-cyan-300 text-white " role="alert">
                <div className="mx-auto max-w-lg">
                    <div className="grid grid-cols-8 ">
                        <div className="col-span-1 mt-1">
                            <Image
                                src="/images/emo.png"
                                width={40}
                                height={40}
                            />
                        </div>
                        <div className="col-span-6 mt-3 font-bold">บาสสส</div>
                        <div className="col-span-1 mt-2 font-bold float-right"><MdGroupAdd size={36} /></div>
                    </div>
                </div>
            </div>
            <div className=" mx-auto max-w-lg ">
                <p className="py-5 font-bold text-2xl text-center">Group All</p>
            </div>
        </div>
    );
}