import preOrder from "../../assets/Pre order vs delivery 1.png";
import topSelling from "../../assets/Top Selling Routes 1.png";
import avg from "../../assets/Avg 1.png";
import ellipse from "../../assets/Ellipse 1.png";

export default function AboutUs() {
  return (
    <div className="grid grid-cols-2 mt-36  relative mx-20 ">
      <div className="h-[400px]  bg-[#F1F6FF] rounded-lg mx-[120px] ">
        <div className="flex flex-col justify-start items-center h-[400px]  mt-[-50px] ">
          <img src={preOrder} className="h-[280px] " alt="" />
          <div className="flex items-start justify-center mt-[-30px]">
            <img src={topSelling} alt="" className="h-[276px] " />

            <img
              src={avg}
              alt=""
              className="w-[217px] shadow-xl bg-white rounded-xl mt-4"
            />
          </div>
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-[#0052CC]">About us</h3>
        <h2 className="font-bold text-[36px]">
          A dedicated solution for <br />{" "}
          <span className="mt-[-10px] block">startups and enterprises</span>
        </h2>
        <p className="my-4 text-justify">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>

        <div className="border-t pt-10 mt-10 flex gap-5">
          <img src={ellipse} className="w-[60px] h-[60px]" />
          <div>
            <h1>
              "Fieldx is for teams that care about
              <br /> their product growth."
            </h1>
            <h5 className="font-semibold mt-3">CEO, FieldX</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
