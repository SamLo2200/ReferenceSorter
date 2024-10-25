"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

export default function DymanicTable() {
    const [citationContent, setCitationContent] = useState<string[]>([
        "test1",
        "test2",
        "test3",
        "test4",
        "test5",
    ]);
    // const [citationCount, setCitationCount] = useState<number>(0);

    function handleChange(
        index: number,
        event: React.ChangeEvent<HTMLInputElement>
    ) {
        const newCitationContent = [...citationContent];
        newCitationContent[index] = event.target.value;
        setCitationContent(newCitationContent);
        console.log(newCitationContent);
    }

    function removeField(index: number) {
        const newCitationContent = [...citationContent];
        newCitationContent.splice(index, 1);
        setCitationContent(newCitationContent);
    }

    return (
        <div>
            {citationContent.map((citation: string, index: number) => {
                return (
                    <div
                        className="citationInsert flex flex-col my-5"
                        key={index}>
                        <div>
                            <label>Citation {index + 1}</label>

                            <div className="grid grid-cols-4 lg:grid-cols-6 gap-4">
                                <Input
                                    placeholder="Enter your citation here"
                                    name="citation"
                                    value={citationContent[index] || ""}
                                    onChange={(e) => handleChange(index, e)}
                                    className="col-span-3 lg:col-span-4"
                                />

                                {index ? (
                                    <Button
                                        variant="destructive"
                                        onClick={(e) => {
                                            removeField(index, e);
                                        }}>
                                        Remove
                                    </Button>
                                ) : null}
                                <div />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
