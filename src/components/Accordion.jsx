import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import faqs from "../data/faqs.json"; 


const Accordion = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="accordion">
      {faqs.map((faq) => (
        <AccordionItem
          key={faq.id}
          faq={faq}
          isOpen={faq.id === openId}
          onClick={() => toggleFAQ(faq.id)}
        />
      ))}
    </div>
  );
};

export default Accordion;
