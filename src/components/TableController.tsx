"use client";

import { useState } from "react";
import DymanicTable from "./DymanicTable";
import SortedDisplay from "./SortedDisplay";

export default function TableController() {
    const [citationContent, setCitationContent] = useState<string[]>([""]);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-10">
            <div className="grid-cols-1 lg:col-span-6">
                <DymanicTable
                    citationContent={citationContent}
                    setCitationContent={setCitationContent}
                />
            </div>

            <div className="grid-cols-1 mt-10 lg:col-span-4 lg:mt-0">
                <SortedDisplay
                    citationContent={citationContent}
                    setCitationContent={setCitationContent}
                    className="bg-slate-50 min-h-[78vh] lg:h-[78vh] rounded lg:overflow-hidden lg:overflow-y-scroll lg:scrollbar-thin lg:scrollbar-thumb-slate-500 lg:scrollbar-track-slate-200"
                />
            </div>
        </div>
    );
}
