import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is dental treatment painful at OPUS?",
    answer:
      "Not at all! At OPUS Dental, we prioritize pain-free procedures using gentle techniques and advanced technology. Most patients report minimal discomfort.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can book an appointment online via our website or call either of our clinics in Bandra or Fort. Same-day appointments are often available for emergencies.",
  },
  {
    question: "Do you offer specialized treatments?",
    answer:
      "Yes. We offer a wide range of specialties including implants, orthodontics, cosmetic dentistry, pediatric dentistry, and TMJ treatments.",
  },
  {
    question: "Are your hygiene and sterilization protocols certified?",
    answer:
      "Absolutely. We follow ISO-certified sterilization standards and maintain strict infection control to ensure your safety and peace of mind.",
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
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-themeGreen text-center mb-12">
          Frequently Asked Questions
        </h2>

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
