"use client";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { ReactNode } from "react";

type ReusableSheetProps = {
  trigger?: ReactNode; // optionnel, on peut ouvrir manuellement
  title?: string;
  description?: string;
  children: ReactNode;
  footer?: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export function ReusableSheet({
  trigger,
  title,
  description,
  children,
  footer,
  open,
  onOpenChange,
}: ReusableSheetProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      {trigger && <SheetTrigger asChild>{trigger}</SheetTrigger>}
      <SheetContent side="right" className="flex flex-col">
        <SheetHeader>
          {title && <SheetTitle>{title}</SheetTitle>}
          {description && <SheetDescription>{description}</SheetDescription>}
        </SheetHeader>
        <div className="flex-1 overflow-y-auto py-4">{children}</div>
        {footer && <SheetFooter className="mt-auto">{footer}</SheetFooter>}
      </SheetContent>
    </Sheet>
  );
}
