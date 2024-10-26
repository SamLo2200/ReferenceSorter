import { useEffect, useState } from "react";

export default function SortedDisplay({
    citationContent,
}: CitationContentProps) {
    const citationContent_arr_temp: string[] = [...citationContent];

    return (
        <div>
            {citationContent_arr_temp
                .sort()
                .map((citation: string, index: number) => {
                    return <div key={index}>{citation}</div>;
                })}
        </div>
    );
}
