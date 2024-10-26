"use client";

import { useState } from "react";
import DymanicTable from "./DymanicTable";

export default function TableController() {
    const [citationContent, setCitationContent] = useState<string[]>([""]);

    return (
        <DymanicTable
            citationContent={citationContent}
            setCitationContent={setCitationContent}
        />
    );
}
