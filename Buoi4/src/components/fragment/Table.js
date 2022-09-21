import Column1 from "./Column1";
import Column2 from "./Column2";
import './Table.css';
import { persons } from "../../data/data";

const Table = () => {
    //var foo=[1,2].map(function(){return this.length},[4,6,8,10]);
    var foo=[1,2].map(function(item){return this + item}, 10);
    console.log(foo)
    return (
        <table>
            <thead>
                <tr>
                    <th>Full Name</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>
                {/* <tr>
                    <Column1 />
                </tr>
                <tr>
                    <Column1 />
                    <Column2 />
                </tr> */}
                {
                    persons.map((person, index) => {
                        return (
                            <tr key={person.id}>
                                <td>{person.firstName + ' ' + person.lastName}</td>
                                <td>{person.username}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default Table;