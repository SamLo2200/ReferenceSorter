"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";

export default function DymanicTable() {
  const [citationContent] = useState<string[]>([
    "test1",
    "test2",
    "test3",
    "test3",
    "test3",
    "test3",
    "test3",
    "test3",
    "test3",
    "test3",
    "test3",
    "test3",
    "test3",
    "test3",
    "test3",
    "test3",
  ]);
  // const [citationCount, setCitationCount] = useState<number>(0);

  return (
    <div>
      {citationContent.map((citation: string, index: number) => {
        return (
          <div className="citationInsert flex flex-col my-5" key={index}>
            <div>
              <label>Citation {index + 1}</label>
              <Input placeholder="Enter your citation here" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
