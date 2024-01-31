import logo from "../../assets/logo.png";

export default function Navbar() {
  return (
    <div>
      <img src={logo} />
      <div className="flex gap-3">
        <button className="px-[24px] py-[12px] rounded bg-[#0052CC] text-white">
          Login
        </button>
        <button className="px-[24px] py-[12px] rounded border  border-[#0052CC] text-[#0052CC]">
          Registration
        </button>
      </div>
    </div>
  );
}
