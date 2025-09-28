import * as React from "react";

export function Tabs({
  tabs,
  current,
  onChange,
}: {
  tabs: string[];
  current: string;
  onChange: (tab: string) => void;
}) {
  return (
    <div className="flex space-x-4 border-b">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`py-2 ${
            tab === current
              ? "border-b-2 border-blue-600 font-semibold"
              : "text-gray-500 hover:text-black"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
