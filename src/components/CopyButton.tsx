import { useToast } from "@/hooks/use-toast";
import { Button } from "./ui/button";
import { Toaster } from "./ui/toaster";

export default function CopyButton({
    citationContent: sortedReferences,
}: CitationContentPropsWithoutSet) {
    const { toast } = useToast();

    function copy() {
        const sortedReferences_temp: string[] = [...sortedReferences];
        const formattedCitations = sortedReferences_temp.join("\n");

        navigator.clipboard
            .writeText(formattedCitations)
            .then(() => {
                toast({
                    title: "Reference list copied to clipboard!",
                    description:
                        "Remember to italicize journal name as this is unformatted!",
                });
            })
            .catch((err) => {
                toast({
                    variant: "destructive",
                    title: "Error: Copying failed",
                    description: err,
                });
            });
    }

    return (
        <div>
            <Button
                onClick={() => {
                    copy();
                }}>
                {" "}
                Copy{" "}
            </Button>

            <Toaster />
        </div>
    );
}
