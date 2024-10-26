interface CitationContentProps {
    citationContent: string[];
    setCitationContent: React.Dispatch<React.SetStateAction<string[]>>;
    className?: string;
}

interface CitationContentPropsWithoutSet {
    citationContent: string[];
    className?: string;
}
