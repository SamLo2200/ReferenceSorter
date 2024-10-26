import { useToast } from "@/hooks/use-toast";
import { Button } from "./ui/button";
import { Toaster } from "./ui/toaster";

export default function CopyButton({
    citationContent: sortedReferences,
}: CitationContentPropsWithoutSet) {
    const { toast } = useToast();

    function copy() {
        const sortedReferences_temp: string[] = [...sortedReferences];
        const formattedCitations = sortedReferences_temp.join("\n\n");

        navigator.clipboard
            .writeText(formattedCitations)
            .then(() => {
                toast({
                    title: "Copied!",
                    description:
                        "Remember to italicize journal name as this is unformatted!",
                    duration: 1500,
                });
            })
            .catch((err) => {
                toast({
                    variant: "destructive",
                    title: "Error: Copying failed",
                    description: err,
                    duration: 1500,
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
