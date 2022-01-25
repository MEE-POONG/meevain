import React from 'react';
import Image from 'next/image';
import { MdGroupAdd, MdOutlineCancel } from "react-icons/md";
import { FaUserPlus, FaUser } from "react-icons/fa";

export default function Profile() {
    return (
        <div className="bg-sky-50 h-screen ">
            <div className="py-2 px-5 w-full bg-gradient-to-r from-cyan-600 to-cyan-300 text-white " role="alert">
                <div className="mx-auto max-w-lg">
                    <div className="grid grid-cols-8 ">
                        <div className="col-span-1 mt-1">
                            <Image
                                src="/images/emo.png"
                                width={40}
                                height={40}
                            />
                        </div>
                        <div className="col-span-4 px-2 mt-2 text-2xl font-bold text-black">บาสสส</div>
                        <div className="col-span-1 mt-2 font-bold float-right" type="button"><FaUserPlus size={36} color="black" className="float-right"/></div>
                        <div className="col-span-1 float-right mt-3 font-bold text-center" type="button"><FaUser size={29} color="black" className="float-right"/></div>
                        <div className="col-span-1 mt-3 font-bold text-2xl text-black" >100</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
