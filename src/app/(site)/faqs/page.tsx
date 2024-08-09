import React from "react";
import FAQ from "../../../components/FAQ";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support Page - Solid SaaS Boilerplate",
  description: "This is Support page for Solid Pro",
  // other metadata
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <FAQ />
    </div>
  );
};

export default SupportPage;
