import HighlightedText from "./highlighted-text"

type SuggestionsListProps = {
    activeSuggestion: number;
    suggestions: Array<string>;
    onSuggestionClick: (suggestion: string) => void;
    userInput: string;
}

const SuggestionsList = ({ activeSuggestion, suggestions, onSuggestionClick, userInput }: SuggestionsListProps) => {

    return (
        <div className="suggestions-container">
            {suggestions.length > 0 ? (
                <ul className="suggestions-list">
                    {suggestions.map((suggestion, index) => (
                        <li className={index === activeSuggestion ? `list-item active` : 'list-item'} key={index} onClick={() => onSuggestionClick(suggestion)}>
                            <HighlightedText text={suggestion} highlight={userInput.trim()} />
                        </li>
                    ))}
                </ul>
            )
                :
                <div>No suggestions found...</div>}
        </div>
    )
}

export default SuggestionsList