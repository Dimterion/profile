import { Form } from "react-router";
import type { Route } from "./+types";
import { useContent } from "~/hooks/useContent";

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  const errors: Record<string, string> = {};

  if (!name) errors.name = "nameRequired";
  if (!email) {
    errors.email = "emailRequired";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "emailInvalid";
  }
  if (!subject) errors.subject = "subjectRequired";
  if (!message) errors.message = "messageRequired";

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  const data = {
    name,
    email,
    subject,
    message,
  };

  return { message: "success", data };
}

export default function ContactPage({ actionData }: Route.ComponentProps) {
  const { t } = useContent();
  const errors = actionData?.errors || {};

  return (
    <section className="bg-blue w-full max-w-96 border p-2 md:max-w-lg md:p-4 lg:max-w-2xl xl:max-w-full">
      <h2 className="mb-8 text-center text-3xl font-bold">{t.contact.title}</h2>

      {actionData?.message === "success" ? (
        <p className="mb-6 border bg-green-400 p-4 text-center shadow-md">
          {t.contact.successMessage}
        </p>
      ) : null}

      <Form method="post" className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            {t.contact.nameLabel}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 w-full border border-gray-400 bg-gray-300 px-4 py-2"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-400">
              {t.contact.errors[errors.name as keyof typeof t.contact.errors] ||
                errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            {t.contact.emailLabel}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 w-full border border-gray-400 bg-gray-300 px-4 py-2"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-400">
              {t.contact.errors[
                errors.email as keyof typeof t.contact.errors
              ] || errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium">
            {t.contact.subjectLabel}
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="mt-1 w-full border border-gray-400 bg-gray-300 px-4 py-2"
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-400">
              {t.contact.errors[
                errors.subject as keyof typeof t.contact.errors
              ] || errors.subject}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium">
            {t.contact.messageLabel}
          </label>
          <textarea
            id="message"
            name="message"
            className="mt-1 w-full border border-gray-400 bg-gray-300 px-4 py-2"
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-400">
              {t.contact.errors[
                errors.message as keyof typeof t.contact.errors
              ] || errors.message}
            </p>
          )}
        </div>

        <button className="bg-grey w-full cursor-pointer py-2 hover:bg-gray-500">
          {t.contact.sendButton}
        </button>
      </Form>
    </section>
  );
}
