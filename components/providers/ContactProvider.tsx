"use client";

import { createContext, useContext, useState, useCallback } from "react";
import ContactModal from "@/components/ui/ContactModal";

interface ContactContextType {
  openContact: () => void;
}

const ContactContext = createContext<ContactContextType>({
  openContact: () => {},
});

export function useContact() {
  return useContext(ContactContext);
}

export default function ContactProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const openContact = useCallback(() => setIsOpen(true), []);
  const closeContact = useCallback(() => setIsOpen(false), []);

  return (
    <ContactContext.Provider value={{ openContact }}>
      {children}
      <ContactModal isOpen={isOpen} onClose={closeContact} />
    </ContactContext.Provider>
  );
}
