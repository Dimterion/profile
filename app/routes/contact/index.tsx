import { Form } from "react-router";
import type { Route } from "./+types";

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");
  const data = {
    name,
    email,
    subject,
    message,
  };

  return { message: "Form submitted", data };
}

export default function ContactPage({ actionData }: Route.ComponentProps) {
  return (
    <section className="mx-auto mt-12 max-w-3xl bg-gray-200 px-6 py-8">
      <h2 className="mb-8 text-center text-3xl font-bold">Contact</h2>
      {actionData?.message ? (
        <p className="mb-6 border bg-gray-200 text-center shadow-md p-4">
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
        </div>
        <button className="w-full cursor-pointer bg-gray-400 py-2 hover:bg-gray-500">
          Send message
        </button>
      </Form>
    </section>
  );
}
