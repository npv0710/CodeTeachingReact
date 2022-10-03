import Column1 from "./Column1";
import Column2 from "./Column2";

import { persons } from "../../data/data";

const Table = (props) => {
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
                        return(
                            <tr key={index}>
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