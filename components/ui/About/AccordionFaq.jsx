import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export default function AccordionFaq() {
  const defaultContent =
    "Lorem ipsum dolor sit amet,  sed do eiusmod tempor incididunt ut labore etsed do eiusmod tempor incididunt ut labore etsed do eiusmod tempor incididunt ut labore etsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.";

  return (
    <div className="max-w-screen-lg mx-auto">
      <h2 className="text-center text-4xl font-bold mb-8 mt-16">
        Your Questions Answered
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10 ml-10 mr-10">
        <div className="mr-20">
          <Image src="/assets/fqs1.jpg" alt="App" width={600} height={800} />
        </div>
        <div>
          <Accordion type="single" className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="accordion-trigger text-lg hover:text-primary  hover:underline">
                What is Lorem Ipsum?
              </AccordionTrigger>
              <AccordionContent>{defaultContent}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="accordion-trigger text-lg hover:text-primary hover:underline">
                Why do we use it?
              </AccordionTrigger>
              <AccordionContent>{defaultContent}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="accordion-trigger text-lg hover:text-primary hover:underline">
                Where does it come from?
              </AccordionTrigger>
              <AccordionContent>{defaultContent}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="accordion-trigger text-lg hover: text-primary   hover:underline">
                Where can I get some?
              </AccordionTrigger>
              <AccordionContent>{defaultContent}</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
