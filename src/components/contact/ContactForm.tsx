import { useForm } from "react-hook-form";
import SectionHeader from "../shared/SectionHeader";
import InputField from "../shared/ui/InputField";
import type z from "zod";
import { contactSchema } from "../../constants/schemas/contact.form";
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
    <div className="sm:bg-white sm:p-10 sm:rounded-[var(--global-card-radius)] col-span-2 xl:col-span-1">
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend className="w-full">
            <SectionHeader
              title={
                <>
                  Have an <span className="highlight-circle-2">Idea?</span> Lets
                  Talk
                </>
              }
            ></SectionHeader>
            <div className="grid gap-8">
              <div className="grid sm:grid-cols-2 sm:gap-5 gap-8">
                <InputField
                  label="First Name"
                  placeholder="Enter First name"
                  {...register("firstname")}
                  error={errors.firstname?.message}
                />
                <InputField
                  label="Last Name"
                  placeholder="Enter last name"
                  {...register("lastName")}
                  error={errors.lastName?.message}
                />
              </div>
              <InputField
                label="Email"
                type="email"
                placeholder="Enter email address"
                {...register("email")}
                error={errors.email?.message}
              />
              <InputField
                label="Mobile"
                type="tel"
                placeholder="Enter mobile number"
                {...register("mobile")}
                error={errors.mobile?.message}
              />
              <InputField
                label="Message"
                textarea
                placeholder="Tell me what i can help you with"
                {...register("message")}
                error={errors.message?.message}
              />
              <Button
                type="submit"
                variant="accent"
                className="rounded-xl min-h-[50px]"
              >
                {isSubmitting ? "Sending Message.." : "Send Message"}
              </Button>
              {isSubmitSuccessful && (
                <p className="text-green-600">Form submitted successfully!</p>
              )}
            </div>
          </legend>
        </fieldset>
      </form>
    </div>
  );
};

export default ContactForm;
