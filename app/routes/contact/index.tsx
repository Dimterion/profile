import { Form } from "react-router";
import type { Route } from "./+types";

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  const errors: Record<string, string> = {};

  if (!name) errors.name = "Name is required";
  if (!email) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Invalid email format";
  }
  if (!subject) errors.subject = "Subject is required";
  if (!message) errors.message = "Message is required";

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  const data = {
    name,
    email,
    subject,
    message,
  };

  return { message: "Form submitted", data };
}

export default function ContactPage({ actionData }: Route.ComponentProps) {
  const errors = actionData?.errors || {};

  return (
    <section className="mx-auto mt-12 max-w-3xl bg-gray-200 px-6 py-8">
      <h2 className="mb-8 text-center text-3xl font-bold">Contact</h2>
      {actionData?.message ? (
        <p className="mb-6 border bg-green-400 p-4 text-center shadow-md">
          {actionData.message}
        </p>
      ) : null}
      <Form method="post" className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 w-full border border-gray-400 bg-gray-300 px-4 py-2"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-400">{errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 w-full border border-gray-400 bg-gray-300 px-4 py-2"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-400">{errors.email}</p>
          )}
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="mt-1 w-full border border-gray-400 bg-gray-300 px-4 py-2"
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-400">{errors.subject}</p>
          )}
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="mt-1 w-full border border-gray-400 bg-gray-300 px-4 py-2"
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-400">{errors.message}</p>
          )}
        </div>
        <button className="w-full cursor-pointer bg-gray-400 py-2 hover:bg-gray-500">
          Send message
        </button>
      </Form>
    </section>
  );
}
