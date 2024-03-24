import reactImg from "../../assets/react-core-concepts.png";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function getRandomInt(max) {
    return Math.floor((max + 1) * Math.random());
}

export default function Header() {
    return (
        <header>
            <img src={ reactImg } alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                { reactDescriptions[getRandomInt(2)] } React concepts you will need for almost any app you
                are going to build!
            </p>
        </header>
    );
}

