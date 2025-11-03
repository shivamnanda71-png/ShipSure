import React from "react";

function IntegrateSection() {
  return (
    <div className="relative w-7xl mx-auto mt-10 pt-10 h-auto">
      <h2 className="text-4xl text-center mb-2 font-bold">
        Integration with <span className="text-blue-600">Ship Sure</span>{" "}
        Logistics
      </h2>
      <p className="text-2xl text-center mb-2 mt-2">
        Simplify your business with our Ecommerce shipping solutions
      </p>
      <div className="w-full overflow-hidden">
        <img
          className="aspect-[16/9] h-auto w-full object-cover"
          height={1000}
          width={1000}
          src="https://itl-website-aws.s3.ap-south-1.amazonaws.com/manage/assets/images/home-page-sales-process-img.png"
          alt="integrate"
        />
      </div>
    </div>
  );
}

export default IntegrateSection;
