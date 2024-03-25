export default function TabButton({ children, clickFunc, isClicked }) {

    return (
        <li>
            <button className={isClicked ? "active" : null} onClick={clickFunc}>{ children }</button>
        </li>
    )
}