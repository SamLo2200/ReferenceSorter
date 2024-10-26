"use client";

import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

export default function DymanicTable() {
    const [citationContent, setCitationContent] = useState<string[]>([""]);

    // Capture text in input onChange event and store it into array
    function handleChange(
        index: number,
        event: React.ChangeEvent<HTMLInputElement>
    ) {
        const newCitationContent = [...citationContent];
        newCitationContent[index] = event.target.value;
        setCitationContent(newCitationContent);
        console.log(newCitationContent);
    }

    // Remove element from array
    function removeField(index: number) {
        const newCitationContent = [...citationContent];
        newCitationContent.splice(index, 1);
        setCitationContent(newCitationContent);
    }

    // Add element to array
    function addField() {
        setCitationContent([...citationContent, ""]);
    }

    // Scroll to bottom function
    const bottomRef = useRef<HTMLDivElement>(null);

    function scrollToBottom() {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <div className="grid grid-flow-row grid-cols-6 gap-4">
            <div className="col-span-6">
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
                                            onClick={() => {
                                                removeField(index);
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

            <Button
                className="col-span-2 bg-green-500"
                onClick={() => {
                    addField();
                    scrollToBottom();
                }}>
                Add
            </Button>
            <div ref={bottomRef}></div>
        </div>
    );
}
