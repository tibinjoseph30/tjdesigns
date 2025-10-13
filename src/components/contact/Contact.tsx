import SectionLayout from "../layout/SectionLayout";
import ContactForm from "./ContactForm";
import contactus from "../../assets/images/contact-us.webp";

const Contact = () => {
  return (
    <SectionLayout id="contact" className="contact bg-slate-100 sm:bg-[var(--primary-color)] lg:!py-[calc(var(--section-gap)*2)] sm:!py-[calc(var(--section-gap))] !py-10 mt-5 xl:mt-[var(--section-gap)] relative">
      <div className="container">
        <div className="grid md:grid-cols-3 xl:grid-cols-2 gap-5 items-end">
          <div className="md:flex justify-end hidden">
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
