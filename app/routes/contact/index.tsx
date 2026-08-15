export default function ContactPage() {
  return (
    <section className="mx-auto mt-12 max-w-3xl bg-gray-200 px-6 py-8">
      <h2 className="mb-8 text-center text-3xl font-bold">Contact</h2>
      <form className="space-y-6">
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
      </form>
    </section>
  );
}
