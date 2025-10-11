import { useForm } from "react-hook-form";
import SectionHeader from "../shared/SectionHeader";
import InputField from "../shared/ui/InputField";
import type z from "zod";
import { contactSchema } from "../../constants/schemas/contact.from";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../shared/ui/Button";

type contactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<contactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: contactFormData) => {
    console.log("form data", data);

    try {
      const res = await fetch(
        "https://your-wordpress-site.com/wp-json/forms/v1/forms/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      if (!res.ok) throw new Error("failed to submit form");
      reset();
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-10 rounded-[var(--global-card-radius)]">
      <fieldset>
        <legend>
          <SectionHeader
            title={
              <>
                Have an <span className="highlight-circle-2">Idea?</span> Lets Talk
              </>
            }
          ></SectionHeader>
          <div className="grid gap-8">
            <div className="grid grid-cols-2 gap-5">
              <InputField
                label="First Name"
                {...register("firstname")}
                error={errors.firstname?.message}
              />
              <InputField
                label="Last Name"
                {...register("lastName")}
                error={errors.lastName?.message}
              />
            </div>
            <InputField
              label="Email"
              type="email"
              {...register("email")}
              error={errors.email?.message}
            />
            <InputField
              label="Mobile"
              type="tel"
              {...register("mobile")}
              error={errors.mobile?.message}
            />
            <InputField
              label="Message"
              textarea
              {...register("message")}
              error={errors.message?.message}
            />
            <Button type="submit" variant="accent" className="rounded-xl min-h-[50px]">{isSubmitting ? "Sending Message.." : "Send Message"}</Button>
            {isSubmitSuccessful && <p className="text-green-600">Form submitted successfully!</p>}
          </div>
        </legend>
      </fieldset>
    </form>
  );
};

export default ContactForm;
