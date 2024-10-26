import CopyButton from "./CopyButton";

export default function SortedDisplay({
    citationContent,
    className,
}: CitationContentProps) {
    const citationContent_arr_temp: string[] = [...citationContent];

    return (
        <div className={className}>
            <div className="p-7">
                <div className="flex flex-row justify-between items-center">
                    <p className="font-bold pb-3 text-base"> Sorted List: </p>
                    <CopyButton citationContent={citationContent_arr_temp} />
                </div>

                <hr className="my-2 mb-3"></hr>

                <div className="reference-list flex flex-col gap-3">
                    {citationContent_arr_temp
                        .sort()
                        .filter((citation) => citation !== "")
                        .map((citation: string, index: number) => {
                            return (
                                <div
                                    className={
                                        index % 2 === 0
                                            ? "bg-gray-50 rounded p-2 truncate"
                                            : "bg-gray-100 rounded p-2 truncate"
                                    }
                                    key={index}>
                                    {citation}
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}
