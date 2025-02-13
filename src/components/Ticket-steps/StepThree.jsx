"use client";
import ShortenText from "@/utils/Shortentext";
import Image from "next/image";
import { useAppContext } from "../context";
import ButtonGroup from "../ButtonGroup";

const StepThree = () => {
  const { ticketInfo, setTicketInfo, setCurrentStep } = useAppContext();

  return (
    <section>
      <div className="flex flex-col gap-8 items-center mb-2">
        <div className="flex flex-col gap-3 md:gap-4 items-center px-4">
          <h1 className="font-bold text-2xl md:font-alatsi md:text-[32px] text-center">
            {" "}
            Your Ticket is Booked!
          </h1>
          <p className="text-[16px] text-center text-[#FAFAFA]">
            Check your email for a copy or you can download
          </p>
        </div>
        <div className="relative w-[300px] h-[600px] p-5">
          <Image
            src="/TICKET.png"
            alt="ticket card"
            fill
          />
          <div className="w-full h-[446px] p-4 bg-[#031E21]/10 border border-[#24A0B5] rounded-2xl relative flex flex-col items-center">
            <div className="container_background !bg-transparent !border-none !gap-0 font-roboto">
              <h1 className="text-[34px] text-[#FAFAFA] font-raga">
                Techember Fest '25
              </h1>
              <div className="space-y-1 p-1 text-[10px] *:leading-normal">
                <p>📍 04 Rumens road, Ikoyi, Lagos</p>
                <p>📅 March 15, 2025 | 7:00 PM</p>
              </div>
            </div>
            <div className="relative size-[140px] rounded-xl p-1 bg-[24A0B5]/50">
              <Image
                src={ticketInfo.attendeeDetials.profileImgUrl}
                alt="User Image"
                fill
              />
            </div>
            <div className="w-full h-[160px] p-1 rounded-lg bg-[#08343C] border border-[#133D44] mt-6 cursor-default">
              <div className="w-full flex gap-2 border-b-2 border-[#12464E]">
                <div className="w-full space-y-1 p-1 border-r-2 border-[#12464E] group relative">
                  <p className="text-[10px] opacity-35">Enter your name</p>
                  <h1 className="text-[12px] font-bold capitalize">
                    {
                      <ShortenText
                        text={ticketInfo.attendeeDetials.name}
                        maxLength={14}
                      />
                    }
                  </h1>
                  <h1 className="hidden absolute -bottom-7 left-1/2 -translate-x-1/2 bg-black/30 p-1 rounded-md text-[12px] font-bold group-hover:flex capitalize text-nowrap">
                    {ticketInfo.attendeeDetials.name}
                  </h1>
                </div>
                <div className="w-full space-y-1 p-1 group relative">
                  <p className="text-[10px] opacity-35">Enter your email*</p>
                  <h1 className="text-[12px] font-bold">
                    {
                      <ShortenText
                        text={ticketInfo.attendeeDetials.email}
                        maxLength={14}
                      />
                    }
                  </h1>
                  <h1 className="hidden absolute -bottom-7 left-1/2 -translate-x-1/2 bg-black/30 p-1 rounded-md text-[12px] font-bold group-hover:flex">
                    {ticketInfo.attendeeDetials.email}
                  </h1>
                </div>
              </div>
              <div className="w-full flex gap-2 border-b-2 border-[#12464E]">
                <div className="w-full space-y-1 p-1 border-r-2 border-[#12464E] ">
                  <p className="text-[10px] opacity-35">Ticket Type"</p>
                  <h1 className="text-[12px] font-bold uppercase">
                    {ticketInfo.ticketType}
                  </h1>
                </div>
                <div className="w-full space-y-1 p-1 ">
                  <p className="text-[10px] opacity-35">Ticket for:</p>
                  <h1 className="text-[12px] font-bold">
                    {ticketInfo.numberOfTickets}
                  </h1>
                </div>
              </div>
              <div className="mt-1 group relative">
                <p className="text-[10px] opacity-35">Special Request?</p>
                <h1 className="text-[10px]">
                  {ticketInfo.attendeeDetials.specialRequest !== "" ? (
                    <ShortenText
                      text={ticketInfo.attendeeDetials.specialRequest}
                      maxLength={90}
                    />
                  ) : (
                    "Nil"
                  )}
                </h1>
                {ticketInfo.attendeeDetials.specialRequest !== "" && (
                  <h1 className="hidden absolute -bottom-14 left-1/2 -translate-x-1/2 bg-black/30 p-1 rounded-md text-[10px] leading-tight font-bold group-hover:flex w-full">
                    {ticketInfo.attendeeDetials.specialRequest}
                  </h1>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse gap-5 justify-between mt-4">
        <button className="px-4 py-3 md:w-1/3 rounded-lg text-white  transition-all duration-300 bg-[#24A0B5] hover:bg-[#1b8c9c] capitalize">
          download ticket
        </button>
        <button
          onClick={() => {
            setTicketInfo({
              attendeeDetials: {
                profileImgUrl: "",
                name: "",
                email: "",
                specialRequest: "",
              },
              ticketType: "regular access",
            });

            setCurrentStep(1);
          }}
          className="px-4 py-3 md:w-1/3 border border-[#0E464F] rounded-lg bg-transparent text-gray-400 hover:bg-[#013338] transition-all duration-300 capitalize"
        >
          book another ticket
        </button>
      </div>
    </section>
  );
};

export default StepThree;
