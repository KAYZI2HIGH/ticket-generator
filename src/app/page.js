"use client";

import { useAppContext } from "@/components/context";
import StepOne from "@/components/Ticket-steps/StepOne";
import StepThree from "@/components/Ticket-steps/StepThree";
import StepTwo from "@/components/Ticket-steps/StepTwo";
import { useState } from "react";

const STEPS = [
  {
    index: 1,
    name: "ticket selection",
    component: <StepOne />,
  },
  {
    index: 2,
    name: "attendee details",
    component: <StepTwo />,
  },
  {
    index: 3,
    name: "ready",
    component: <StepThree />,
  },
];

const HomePage = () => {
  const {currentStep} = useAppContext();

  return (
    <div className="py-12">
      <div className="flex items-center justify-center ">
        <div className="max-w-[700px] w-full bg-[#041E23] text-white rounded-[40px] p-6 md:p-12 shadow-lg border border-[#0E464F] flex flex-col gap-8">
          {STEPS.map((step) => {
            if (step.index === currentStep) {
              return (
                <div
                  className="space-y-8 mt-8"
                  key={step.index}
                >
                  <div>
                    <div className="w-full flex flex-col sm:flex-row justify-between md:items-end gap-1">
                      <h2 className="text-2xl md:text-3xl font-light capitalize font-Jejumyeongjo">
                        {step.name}
                      </h2>
                      <p className="text-[16px] text-gray-300 font-thin font-roboto">
                        Step {step.index}/3
                      </p>
                    </div>
                    <div className="w-full h-1 bg-[#0E464F] my-3 rounded-full overflow-hidden">
                      <div
                        className={`h-full w-${currentStep}/3 bg-[#24A0B5] rounded-full`}
                      ></div>
                    </div>
                  </div>
                  {step.component}
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
