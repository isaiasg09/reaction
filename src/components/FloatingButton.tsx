import { ComponentProps, ReactNode } from "react";

export interface FloatingButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
}

export function FloatingButton(props: FloatingButtonProps) {
  return (
    <button
      className="flex items-center gap-2 py-1 px-2 rounded min-2-[280px] hover:bg-zinc-600 transition focus:bg-zinc-600 outline-none"
      {...props}
    />
  );
}
