import { useState } from "react";
import type { FormEvent } from "react";
import { Button } from "./Button";

const initialState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  details: "",
};

type FormState = typeof initialState;

const validateField = (key: keyof FormState, value: string) => {
  if (!value.trim()) return "Required";
  if (key === "email" && !/^[^@]+@[^@]+\.[^@]+$/.test(value)) {
    return "Enter a valid email";
  }
  return "";
};

export const QuoteForm = () => {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Record<keyof FormState, string>>({
    name: "",
    company: "",
    email: "",
    phone: "",
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (key: keyof FormState, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: validateField(key, value) }));
    }
  };

  const handleBlur = (key: keyof FormState) => {
    setErrors((prev) => ({ ...prev, [key]: validateField(key, values[key]) }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const nextErrors = Object.keys(values).reduce((acc, key) => {
      const typedKey = key as keyof FormState;
      acc[typedKey] = validateField(typedKey, values[typedKey]);
      return acc;
    }, {} as Record<keyof FormState, string>);

    setErrors(nextErrors);
    const hasErrors = Object.values(nextErrors).some(Boolean);
    setSubmitted(!hasErrors);
  };

  return (
    <form
      className="rounded-3xl border border-white/10 bg-panel/80 p-8"
      onSubmit={handleSubmit}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-accent/70">
            Request a quote
          </p>
          <h3 className="mt-2 text-2xl">Tell us about your project.</h3>
        </div>
        {submitted && (
          <span className="rounded-full border border-accent/40 px-3 py-1 text-xs text-accent">
            Submitted
          </span>
        )}
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {[
          { key: "name", label: "Name" },
          { key: "company", label: "Company" },
          { key: "email", label: "Email" },
          { key: "phone", label: "Phone" },
        ].map((field) => (
          <label
            key={field.key}
            className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-white/60"
          >
            {field.label}
            <input
              value={values[field.key as keyof FormState]}
              onChange={(event) =>
                handleChange(
                  field.key as keyof FormState,
                  event.target.value
                )
              }
              onBlur={() => handleBlur(field.key as keyof FormState)}
              className="rounded-xl border border-white/10 bg-base/60 px-4 py-3 text-sm text-white/90 transition focus:border-accent/70 focus:outline-none focus:ring-2 focus:ring-accent/30"
              placeholder={field.label}
            />
            {errors[field.key as keyof FormState] && (
              <span className="text-[11px] text-warning">
                {errors[field.key as keyof FormState]}
              </span>
            )}
          </label>
        ))}
      </div>
      <label className="mt-4 flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-white/60">
        Project details
        <textarea
          value={values.details}
          onChange={(event) => handleChange("details", event.target.value)}
          onBlur={() => handleBlur("details")}
          rows={4}
          className="rounded-xl border border-white/10 bg-base/60 px-4 py-3 text-sm text-white/90 transition focus:border-accent/70 focus:outline-none focus:ring-2 focus:ring-accent/30"
          placeholder="Materials, tolerances, quantities, and schedule."
        />
        {errors.details && (
          <span className="text-[11px] text-warning">{errors.details}</span>
        )}
      </label>
      <div className="mt-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <p className="text-xs text-white/60">
          By submitting, you agree to receive a response within one business day.
        </p>
        <Button type="submit">Submit Request</Button>
      </div>
    </form>
  );
};
