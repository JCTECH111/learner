import React, { useEffect } from "react";
import Swal from "sweetalert2";

const OwnerPopup = () => {
  const showPopup = () => {
    Swal.fire({
      title: "Joecode - Site Creator",
      text: "The owner and creator of this site. Click below to chat with him on WhatsApp.",
      icon: "info",
      confirmButtonText: "Chat on WhatsApp 👇",
      confirmButtonColor: "#25D366",
      footer: `<a href="https://wa.me/qr/7AQDB3GTR3MOB1" target="_blank" style="color: #25D366; font-weight: bold;">Go to WhatsApp</a>`,
    });
  };

  useEffect(() => {
    // Show the popup immediately on page load
    showPopup();

    // Set interval to show the popup every 10 minutes (600,000 ms)
    const interval = setInterval(() => {
      showPopup();
    }, 700000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return null; // This component only handles the popup, no UI is rendered
};

export default OwnerPopup;
