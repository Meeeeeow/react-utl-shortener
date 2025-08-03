import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [longUrl, setLongUrl] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (longUrl) navigate(`/auth?createNew=${longUrl}`);
  };
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h2 className="my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-center font-extrabold">
        {" "}
        The only URL Shortener <br /> you&rsquo;ll ever need! 👇
      </h2>
      <form
        className="flex flex-col sm:flex-row gap-4 mt-4 sm:h-14 w-full md:w-1/2"
        onSubmit={handleSubmit}
      >
        <Input
          type="url"
          placeholder="Enter your looong URL here..."
          value={longUrl}
          className="h-full flex-1 py-4 px-4"
          onChange={(e) => setLongUrl(e.target.value)}
        />
        <Button
          type="submit"
          className="h-full font-semibold tracking-wider"
          variant="destructive"
        >
          Shorten!
        </Button>
      </form>
      <img
        src="/public/banner.png"
        alt="Banner"
        className="my-11 md:px-11 w-full"
      />
      <Accordion
        type="single"
        collapsible
        className="w-full md:px-11"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
            How does the Trimrr URL shortener works?
          </AccordionTrigger>
          <AccordionContent>
            When you enter a long URL, our system generates a shorter version of
            that URL. This shortened URL redirects to the original long URL when
            accessed.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Do I need an account to use the app?
          </AccordionTrigger>
          <AccordionContent>
            Yes. Creating an account allows you to manage your URLs, view
            analytics, and customize your short URLs.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            What analytics are available for my shortened URLs?
          </AccordionTrigger>
          <AccordionContent>
            You can view the number of clicks, geolocation data of the clicks
            and device types (mobile/desktop) for each of your shortened URLs.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default LandingPage;
