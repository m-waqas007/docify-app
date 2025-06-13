import React, { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
  const ref = useRef(null);
  // Sample data for the cards
  // You can replace this with your actual data or fetch it from an API
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      fileSize: ".9mb",
      close: false, // true for close, false for available
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }, // true for download, false for available
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      fileSize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" }, 
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      fileSize: ".9mb",
      close: false, 
      tag: { isOpen: false, tagTitle: "Upload", tagColor: "green" },
    },
  ];

  return (
    <div>
      <div
        ref={ref}
        className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5 "
      >
        {/* dynamic rendering */}
        {data.map((item, index) => (
          <Card data={item} reference={ref} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Foreground;
