import { Button } from "./ui/button";

export default function CopyButton({
    citationContent: sortedReferences,
}: CitationContentProps) {
    function copy() {
        const sortedReferences_temp: string[] = [...sortedReferences];
        const formattedCitations = sortedReferences_temp.join("\n");

        navigator.clipboard
            .writeText(formattedCitations)
            .then(() => {
                alert("Array copied to clipboard:\n\n" + formattedCitations);
            })
            .catch((err) => {
                console.error("Failed to copy: ", err);
            });
    }

    return (
        <Button
            onClick={() => {
                copy();
            }}>
            {" "}
            Copy{" "}
        </Button>
    );
}
