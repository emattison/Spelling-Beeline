import Letter from './Letter.js'

export default function Word({children, isActive, className}) {
    const word = children;

    const createWord = (word) => {
        return word.split('').map((x, index) => <Letter key={word + "-" + index}>{x}</Letter>);
    };
    
    return (
        <div key={word} className={"carousel-item float-none " + (isActive ? 'active': '') + ' ' + className} style={{width: 'fit-content'}}>
            {createWord(word)}
        </div>
    )
}