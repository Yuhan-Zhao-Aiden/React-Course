import { useState } from "react";

import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";
import TabContent from "./components/TabContent/TabContent.jsx";

function App() {
    const [selectedTopic, setSelectedTopic] = useState();

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
                        {/* <CoreConcepts {...CORE_CONCEPTS[0]} />
                        <CoreConcepts {...CORE_CONCEPTS[1]} />
                        <CoreConcepts {...CORE_CONCEPTS[2]} />
                        <CoreConcepts {...CORE_CONCEPTS[3]} /> */}
                        {CORE_CONCEPTS.map((element) => (
                            <CoreConcepts key={element.title} {...element} />
                        ))}
                    </ul>
                </section>

                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton
                            isClicked={selectedTopic === "components"}
                            clickFunc={() => setSelectedTopic("components")}
                        >
                            Components
                        </TabButton>
                        <TabButton
                            isClicked={selectedTopic === "jsx"}
                            clickFunc={() => setSelectedTopic("jsx")}
                        >
                            JSX
                        </TabButton>
                        <TabButton
                            isClicked={selectedTopic === "props"}
                            clickFunc={() => setSelectedTopic("props")}
                        >
                            Props
                        </TabButton>
                        <TabButton
                            isClicked={selectedTopic === "state"}
                            clickFunc={() => setSelectedTopic("state")}
                        >
                            State
                        </TabButton>
                    </menu>
                    {selectedTopic ? (
                        <TabContent {...EXAMPLES[selectedTopic]} />
                    ) : (
                        <p>Please select a topic.</p>
                    )}
                </section>
                <h2>Time to get started!</h2>
            </main>
        </div>
    );
}

export default App;
