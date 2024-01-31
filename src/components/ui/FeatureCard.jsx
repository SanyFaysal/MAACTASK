import box from "../../assets/box.png";
export default function FeatureCard({ position, title }) {
  return (
    <div
      className={` ${position === "end" ? "text-end" : "text-start"} w-full `}
    >
      <img
        src={box}
        className={`p-2  rounded-xl shadow-xl bg-white  ${
          position === "end" ? "ml-auto" : "mr-auto"
        } `}
      />
      <h4 className="text-2xl font-semibold my-2">{title}</h4>
      <p>
        See product usage, sign-ins, feature metrics change as users work on
        your.
      </p>
    </div>
  );
}
