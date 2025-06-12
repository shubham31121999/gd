import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How soon can I see a dentist near me?",
    answer:
      "Same-day or next-day slots; emergencies treated immediately.",
  },
  {
    question: "Will a routine cleaning or filling hurt? ",
    answer:
      "Discomfort is minimal. We use topical numbing gels, state-of-the art ultra-fine instruments and gentle techniques so most patients feel only mild pressure.",
  },
  {
    question: "What sterilisation protocols do you follow? ",
    answer:
      "Every instrument passes through ultrasonic cleaning, sealed Class-B autoclave cycles and UV room sanitation - exceeding Indian Dental Council guidelines for infection control.",
  },
  {
    question: "Do you offer flexible payment options? ",
    answer:
      "Yes. For larger treatment plans, we can arrange EMI schedules. Our front desk will guide you through the simple approval process.",
  },
  {
    question: "Do you treat kids and adults? ",
    answer:
      "Absolutely. Our paediatric dentists use child-friendly “tell-show-do” methods, flavour-choice fluoride gels and distraction aids so kids stay relaxed.",
  },
  {
    question: "How long does a routine scale-and-polish take? ",
    answer:
      "Around 25 minutes chair-time; add a few minutes if you choose an Air-Flow polish for extra brightness.",
  },
  {
    question: "Can you handle dental emergencies? ",
    answer:
      "Yes. We reserve urgent care slots daily for toothaches, trauma or swelling. Call the emergency number listed above for priority assistance.",
  },
    {
    question: "Do you accept insurance or reimbursements?",
    answer:
      "We issue detailed treatment invoices and codes so you can claim with your insurer. Our desk can verify eligibility quickly.",
  },
];

const FAQItem = ({ question, answer, isOpen, onToggle }) => (
  <div className="border-b border-gray-200">
    <button
      onClick={onToggle}
      className="w-full flex justify-between items-center py-4 text-left text-lg font-medium text-gray-800 focus:outline-none"
    >
      {question}
      <ChevronDown
        className={`w-5 h-5 transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
    {isOpen && (
      <p className="text-gray-600 text-sm pb-4 transition-all duration-300">
        {answer}
      </p>
    )}
  </div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) =>
    setOpenIndex(index === openIndex ? null : index);

  return (
    <section className="bg-white py-24 px-4">
      <div className="max-w-[90%] sm:max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-themeGreen text-center mb-0">
          Frequently Asked Questions
        </h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-themeGreen text-center mb-12">
          (FAQ)
        </h3>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
