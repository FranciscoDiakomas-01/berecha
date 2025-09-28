import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

export function DotBackground({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-[50rem] w-full items-center  bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#3b82f6_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#3b82f6_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,red)] dark:bg-black"></div>

      {children}
    </div>
  );
}
