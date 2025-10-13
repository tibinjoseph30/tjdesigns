type InputFieldProps = {
  label: string;
  name?: string;
  type?: string;
  error?: string;
  textarea?: boolean;
  required?: boolean;
  placeholder?: string;
};

const InputField = ({
  label,
  name,
  error,
  textarea,
  ...rest
}: InputFieldProps) => {
  const baseClasses =
    "bg-white border border-[var(--border-color)] rounded-xl px-4 py-2 min-h-[50px] w-full focus:outline-none";
  const errorClasses = error
    ? "border-red-500"
    : "border-gray-300";

  const inputClass = `${baseClasses} ${errorClasses}`;

  return (
    <div>
      <label
        htmlFor={name}
        className="font-medium text-[var(--accent-color)] mb-2 inline-block"
      >
        {label}
        {rest.required && <span className="text-red-500">*</span>}
      </label>

      {textarea ? (
        <textarea
          id={name}
          name={name}
          {...rest}
          className={inputClass}
          rows={4}
        />
      ) : (
        <input id={name} name={name} {...rest} className={inputClass} />
      )}

      {error && <small className="inline-block text-red-500 text-sm mt-1">{error}</small>}
    </div>
  );
};

export default InputField;
