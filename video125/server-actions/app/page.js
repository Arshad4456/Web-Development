 "use client"
import { submitAction } from "@/actions/form";
import { useRef } from "react";

export default function Home() {
 let ref = useRef()
  return (
    <div className="container w-2/3 mx-auto my-5">
      <form ref={ref} action={(e) =>{submitAction(e); ref.current.reset()}}>
        <div>
          <label htmlFor="name" className="px-3">Name</label>
          <input name="name" id="name" type="text" className="border border-b-black"/>
        </div>
        <div className="py-3">
          <label htmlFor="add" className="px-3">Address</label>
          <input name="add" id="add" type="text" className="border border-b-black" />
        </div>
        <div>
          <button className="border border-2 px-3" >Submit</button>
        </div>
      </form>
    </div>
  );
}
