import tablet from "../../assets/tablet 1.png";
import phone from "../../assets/phone 1.png";
export default function Banner() {
  return (
    <div className="h-[550px] ">
      <div className="flex flex-col  items-center justify-center mt-24 mb-14">
        <h1 className="text-[48px] text-center font-semibold leading-0">
          Analytics that transform your <br /> product inside-out
        </h1>

        <div className="flex justify-center  gap-5 mt-5">
          <button className="px-[30px] py-[12px] rounded bg-[#0052CC] text-white">
            Request for Demo
          </button>
          <button className="px-[24px] py-[12px] rounded border  border-[#0052CC] border-r-[3px]   border-b-[3px] shadow-lg  text-[#0052CC]">
            Download
          </button>
        </div>
      </div>
      <div className=" ">
        <img src={tablet} className="h-[500px] w-[700px] mx-auto " />
        <div className="mt-[-350px] z-[999] flex justify-around">
          <div />
          <div />
          <img src={phone} className="h-[400px] " />
          <div />
        </div>
      </div>
    </div>
  );
}
