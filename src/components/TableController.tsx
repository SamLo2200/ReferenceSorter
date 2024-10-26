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

            <div className="grid-cols-1 lg:col-span-4">
                <SortedDisplay
                    citationContent={citationContent}
                    setCitationContent={setCitationContent}
                    className="bg-slate-50 lg:h-[85vh] lg:rounded overflow-hidden overflow-y-scroll scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-slate-200"
                />
            </div>
        </div>
    );
}
