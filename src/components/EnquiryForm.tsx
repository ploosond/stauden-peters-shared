"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { EnquiryFormSchema, TEnquiryFormSchema } from "@/lib/validation";
import { useParams } from "next/navigation";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const EnquiryForm = () => {
  const params = useParams();
  const locale = params?.lang;
  const [isUploading, setIsUploading] = useState(false);

  const form = useForm<TEnquiryFormSchema>({
    resolver: zodResolver(EnquiryFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      telephone: "",
    },
  });

  async function handleForm(data: TEnquiryFormSchema) {
    setIsUploading(true)
console.log(data)
    // const resp = await enquiry(data);
    // if (resp.message && locale === "en") {
    //   setSuccess(resp?.message);
    // } else if (resp.message && locale === "de") {
    //   setSuccess("Nachricht erfolgreich gesendet!");
    // } else if (resp.error && locale === "en") {
    //   setError(resp?.error);
    // } else if (resp.error && locale === "de") {
    //   setError("Sie haben Anfragen, die noch zu klären sind!");
    // }

    setIsUploading(false)
    // form.reset()
    alert("form submitted!");
  }

  return (
    <div className="px-1">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleForm)}>
          <div className=" flex flex-col gap-4 m-auto">
            {/*  Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-muted-foreground text-sm">
                    {locale === "en" ? "Full Name" : "Vollständiger Name"}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John Doe"
                      {...field}
                      className="placeholder:text-sm"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-muted-foreground text-sm">
                    {locale === "en" ? "Email" : "E-mail"}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="hello@123.com"
                      {...field}
                      className="placeholder:text-sm"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Telephone */}
            <FormField
              control={form.control}
              name="telephone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-muted-foreground text-sm">
                    {locale === "en" ? "Telephone" : "Telefon"}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={
                        locale === "en"
                          ? "contact number here"
                          : "Kontaktnummer hier"
                      }
                      type="number"
                      {...field}
                      className="placeholder:text-sm"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Message */}

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-muted-foreground text-sm">
                    {locale === "en" ? "Message" : "Nachricht"}
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={
                        locale === "en"
                          ? "Feel free to write your comments, doubts, suggestions etc."
                          : "Sie können uns gerne Ihre Kommentare, Zweifel, Vorschläge usw. mitteilen."
                      }
                      {...field}
                      className="placeholder:text-sm"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              className="bg-priColor hover:bg-blue-600 cursor-pointer"
              type="submit"
              disabled={isUploading}
            >
              {locale === "en" ? "Submit" : "Einreichen"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default EnquiryForm;
