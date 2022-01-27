import React from "react";

export default function TableVain() {
  return (
    <div>
      <table className="border-collapse border border-black bg-white ">
        <thead>
          <tr>
            <th className="border border-slate-300 p-2 ">ชื่อเวร</th>
            <th className="border border-slate-300 p-2  ">เวลาเข้าเวร</th>
            <th className="border border-slate-300  ">เวลาออกเวร</th>
            <th className="border border-slate-300 ">รายละเอียด</th>
            <th className="border border-slate-300 ">หน่วยงาน</th>
            <th className="border border-slate-300 ">ราคาเวร</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-300 ">Indiana</td>
            <td className="border border-slate-300 ">Indiana</td>
            <td className="border border-slate-300 ">Indiana</td>
            <td className="border border-slate-300 ">Indiana</td>
            <td className="border border-slate-300 ">Indiana</td>
            <td className="border border-slate-300 ">Indiana</td>
          </tr>
          <tr>
          <td className="border border-slate-300 ">Indiana</td>
            <td className="border border-slate-300 "></td>
            <td className="border border-slate-300 "></td>
            <td className="border border-slate-300 "></td>
            <td className="border border-slate-300 "></td>
            <td className="border border-slate-300 "></td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
}
