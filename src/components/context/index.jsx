"use client";

import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [currentStep, setCurrentStep] = useState(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("currentStep")) || 1;
    }
    return 1;
  });

  const [ticketInfo, setTicketInfo] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        JSON.parse(localStorage.getItem("ticketInfo")) || {
          attendeeDetials: {
            profileImgUrl: "",
            name: "",
            email: "",
            specialRequest: "",
          },
          ticketType: "regular access",
          numberOfTickets: 1,
        }
      );
    }
    return {
      attendeeDetials: {
        profileImgUrl: "",
        name: "",
        email: "",
        specialRequest: "",
      },
      ticketType: "regular access",
      numberOfTickets: 1,
    };
  });

  const [ticketTypes, setTicketTypes] = useState([
    {
      price: "free",
      name: "regular access",
      totalAvailable: 50,
    },
    {
      price: "$150",
      name: "vip access",
      totalAvailable: 50,
    },
    {
      price: "$250",
      name: "vvip access",
      totalAvailable: 50,
    },
  ]);

  useEffect(() => {
    localStorage.setItem("currentStep", JSON.stringify(currentStep));
  }, [currentStep]);

  useEffect(() => {
    localStorage.setItem("ticketInfo", JSON.stringify(ticketInfo));
  }, [ticketInfo]);

  return (
    <AppContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        ticketInfo,
        setTicketInfo,
        ticketTypes,
        setTicketTypes,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
