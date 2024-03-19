"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const contactInfo = [
  {
    title: "Address",
    description: "87 Grand St Croton on Hudson New York, NY 10510",
  },
  {
    title: "Email",
    description: "support@aazztech.com",
  },
  {
    title: "Website",
    description: "https://wpwax.com/",
  },
];

function ContactUsForm() {
  return (
    <div className="container mx-auto flex flex-col gap-8 px-4 py-10 md:flex-row md:gap-16 lg:px-20">
      <div className="flex flex-col gap-4 max-w-full md:max-w-[40%]">
        <h1 className="text-2xl font-bold mb-4 md:text-3xl">Contact Info</h1>
        {contactInfo.map((info, index) => (
          <Card key={index} className="w-full md:w-96 h-auto">
            <CardHeader>
              <CardTitle>{info.title}</CardTitle>
              <CardDescription>{info.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <div className="flex flex-col gap-4 max-w-full md:max-w-[60%]">
        <h1 className="text-2xl font-bold mb-4 md:text-3xl">Need an Instant Help?</h1>
        <form className="space-y-4">
          <input
            type="text"
            name="name"
            onChange={(e) => console.log(e.target.value)}
            placeholder="Name*"
            className="w-full h-12 px-4 py-2 text-sm border rounded placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
          />

          <input
            type="email"
            name="email"
            onChange={(e) => console.log(e.target.value)}
            placeholder="Email*"
            className="w-full h-12 px-4 py-2 text-sm border rounded placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
          />

          <input
            type="text"
            name="subject"
            onChange={(e) => console.log(e.target.value)}
            placeholder="Subject*"
            className="w-full h-12 px-4 py-2 text-sm border rounded placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
          />

          <textarea
            name="message"
            onChange={(e) => console.log(e.target.value)}
            placeholder="Message*"
            className="w-full h-32 px-4 py-2 text-sm border rounded placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
          />

          <button className="w-full p-3 text-white bg-primary rounded">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUsForm;
