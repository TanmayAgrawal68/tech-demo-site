import { useState } from "react";
import { AnimatedModal } from "./AnimatedModal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "../services/emailService";

export const BookMeetingModal = ({ onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Meeting Form Data:", form);
    const { success } = await sendEmail(form);
    if (success) {
      alert("email sent success");
    } else {
      alert("something went wrong!!");
    }
    onClose();
  };

  return (
    <AnimatedModal onClose={onClose}>
      <h2 className="text-2xl font-semibold text-center mb-4">
        Book a Meeting
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
          <Label className="mb-2">Email</Label>
          <Input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </div>
        <div className="flex gap-3">
          <div className="flex-1">
            <Label className="mb-2">Date</Label>
            <Input
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              required
            />
          </div>
          <div className="flex-1">
            <Label className="mb-2">Time</Label>
            <Input
              type="time"
              value={form.time}
              onChange={(e) => setForm({ ...form, time: e.target.value })}
              required
            />
          </div>
        </div>
        <div>
          <Label className="mb-2">Agenda</Label>
          <Textarea
            rows={3}
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            placeholder="Tell us a bit about the meeting..."
          />
        </div>
        <div className="flex justify-end gap-3 pt-2">
          <Button variant="outline" type="button" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="secondary" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </AnimatedModal>
  );
};
