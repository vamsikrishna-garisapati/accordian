import React from "react";

const AccordionItem = ({ faq, isOpen, onClick }) => {
  return (
    <div className="accordion-item">
      <div className="accordion-question" onClick={onClick}>
        {faq.question}
      </div>
      {isOpen && <div className="accordion-answer">{faq.answer}</div>}
    </div>
  );
};

export default AccordionItem;
