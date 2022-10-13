import './app.css';

function App() {
    const name = 'ttasjwi';
    return (
        <>
            <h1>Hello! {name}! :)</h1>
            <h1>No Hello! :(</h1>
            {
                name && <h1>Hello! {name} :)</h1> // 단축 평가로 오른쪽 값이 return 된다.
            }
            {
                ['🍎', '🍓', '🍌'].map(item => (
                    <h2>{item}</h2>
                ))
            }
        </>
    );
}

export default App;
