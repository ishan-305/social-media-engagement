"use client";

import useIsMobileView from "@/hooks/useIsMobileView";
import { cn } from "@/lib/utils";
import { Loader2, MessagesSquare, SendHorizonal, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const chatArray = [
  {
    role: "bot",
    content: "Welcome to the chat bot",
  },
];

const chatLimit = 10;

const Chatbox = () => {
  const { isMobile, windowHeight } = useIsMobileView();
  const [inputValue, setInputValue] = useState("");
  const [chat, setChat] = useState(chatArray);
  const [loading, setLoading] = useState(false);

  const handleOnSubmit = async () => {
    setLoading(true);
    if (chat.length <= chatLimit) {
      setChat((prev) => [...prev, { role: "user", content: inputValue }]);
      setInputValue("");
      const response = await fetch("/api/langflow", {
        method: "POST",
        body: JSON.stringify({ inputValue }),
      });
      if (response.ok) {
        const data = await response.json();
        setChat((prev) => [
          ...prev,
          { role: "bot", content: data.data.response },
        ]);
        console.log("Data", data);
      }
    } else {
      setChat((prev) => [
        ...prev,
        { role: "bot", content: "Chat limit exceeded" },
      ]);
    }
    setLoading(false);
  };

  if (isMobile) {
    return (
      <Dialog>
        <DialogTrigger>
          <div className="fixed bottom-4 right-4 rounded-3xl size-14 flex items-center justify-center bg-white text-black">
            <MessagesSquare size={32} />
          </div>
        </DialogTrigger>
        <DialogContent className="bg-transparent border-none backdrop-blur-md h-screen">
          <DialogTitle className="hidden">Analytics Chat Bot</DialogTitle>
          <div className="flex-[2] my-4 sm:my-0 flex overflow-hidden flex-col mx-auto w-full bg-slate-950 sm:h-[620px] rounded-[20px]">
            <div className="flex flex-col px-4 py-2 w-full bg-slate-900 border-b border-neutral-700">
              <div className="flex gap-10  text-gray-300 items-center">
                <h1 className="flex-1 text-center ">Analytics Chat Bot</h1>
                <DialogClose>
                  <X size={24} />
                </DialogClose>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-2 px-6 mt-8 w-full  leading-8  overflow-y-auto">
              {chat.map((chat, index) => (
                <div
                  key={index}
                  className={cn(
                    "px-4 py-2 leading-loose rounded-xl ",
                    chat.role === "bot"
                      ? "self-start bg-neutral-700"
                      : "self-end bg-violet-700"
                  )}
                >
                  {chat.content}
                </div>
              ))}
            </div>
            <form>
              <div className="flex overflow-hidden  gap-2 px-8 py-3  w-full bg-slate-900 border-t border-solid border-neutral-700">
                <input
                  className="rounded-xl flex-1 h-12 px-2 leading-loose text-gray-500 bg-slate-900 border border-neutral-700"
                  placeholder="Write your message..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />

                <Button
                  variant={"ghost"}
                  onClick={handleOnSubmit}
                  className="border rounded-xl bg-slate-800"
                  disabled={loading}
                >
                  {loading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <SendHorizonal size={32} />
                  )}
                </Button>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <div className="fixed top-24 right-2 bottom-2 flex-[2] flex overflow-hidden flex-col mx-auto w-1/3   border border-neutral-700  rounded-[20px] bg-slate-950/70">
      <div className="flex flex-col px-4 py-2 w-full  border-b border-neutral-800">
        <div className="flex gap-10  text-gray-500 items-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7839996309323edec733ac9ef90d63a6540c24278f7e81f251639202b187c045?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3"
            className="object-contain shrink-0 aspect-square w-[35px]"
          />
          <h1 className="flex-1 text-center text-muted-foreground">
            Analytics Chat Bot
          </h1>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/861617a334c0d905418b285edf7a421d64967067b68f9b7893c9f1a47d0ffc23?placeholderIfAbsent=true&apiKey=465f61beb0264131b80c2629d78776b3"
            className="object-contain shrink-0 aspect-[2] w-[70px]"
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-2 px-6 mt-8  overflow-y-auto">
        {chat.map((chat, index) => (
          <div
            key={index}
            className={cn(
              "p-2 rounded-xl max-w-[80%]",
              chat.role === "bot"
                ? "self-start bg-slate-700"
                : "self-end bg-violet-700"
            )}
          >
            {chat.content}
          </div>
        ))}
      </div>

      <form>
        <div className="flex overflow-hidden gap-2 px-8 py-3  w-full  border-t border-solid border-neutral-800">
          <input
            className="rounded-xl flex-1 h-12 px-2 leading-loose  bg-slate-950/70 border border-neutral-700"
            placeholder="Write your message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button
            variant={"ghost"}
            onClick={handleOnSubmit}
            className="border rounded-xl bg-slate-800"
            disabled={loading}
          >
            {loading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <SendHorizonal size={32} />
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};
export default Chatbox;
