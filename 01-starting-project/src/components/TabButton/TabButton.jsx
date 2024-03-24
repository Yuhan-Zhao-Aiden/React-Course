export default function TabButton({ children, clickFunc }) {

    return (
        <li>
            <button onClick={clickFunc}>{ children }</button>
        </li>
    )
}