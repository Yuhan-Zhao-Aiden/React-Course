import { useState } from "react";

import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";
import TabContent from "./components/TabContent/TabContent.jsx";

function App() {

    const [ selectedTopic, setSelectedTopic ] = useState("components");

    function clickHandler(selectedButton) {
        setSelectedTopic(selectedButton);
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
                        <TabButton clickFunc={() => clickHandler("components")}>
                            Components
                        </TabButton>
                        <TabButton clickFunc={() => clickHandler("jsx")}>
                            JSX
                        </TabButton>
                        <TabButton clickFunc={() => clickHandler("props")}>
                            Props
                        </TabButton>
                        <TabButton clickFunc={() => clickHandler("state")}>
                            State
                        </TabButton>
                    </menu>
                    <TabContent number={6} {...EXAMPLES[selectedTopic]}>
                        <h2>Hello World</h2>
                        <p>This is a test</p>
                    </TabContent>

                </section>
                <h2>Time to get started!</h2>
            </main>
        </div>
    );
}

export default App;
