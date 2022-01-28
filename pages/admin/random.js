import React, { Fragment, useState } from "react";
import Image from "next/image";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import TextField from "@mui/material/TextField";
import DateRangePicker from "@mui/lab/DateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Box from "@mui/material/Box";
import TopAd from "../../components/topAd";
import TableRandom from "../../components/tableRandom";
import NavbarAdmin from "../../components/NavbarAdmin";

const activated = [
  { name: "เช้า" },
  { name: "เช้าบ่าย" },
  { name: "บ่าย" },
  { name: "บ่ายดึก" },
  { name: "ดึก" },
  { name: "ดึกเช้า" },
  { name: "ทำโอ" },
];
const people = [
  { name: "BAZZ" },
  { name: "EMMY" },
  { name: "JAMES" },
  { name: "ICE" },
  { name: "NOOY" },
  { name: "PIYA" },
];

export default function Profile() {
  const [job, setJob] = useState(activated[0]);
  const [peoples, SetPeoples] = useState(people[0]);
  const [value, setValue] = useState([null, null]);

  return (
    <div className="bg-sky-100  min-h-screen ">
      <TopAd/>
      <div className="mt-4 mx-auto  max-w-md px-4  ">
        <div className="text-sm   font-extrabold">เลือกเวร</div>
        <div className="w-full">
          <Listbox value={job} onChange={setJob}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                <span className="block truncate">{job.name}</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <SelectorIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-50 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {activated.map((person, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      className={({ active }) =>
                        `${
                          active
                            ? "text-amber-900 bg-amber-100"
                            : "text-gray-900"
                        }
                          cursor-default select-none relative py-2 pl-10 pr-4`
                      }
                      value={person}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`${
                              selected ? "font-medium" : "font-normal"
                            } block truncate`}
                          >
                            {person.name}
                          </span>
                          {selected ? (
                            <span
                              className={`${
                                active ? "text-amber-600" : "text-amber-600"
                              }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                            >
                              <CheckIcon
                                className="w-5 h-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
      </div>
      <div className="mt-4 mx-auto  max-w-md px-4    ">
        <div className="text-sm   font-extrabold">เลือกบุคลากร</div>
        <div className="w-full">
          <Listbox value={peoples} onChange={SetPeoples}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                <span className="block truncate">{peoples.name}</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <SelectorIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-50 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {people.map((person, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      className={({ active }) =>
                        `${
                          active
                            ? "text-amber-900 bg-amber-100"
                            : "text-gray-900"
                        }
                          cursor-default select-none relative py-2 pl-10 pr-4`
                      }
                      value={person}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`${
                              selected ? "font-medium" : "font-normal"
                            } block truncate`}
                          >
                            {person.name}
                          </span>
                          {selected ? (
                            <span
                              className={`${
                                active ? "text-amber-600" : "text-amber-600"
                              }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                            >
                              <CheckIcon
                                className="w-5 h-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
      </div>

      <div className="mt-4 mx-auto  max-w-md px-4    ">
          <div className="mb-3 font-extrabold ">วันที่เริ่ม - วันสิ้นสุด </div>
        <LocalizationProvider  className=" " dateAdapter={AdapterDateFns}>
          <DateRangePicker
            startText="ว/ด/ป"
            endText="ว/ด/ป"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(startProps, endProps) => (
              <React.Fragment>
                <TextField className="bg-white shadow-lg" {...startProps} />
                <Box sx={{ mx: 2 }}> ถึง </Box>
                <TextField className="bg-white shadow-lg" {...endProps} />
              </React.Fragment>
            )}
          />
        </LocalizationProvider>
      </div>
      <div className="mt-4 mx-auto  max-w-md flex justify-center  ">
          <button className="p-2 bg-cyan-400 text-white rounded-xl hover:bg-cyan-500 shadow-xl w-1/2">สุ่มเวร</button>
      </div>
      <div className="flex justify-center mt-4 mx-auto  max-w-md   ">
     <TableRandom/>
      </div>
      <NavbarAdmin/>
    </div>
  );
}
