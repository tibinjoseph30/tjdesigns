import SectionLayout from "../layout/SectionLayout";
import ContactForm from "./ContactForm";
import contactus from "../../assets/images/contact-us.webp";

const Contact = () => {
  return (
    <SectionLayout id="contact" className="contact bg-[var(--primary-color)] !py-[calc(var(--section-gap)*2)] mt-[var(--section-gap)] !mb-0 relative">
      <div className="container">
        <div className="grid grid-cols-2 gap-5 items-end">
          <div className="flex justify-end">
            <div className="contact-image relative pb-20">
                <img src={contactus} alt={contactus} width="364" height="444" className="rounded-[var(--global-card-radius)] relative" />
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </SectionLayout>
  );
};

export default Contact;
