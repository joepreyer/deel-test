type HighlightedTextProps = {
    text: string;
    highlight: string;
}

const HighlightedText = ({ text, highlight }: HighlightedTextProps) => {
    if (!highlight) return <>{text}</>;
    const regexp = new RegExp(`(${highlight})`, 'gi');
    const parts = text.split(regexp);
    return (
        <>
            {parts.map((part, index) =>
                <span className={part.toLowerCase() === highlight.toLowerCase() ? "highlighted" : ""} key={index}>
                    {part}
                </span>
            )}
        </>
    )
};

export default HighlightedText;