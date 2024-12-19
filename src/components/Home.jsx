import React from "react"

const Home = (props) => {
    return (
        <>
            <div className="home">
                <h1>this is home page</h1>
            </div>

            <h1>displaying diff datatypes</h1>
            <p>String : {props.name}</p>
            <p>Number : {props.age}</p>
            <p>Boolean : {props.bool ? 'True' : 'False'}</p>
            <p>Array : {props.arr}</p>
            <p>Object : {props.obj.id} {props.obj.name}</p>
        </>
    )
}

export default Home