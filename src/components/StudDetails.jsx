const StudDetails = (props) =>{
    return (
        <div>
            <h1>Student Details</h1>
            <p>Student details will be displayed here</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>Student Name</th>
                        <th>Student Age</th>
                        <th>Student Grade</th>
                        </tr>

                </thead>
                <tbody>
                    <tr>
                        <td>{props.id}</td>
                        <td>{props.name}</td>
                        <td>{props.age}</td>
                        <td>{props.grade}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default StudDetails