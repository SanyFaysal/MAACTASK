import FeatureCard from "../ui/FeatureCard";
import centralPhone from "../../assets/Central phone 2.png";
export default function ProductFeatures() {
  return (
    <div className="mt-[330px] pt-10 border-t ">
      <h5 className="text-[#0052CC] font-semibold text-center">
        Products Features
      </h5>
      <h2 className="text-[36px] text-center font-bold">
        Make more out of your data
      </h2>
      <div className="grid grid-cols-4 mx-24  mt-20">
        <div className="flex flex-col gap-10">
          <FeatureCard position="end" title="Real-time analytics" />
          <FeatureCard position="end" title="Intuitive dashboard" />
          <FeatureCard position="end" title="Smart suggestions" />
        </div>
        <div className="col-span-2 relative flex justify-center items-center">
          <div className="w-[400px] h-[400px] mx-auto rounded-full absolute  bg-[#0052CC]" />
          <img src={centralPhone} className="h-[600px] mx-auto  absolute" />
        </div>
        <div className="flex flex-col gap-10">
          <FeatureCard position="start" title="Multiple views" />
          <FeatureCard position="start" title="AI-led diagnoses" />
          <FeatureCard position="start" title="Responsive" />
        </div>
      </div>
    </div>
  );
}
