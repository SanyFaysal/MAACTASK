import logo from "../../assets/logo.png";

export default function Navbar() {
  return (
    <div className="flex justify-between px-16 py-[16px] border-b">
      <img src={logo} />
      <div className="flex gap-3">
        <button className="px-[24px] py-[12px] rounded bg-[#0052CC] text-white">
          Login
        </button>
        <button className="px-[24px] py-[12px] rounded border  border-[#0052CC] border-r-[3px]   border-b-[3px] shadow-lg  text-[#0052CC]">
          Registration
        </button>
      </div>
    </div>
  );
}
