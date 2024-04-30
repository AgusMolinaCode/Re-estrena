import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flew-row">
        <Link href="/" className="">
          <h1 className="text-3xl font-bold">Re-estrena</h1>
        </Link>

        <p>2024 Re-estrena. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
