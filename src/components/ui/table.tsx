import * as React from "react";
import { cn } from "@/lib/utils";

export function Table({ className, ...props }: React.TableHTMLAttributes<HTMLTableElement>) {
  return (
    <table
      className={cn("min-w-full border border-gray-200 text-sm", className)}
      {...props}
    />
  );
}

export function THead(props: React.HTMLAttributes<HTMLTableSectionElement>) {
  return <thead className="bg-gray-50" {...props} />;
}

export function TRow(props: React.HTMLAttributes<HTMLTableRowElement>) {
  return <tr className="border-b" {...props} />;
}

export function TCell(props: React.TdHTMLAttributes<HTMLTableCellElement>) {
  return <td className="px-3 py-2" {...props} />;
    }
