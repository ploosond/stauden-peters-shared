"use client";

// import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronDown } from "lucide-react";

const locales = [
  { code: "de", label: "De" },
  { code: "en", label: "En" },
];

const LocaleSwitcher = () => {
  // const router = useRouter();
  const [selectedLocale, setSelectedLocale] = useState("de"); // Default locale

  const handleLocaleChange = (locale: string) => {
    setSelectedLocale(locale);
    // router.push(`/${locale}`); // Update the URL with the selected locale
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2 bg-transparent border-[0.5px]"
        >
          {locales.find((l) => l.code === selectedLocale)?.label}
          <ChevronDown className="size-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-36">
        {locales.map((locale) => (
          <button
            key={locale.code}
            onClick={() => handleLocaleChange(locale.code)}
            className="flex items-center w-full px-3 py-2 text-sm  hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition"
          >
            {locale.label}
            {selectedLocale === locale.code && (
              <Check className="ml-auto size-4 text-primary" />
            )}
          </button>
        ))}
      </PopoverContent>
    </Popover>
  );
};

export default LocaleSwitcher;
