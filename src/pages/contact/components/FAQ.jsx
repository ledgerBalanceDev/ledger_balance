import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      id: 1,
      question: "How quickly can you respond to my inquiry?",
      answer: "We typically respond to all inquiries within 2 hours during business hours (Monday-Friday, 8AM-6PM EST). For urgent matters, you can call us directly at (555) 123-4567 for immediate assistance."
    },
    {
      id: 2,
      question: "What information should I prepare for our consultation?",
      answer: "For the most productive consultation, please gather your recent financial statements, tax returns from the last 2 years, bank statements, and any specific questions or challenges you're facing. Don't worry if you don't have everything - we can work with what you have and guide you on what else might be needed."
    },
    {
      id: 3,
      question: "Do you offer services for businesses outside of New York?",
      answer: "Yes! While our office is located in New York, we serve clients nationwide through secure digital platforms. We're licensed to provide accounting services across multiple states and can handle remote consultations and ongoing support effectively."
    },
    {
      id: 4,
      question: "What makes your approach different from other accounting firms?",
      answer: "We focus on strategic financial partnership rather than just compliance. Our approach combines traditional accounting expertise with modern business strategy, helping you not just manage your finances but use them as a tool for growth. We provide transparent communication, proactive advice, and personalized service tailored to your industry."
    },
    {
      id: 5,
      question: "How do you ensure the security of my financial information?",
      answer: "We use bank-level encryption for all digital communications and storage. Our systems are regularly audited for security compliance, and we maintain professional liability insurance up to $2M. All team members sign strict confidentiality agreements, and we follow industry best practices for data protection."
    },
    {
      id: 6,
      question: "Can you help with both personal and business accounting needs?",
      answer: "Absolutely! We provide comprehensive services for both personal and business finances. Many of our clients appreciate having one trusted advisor handle both their business accounting and personal tax planning, as this allows for better integrated financial strategies."
    },
    {
      id: 7,
      question: "What are your fees and how do you structure pricing?",
      answer: "Our pricing is transparent and tailored to your specific needs. We offer both project-based and ongoing retainer arrangements. During your free consultation, we'll discuss your requirements and provide a clear, written proposal with no hidden fees. Most clients find our strategic approach actually saves them money in the long run."
    },
    {
      id: 8,
      question: "Do you provide emergency or after-hours support?",
      answer: "Yes, we understand that financial issues don't always happen during business hours. We offer emergency support for urgent matters and have systems in place to assist clients during tax deadlines, audits, or other time-sensitive situations. Emergency contact information is provided to all active clients."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container-brand">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-text-secondary">
              Get quick answers to common questions about our services and process
            </p>
          </div>

          <div className="space-y-4">
            {faqs?.map((faq, index) => (
              <div
                key={faq?.id}
                className="bg-card rounded-lg shadow-sm border border-border overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors duration-normal focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                >
                  <h3 className="font-semibold text-foreground pr-4">
                    {faq?.question}
                  </h3>
                  <Icon
                    name={openIndex === index ? "ChevronUp" : "ChevronDown"}
                    size={20}
                    className="text-text-secondary flex-shrink-0 transition-transform duration-normal"
                  />
                </button>
                
                <div
                  className={`transition-all duration-normal overflow-hidden ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-4">
                    <p className="text-text-secondary leading-relaxed">
                      {faq?.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions CTA */}
          <div className="mt-12 text-center p-8 bg-primary/5 rounded-2xl border border-primary/20">
            <Icon name="MessageCircle" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Still Have Questions?
            </h3>
            <p className="text-text-secondary mb-6">
              Can't find what you're looking for? Our team is here to help with any specific questions about your situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-normal">
                <Icon name="Phone" size={20} />
                Call (555) 123-4567
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors duration-normal">
                <Icon name="Mail" size={20} />
                Send Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;