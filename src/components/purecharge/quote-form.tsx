import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { contacts, equipment } from "@/lib/purecharge-data";

export function QuoteForm({ initialCapacity }: { initialCapacity: string | undefined }) {
  const [whatsAppLink, setWhatsAppLink] = useState("");

  function prepareRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const details = [
      "Hello PureCharge, I would like a cooling quotation.",
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Area: ${data.get("area")}`,
      `Service: ${data.get("service")}`,
      `Brand: ${data.get("brand")}`,
      `Cooling capacity: ${data.get("capacity")}`,
      `Additional details: ${data.get("notes") || "None"}`,
    ].join("\n");
    setWhatsAppLink(
      `https://wa.me/${contacts.primaryWhatsApp}?text=${encodeURIComponent(details)}`,
    );
  }

  const defaultCapacity = equipment.find((unit) => unit.capacity === initialCapacity);

  return (
    <form className="quote-form" onSubmit={prepareRequest}>
      <div className="form-grid">
        <label className="form-field">
          <span>Your full name</span>
          <input name="name" autoComplete="name" placeholder="e.g. Tendai Mukamuri" required />
        </label>
        <label className="form-field">
          <span>Phone or WhatsApp number</span>
          <input name="phone" type="tel" autoComplete="tel" placeholder="0783 081 068" required />
        </label>
        <label className="form-field">
          <span>Harare suburb or area</span>
          <input name="area" autoComplete="address-level2" placeholder="e.g. Borrowdale" required />
        </label>
        <label className="form-field">
          <span>Service required</span>
          <select name="service" defaultValue="Supply & install complete package">
            <option>Supply &amp; install complete package</option>
            <option>AC unit purchase only</option>
            <option>Installation only ($90 flat rate)</option>
            <option>Diagnostics, regas &amp; repair</option>
            <option>Preventative service clean</option>
          </select>
        </label>
        <label className="form-field">
          <span>Preferred brand</span>
          <select name="brand" defaultValue="Electro Master inverter">
            <option>Electro Master inverter</option>
            <option>TCL smart inverter</option>
            <option>Hisense inverter expert</option>
            <option>Not sure — please advise</option>
          </select>
        </label>
        <label className="form-field">
          <span>Cooling capacity</span>
          <select
            name="capacity"
            defaultValue={
              defaultCapacity
                ? `${defaultCapacity.capacity} — $ ${defaultCapacity.price}`
                : "Not sure — please advise"
            }
          >
            <option>Not sure — please advise</option>
            {equipment.map((unit) => (
              <option key={unit.capacity}>
                {unit.capacity} — $ {unit.price}
              </option>
            ))}
            <option>Multiple units or full building</option>
          </select>
        </label>
        <label className="form-field full-width">
          <span>
            Additional details <em>Optional</em>
          </span>
          <textarea
            name="notes"
            rows={4}
            placeholder="Room size, existing wiring, or preferred appointment time"
          />
        </label>
      </div>
      <div className="form-submit-row">
        <Button type="submit">
          Prepare request <ArrowUpRight size={16} />
        </Button>
        <p>Your message is prepared on this device. Nothing is stored on this website.</p>
      </div>
      {whatsAppLink && (
        <div className="form-ready" role="status">
          <CheckCircle2 size={19} />
          <span>Your request is ready to send.</span>
          <Button asChild variant="outline">
            <a href={whatsAppLink} target="_blank" rel="noreferrer">
              Open WhatsApp <ArrowUpRight size={15} />
            </a>
          </Button>
        </div>
      )}
    </form>
  );
}
