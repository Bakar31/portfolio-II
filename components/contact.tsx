import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-r from-teal-50 to-cyan-50"
    >
      <h2 className="mb-8 text-3xl font-bold text-center text-teal-800">
        Contact Me 📬
      </h2>
      <form className="max-w-md mx-auto space-y-4">
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <Textarea placeholder="Message" />
        <Button
          type="submit"
          className="w-full bg-teal-600 hover:bg-teal-700 text-white"
        >
          Send Message
        </Button>
      </form>
    </section>
  );
}
