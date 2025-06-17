"use client";

import {
  IconMessage,
  IconX,
  IconHeart,
  IconBell,
  IconSettings,
  IconCheck,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export const Card = () => {
  const [open, setOpen] = useState(true);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.98,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          exit={{
            opacity: 0,
            scale: 0.98,
            filter: "blur(10px)",
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="w-72 min-h-[25rem] h-[26rem] rounded-xl shadow-md p-4 flex flex-col bg-white"
        >
          <h2 className="text-black mx-auto font-bold text-base leading-tight">
            Aceternity UI Components
          </h2>
          <p className="text-neutral-600 mt-1 font-light text-xs text-center">
            A curated set of UI elements for you. <br />
            Start building modern interfaces in minutes.
          </p>

          {/* List Content */}
          <div className="bg-gray-100 flex-1 mt-4 rounded-lg border border-dashed border-neutral-200 relative overflow-hidden">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.98,
                filter: "blur(10px)",
              }}
              whileHover={{
                opacity: 1,
                scale: 1.02,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="absolute inset-0 h-full w-full bg-white rounded-lg divide-y divide-neutral-200"
            >
              <div className="p-4 text-black text-xs flex items-center">
                <IconMessage className="h-5 w-5 text-neutral-600 me-2" />
                Send a message to your teammates
              </div>
              <div className="p-4 text-black text-xs flex items-center">
                <IconHeart className="h-5 w-5 text-neutral-600 me-2" />
                Like and favorite your content
              </div>
              <div className="p-4 text-black text-xs flex items-center">
                <IconBell className="h-5 w-5 text-neutral-600 me-2" />
                Stay up to date with notifications
              </div>
              <div className="p-4 text-black text-xs flex items-center">
                <IconSettings className="h-5 w-5 text-neutral-600 me-2" />
                Configure app settings quickly
              </div>
              <div className="p-4 text-black text-xs flex items-center">
                <IconCheck className="h-5 w-5 text-neutral-600 me-2" />
                Tasks completed successfully
              </div>
            </motion.div>
          </div>

          {/* Close Button at Bottom */}
          <div className="mt-4 flex items-center justify-center">
            <button
              onClick={() => setOpen(false)}
              className="text-black flex items-center gap-1 text-xs shadow-md rounded-md px-3 py-1 hover:bg-neutral-100 transition"
            >
              Close
              <IconX className="h-4 w-4 text-neutral-700" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
