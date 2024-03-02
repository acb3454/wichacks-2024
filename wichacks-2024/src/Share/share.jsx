import "./share.css"
import Dropdown from 'react-bootstrap/Dropdown';
// import BasicExample from "../Dropdown/dropdown"
// import {} from "@material-ui/icons"

export default function Share() {

    const [desc] = useState([]);

    useEffect(() => {
        setItems(postData);
    }, []);

    const addItem = () => {
        const newItem = {id: items.length + 1, name: ${desc}};
        setItems([...items, newItem]);
    };

    return (
        <div className = "share">
            <div className = "shareWrapper">
                <div className="shareTop"></div>
                    <h2>Username</h2>
                    {/* <input placeholder="What playlist are you creating?" className="shareInput"></input>
                    <hr className = "shareHr"></hr> */}
                <div className="shareBottom">
                    <div className = "shareOptions">
                    <input placeholder="What playlist are you creating?" className="shareInput"></input>
                    <hr className = "shareHr"></hr>
                        <h3>Tags: </h3>
                    </div>
                </div>
                <button className = "shareButton" onClick={addItem}>Share</button>
            </div>
        </div>
    )
}

// let form = document.querySelector('input');
// form.addEventListener('submit', handleSubmit());

// function handleSubmit(event) {
//     event.preventDefault();
//     let formData = new FormData(form);
//     let data = Object.fromEntries(formData);
//     let jsonData = JSON.stringify(data);

//     fetch('http://localhost:3000', {
//             method: POST,
//             headers: {"Content-Type": "application/json"},
//             body: jsonData
//         }).then((res => res.json))
//         .then(result => console.log(result))
//         .catch(err => console.log(err))
// }