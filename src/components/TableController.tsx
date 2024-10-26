"use client";

import { useState } from "react";
import DymanicTable from "./DymanicTable";
import SortedDisplay from "./SortedDisplay";

export default function TableController() {
    const [citationContent, setCitationContent] = useState<string[]>([""]);

    return (
        <div className="">
            <div className="">
                <DymanicTable
                    citationContent={citationContent}
                    setCitationContent={setCitationContent}
                />
            </div>

            <SortedDisplay
                citationContent={citationContent}
                setCitationContent={setCitationContent}
            />
        </div>
    );
}
