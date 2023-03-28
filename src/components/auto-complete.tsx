import { useEffect, useState } from "react"
import SuggestionsList from "./suggestions-list"

type AutoCompleteProps = {
    fetchCities: (searchTerm: string) => Promise<string[]>;
}

const Autocomplete = ({ fetchCities }: AutoCompleteProps) => {
    const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([])
    const [showSuggestions, setShowSuggestions] = useState(false)
    const [userInput, setUserInput] = useState("")
    const [activeSuggestion, setActiveSuggestion] = useState(0)

    useEffect(() => {
        const delayDebounceFn = setTimeout(async () => {
            const cities = await fetchCities(userInput)
            const filteredCities = !!cities && cities.filter((name: string) => name.toLowerCase().indexOf(userInput.toLowerCase().trim()) > -1)
            !!filteredCities && setFilteredSuggestions(filteredCities)
        }, 300)

        return () => {
            clearTimeout(delayDebounceFn)
        }
    }, [userInput, fetchCities])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setUserInput(value)
        setActiveSuggestion(0)
        if (value.length > 0) setShowSuggestions(true)
        else setShowSuggestions(false)
    }

    const onSuggestionClick = (value: string) => {
        setFilteredSuggestions([])
        setShowSuggestions(false)
        setUserInput(value)
    }

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setUserInput(filteredSuggestions[activeSuggestion])
            setShowSuggestions(false)
        }
        else if (e.key === 'ArrowUp') {
            e.preventDefault()
            if (activeSuggestion === 0) {
                return
            }
            setActiveSuggestion(activeSuggestion - 1)
        } else if (e.key === 'ArrowDown') {
            e.preventDefault()
            if (activeSuggestion - 1 === filteredSuggestions.length) {
                return
            }
            setActiveSuggestion(activeSuggestion + 1)
        }
    }

    return (
        <div className="autocomplete-container">
            <input onKeyDown={onKeyDown} className="autocomplete-input" type="text" onChange={e => onChange(e)} value={userInput} />
            {showSuggestions && <SuggestionsList activeSuggestion={activeSuggestion} suggestions={filteredSuggestions} onSuggestionClick={onSuggestionClick} userInput={userInput} />}
        </div>
    )
}

export default Autocomplete