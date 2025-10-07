"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  MobileNavAccordion,
} from "@/components/ui/resizable-navbar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaEnvelope,
  FaTimes,
} from "react-icons/fa";
import { navItems } from "../../../../data";
import { ConnectModal } from "../../Connect";
import { BookMeetingModal } from "../../BookMeeting";

// ----------------------------------------------------------------
// Navbar with animated modals
// ----------------------------------------------------------------
export function NavbarDemo({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMeetingModal, setShowMeetingModal] = useState(false);
  const [showConnectModal, setShowConnectModal] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar className="sticky top-0 z-50 p-0 m-0">
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center ">
            <NavbarButton
              variant="secondary"
              onClick={() => setShowMeetingModal(true)}
            >
              Book a Meeting
            </NavbarButton>
            <NavbarButton
              variant="primary"
              onClick={() => setShowConnectModal(true)}
            >
              Connect
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen}>
            {navItems.map((item, idx) => (
              <React.Fragment key={idx}>
                {item.dropdown ? (
                  <AccordionItem item={item} />
                ) : (
                  <a
                    href={item.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="relative block px-4 py-2 text-foreground"
                  >
                    {item.name}
                  </a>
                )}
              </React.Fragment>
            ))}
            <div className="flex w-full flex-col gap-4 pt-4">
              <NavbarButton
                onClick={() => {
                  setShowConnectModal(true);
                  setIsMobileMenuOpen(false);
                }}
                variant="primary"
                className="w-full"
              >
                Connect
              </NavbarButton>
              <NavbarButton
                onClick={() => {
                  setShowMeetingModal(true);
                  setIsMobileMenuOpen(false);
                }}
                variant="secondary"
                className="w-full"
              >
                Book a Meeting
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Modals */}
      <AnimatePresence>
        {showMeetingModal && (
          <BookMeetingModal onClose={() => setShowMeetingModal(false)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showConnectModal && (
          <ConnectModal onClose={() => setShowConnectModal(false)} />
        )}
      </AnimatePresence>

      <div className="mt-0">{children}</div>
    </div>
  );
}

// Accordion Item
const AccordionItem = ({ item }) => (
  <MobileNavAccordion
    label={item.name}
    items={item.dropdown.items || item.dropdown}
  />
);

// // ----------------------------------------------------------------
// // Hook: responsive animation detection
// // ----------------------------------------------------------------
// const useResponsiveAnimation = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   useEffect(() => {
//     const check = () => setIsMobile(window.innerWidth < 768);
//     check();
//     window.addEventListener("resize", check);
//     return () => window.removeEventListener("resize", check);
//   }, []);
//   return isMobile;
// };

// // ----------------------------------------------------------------
// // Shared AnimatedModal wrapper
// // ----------------------------------------------------------------
// const AnimatedModal = ({ children, onClose }) => {
//   const isMobile = useResponsiveAnimation();
//   return (
//     <motion.div
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
//       onClick={onClose}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//     >
//       <motion.div
//         className={`relative ${
//           isMobile ? "w-full max-w-none rounded-t-3xl" : "max-w-lg rounded-2xl"
//         } w-[90%] bg-background p-6 shadow-xl`}
//         initial={
//           isMobile
//             ? { y: "100%", opacity: 0 }
//             : { y: 50, opacity: 0, scale: 0.95 }
//         }
//         animate={
//           isMobile ? { y: 0, opacity: 1 } : { y: 0, opacity: 1, scale: 1 }
//         }
//         exit={
//           isMobile
//             ? { y: "100%", opacity: 0 }
//             : { y: 30, opacity: 0, scale: 0.9 }
//         }
//         transition={{ type: "spring", stiffness: 220, damping: 22 }}
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute right-4 top-4 text-muted-foreground hover:text-foreground transition"
//         >
//           <FaTimes size={18} />
//         </button>
//         {children}
//       </motion.div>
//     </motion.div>
//   );
// };

// // ----------------------------------------------------------------
// // Book Meeting Modal
// // ----------------------------------------------------------------
// const BookMeetingModal = ({ onClose }) => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     date: "",
//     time: "",
//     description: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Meeting Form Data:", form);
//     onClose();
//   };

//   return (
//     <AnimatedModal onClose={onClose}>
//       <h2 className="text-2xl font-semibold text-center mb-4">
//         Book a Meeting
//       </h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <Label>Name</Label>
//           <Input
//             type="text"
//             value={form.name}
//             onChange={(e) => setForm({ ...form, name: e.target.value })}
//             required
//           />
//         </div>
//         <div>
//           <Label>Email</Label>
//           <Input
//             type="email"
//             value={form.email}
//             onChange={(e) => setForm({ ...form, email: e.target.value })}
//             required
//           />
//         </div>
//         <div className="flex gap-3">
//           <div className="flex-1">
//             <Label>Date</Label>
//             <Input
//               type="date"
//               value={form.date}
//               onChange={(e) => setForm({ ...form, date: e.target.value })}
//               required
//             />
//           </div>
//           <div className="flex-1">
//             <Label>Time</Label>
//             <Input
//               type="time"
//               value={form.time}
//               onChange={(e) => setForm({ ...form, time: e.target.value })}
//               required
//             />
//           </div>
//         </div>
//         <div>
//           <Label>Short Description</Label>
//           <Textarea
//             rows={3}
//             value={form.description}
//             onChange={(e) => setForm({ ...form, description: e.target.value })}
//             placeholder="Tell us a bit about the meeting..."
//           />
//         </div>
//         <div className="flex justify-end gap-3 pt-2">
//           <Button variant="outline" type="button" onClick={onClose}>
//             Cancel
//           </Button>
//           <Button variant="primary" type="submit">
//             Submit
//           </Button>
//         </div>
//       </form>
//     </AnimatedModal>
//   );
// };

// // ----------------------------------------------------------------
// // Connect Modal
// // ----------------------------------------------------------------
// const ConnectModal = ({ onClose }) => {
//   const [form, setForm] = useState({ name: "", phone: "" });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Connect Form Data:", form);
//     onClose();
//   };

//   return (
//     <AnimatedModal onClose={onClose}>
//       {/* Gradient Header */}
//       <div className="flex justify-center items-center gap-6 mb-6 py-4 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
//         <a href="https://instagram.com" target="_blank" rel="noreferrer">
//           <FaInstagram className="hover:scale-110 transition" size={22} />
//         </a>
//         <a href="https://facebook.com" target="_blank" rel="noreferrer">
//           <FaFacebook className="hover:scale-110 transition" size={22} />
//         </a>
//         <a href="https://linkedin.com" target="_blank" rel="noreferrer">
//           <FaLinkedin className="hover:scale-110 transition" size={22} />
//         </a>
//         <a href="mailto:someone@example.com">
//           <FaEnvelope className="hover:scale-110 transition" size={22} />
//         </a>
//       </div>

//       <h2 className="text-2xl font-semibold text-center mb-4 text-foreground">
//         Connect With Us
//       </h2>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <Label>Name</Label>
//           <Input
//             type="text"
//             value={form.name}
//             onChange={(e) => setForm({ ...form, name: e.target.value })}
//             required
//           />
//         </div>
//         <div>
//           <Label>Phone</Label>
//           <Input
//             type="tel"
//             value={form.phone}
//             onChange={(e) => setForm({ ...form, phone: e.target.value })}
//             required
//           />
//         </div>
//         <div className="flex justify-end gap-3 pt-2">
//           <Button variant="outline" type="button" onClick={onClose}>
//             Cancel
//           </Button>
//           <Button variant="primary" type="submit">
//             Connect Now
//           </Button>
//         </div>
//       </form>
//     </AnimatedModal>
//   );
// };
