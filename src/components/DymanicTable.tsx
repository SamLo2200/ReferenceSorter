"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";

export default function DymanicTable() {
    const [citationContent, setCitationContent] = useState<string[]>([
        "test1",
        "test2",
        "test3",
    ]);
    // const [citationCount, setCitationCount] = useState<number>(0);

    const handleChange = (
        index: number,
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newCitationContent = [...citationContent];
        newCitationContent[index] = event.target.value;
        setCitationContent(newCitationContent);
        console.log(newCitationContent);
    };

    return (
        <div>
            {citationContent.map((citation: string, index: number) => {
                return (
                    <div
                        className="citationInsert flex flex-col my-5"
                        key={index}>
                        <div>
                            <label>Citation {index + 1}</label>
                            <Input
                                placeholder="Enter your citation here"
                                name="citation"
                                onChange={(e) => handleChange(index, e)}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
