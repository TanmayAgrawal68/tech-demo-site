import { useState } from "react";
import { AnimatedModal } from "./AnimatedModal";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { sendConnectionEmail } from "../services/emailService";

export const ConnectModal = ({ onClose }) => {
  const [form, setForm] = useState({ name: "", phone: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Connect Form Data:", form);
    const { success } = await sendConnectionEmail(form);
    if (success) {
      alert(
        "Thanks for connecting with techcanopy we will reach you shortly!!"
      );
    } else {
      alert("Something went wrong!, please try again later");
    }
    onClose();
  };

  return (
    <AnimatedModal onClose={onClose}>
      {/* Gradient Header */}
      <div className="flex justify-center text-primary/90 mt-5  items-center gap-6 mb-6 py-4 rounded-xl bg-gradient-to-br from-secondary/50 to-100% ">
        <a
          href="https://www.instagram.com/techcanopysl?igsh=MW0xa2EzYmg5M295cA=="
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram className="hover:scale-110 transition" size={22} />
        </a>
        {/* <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebook className="hover:scale-110 transition" size={22} />
        </a> */}
        <a
          href="https://www.linkedin.com/company/techcanopysl/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="hover:scale-110 transition" size={22} />
        </a>
        <a
          href="https://x.com/techcanopysl?s=21"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter className="hover:scale-110 transition" size={22} />
        </a>
        <a href="mailto:interact@techcanopy.com">
          <FaEnvelope className="hover:scale-110 transition" size={22} />
        </a>
      </div>

      <h2 className="text-2xl font-semibold text-center mb-4 text-foreground">
        Connect With Us
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label className="mb-2">Name</Label>
          <Input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>
        <div>
          <Label className="mb-2">Phone</Label>
          <Input
            type="tel"
            value={form.phone}
            onChange={(e) => {
              // Allow only digits
              const value = e.target.value.replace(/\D/g, "");
              setForm({ ...form, phone: value });
            }}
            pattern="[0-9]{10}" // Exactly 10 digits
            maxLength={10} // Optional, restrict input length
            placeholder="Enter 10-digit phone number"
            required
          />
        </div>
        <div className="flex justify-end gap-3 pt-2">
          <Button variant="outline" type="button" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="secondary" type="submit">
            Connect Now
          </Button>
        </div>
      </form>
    </AnimatedModal>
  );
};
