import "./TabContent.css";
export default function TabContent({ title, description, code }) {
    return (
        <div id="tab-content">
            <h3>{title}</h3>
            <p>{description}</p>
            <pre>
                <code id="code-block">{code}</code>
            </pre>
            {/* {content.children} */}
        </div>
    );
}
