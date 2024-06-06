import Letter from './Letter.js'

export default function Word({children}) {
    const word = children;

    const createWord = (word) => {
        return word.split('').map((x, index) => <Letter key={word + "-" + index}>{x}</Letter>);
    };
    
    return (
        <div key={word} className="wordClass">
            {createWord(word)}
        </div>
    )
}