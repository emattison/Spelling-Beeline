import Letter from './Letter.js'

export default function Word({children, isActive}) {
    const word = children;

    const createWord = (word) => {
        return word.split('').map((x, index) => <Letter key={word + "-" + index}>{x}</Letter>);
    };
    
    return (
        <div key={word} className={"carousel-item " + (isActive ? 'active': '')}>
            {createWord(word)}
        </div>
    )
}