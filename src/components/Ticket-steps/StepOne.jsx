"use client";
import { useState } from "react";
import ButtonGroup from "../ButtonGroup";
import { useAppContext } from "../context";
// import { FaMapMarkerAlt } from "react-icons/fa";

export default function StepOne() {
  const [selectedTickets, setSelectedTickets] = useState("vip");
  const { ticketTypes, ticketInfo, setTicketInfo } = useAppContext();

  return (
    <div className="form_container">
      <div className="container_background bg font-roboto">
        <h1 className="text-[44px] md:text-[62px] md:font-semibold text-[#FAFAFA] font-raga md:tracking-wide">
          Techember Fest '25
        </h1>
        <p className="text-[14px] md:text-[16px]">
          Join us for an unforgettable experience at <br className="hidden md:block"/>
          [Event Name]! Secure your spot now.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center  text-[16px] text-gray-300 mt-2">
          <span>📍 [Event Location]</span>{" "}
          <span className="mx-2 hidden md:flex">||</span>{" "}
          <span>March 15, 2025 | 7:00 PM</span>
        </div>
      </div>

      <div className="h-[4px] w-full bg-[#07373F]"></div>

      <div>
        <p className="text-gray-300 text-[16px] mb-2">Select Ticket Type:</p>
        <div className="grid grid-cols-1 md:grid-cols-3 bg-[#052228] border border-[#07373F] rounded-3xl mb-4 p-4 gap-4">
          {ticketTypes.map((type, index) => (
            <button
              key={index}
              onClick={() => {
                setTicketInfo((prev) => {
                  return {
                    ...prev,
                    ticketType: type.title
                  }
                });
              }}
              className={`p-3 border border-[#197686] rounded-lg ${
                ticketInfo.ticketType === type.title ? "bg-[#12464E]" : ""
              }  hover:bg-[#2C545B] flex flex-col justify-between items-start gap-3 h-full `}
            >
              <span className="block text-2xl font-semibold capitalize">
                {type.price}
              </span>
              <div className="flex flex-col items-start w-full">
                <span className="text-[16px] text-[#FAFAFA] uppercase">
                  {type.name}
                </span>
                <span className="block text-sm text-[#D9D9D9] text-left">
                  {type.totalAvailable}/52
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-gray-300 text-[16px] mb-2">Number of Tickets</p>
        <select
          onChange={(e) => setTicketInfo(prev => { 
            return {
              ...prev,
              numberOfTickets: Number(e.target.value),
            };
          })}
          className="input_fields"
        >
          {[...Array(10).keys()].map((num) => (
            <option
              key={num + 1}
              value={num + 1}
            >
              {num + 1}
            </option>
          ))}
        </select>
      </div>

      <ButtonGroup
        buttonOne="Cancel"
        buttonTwo="Next"
        disabled={false}
      />
    </div>
  );
}
