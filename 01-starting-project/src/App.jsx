import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton/TabButton.jsx"


function App() {

    function clickHandler(selectedButton) {
        console.log(selectedButton);
    }

    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcepts {...CORE_CONCEPTS[0]} />
                        <CoreConcepts {...CORE_CONCEPTS[1]} />
                        <CoreConcepts {...CORE_CONCEPTS[2]} />
                        <CoreConcepts {...CORE_CONCEPTS[3]} />
                    </ul>
                </section>

                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton clickFunc={() => clickHandler('components')}>Components</TabButton>
                        <TabButton clickFunc={() => clickHandler('jsx')}>JSX</TabButton>
                        <TabButton clickFunc={() => clickHandler('props')}>Props</TabButton>
                        <TabButton clickFunc={() => clickHandler('state')}>State</TabButton>
                    </menu>

                </section>
                <h2>Time to get started!</h2>
            </main>
        </div>
    );
}

export default App;
