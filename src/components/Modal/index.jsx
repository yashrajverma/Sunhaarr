import React from "react";
import Icon from "../Icon";

export default function Modal({ show, setShow, children }) {
  return (
    show && <div className="static">
      <div
        className="fixed h-screen w-screen bg-black z-10 top-0 opacity-75"
      ></div>
      <div className="fixed top-50 right-0 left-0 z-20 flex justify-center">
        <div className="mx-4 my-4 bg-white w-[100%] p-4 rounded-sm">
          <div className="flex justify-end">
            <Icon iconName='xcircle' className='bg-red-600 rounded-[50%] text-white' onClick={() => setShow(!show)} />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
