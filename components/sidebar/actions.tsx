"use client";

import { Plus } from "lucide-react";

import ActionTooltip from "@/components/action-tooltip";
import { ModalStore } from "@/store/ModalStore";


export const Actions = () => {

  const { onOpen } = ModalStore();
  
  return (
    <div>
      <ActionTooltip
        side="right"
        align="center"
        label="Add a server"
      >
        <button
          onClick={() => onOpen("createServer")}
          className="group flex items-center"
        >
          <div className="flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-[#f97316]">
            <Plus
              className="group-hover:text-white transition text-[#f97316]"
              size={25}
            />
          </div>
        </button>
      </ActionTooltip>
    </div>
  )
}