import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['sandeep', 'rahul', 'anand', 'sandeep']
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)

    const persons = [
        {
            id: 1,
            name: 'Sandeep',
            age: 25,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Anand',
            age: 26,
            skill: 'Data Entry'
        },
        {
            id: 3,
            name: 'Rahul',
            age: 25,
            skill: 'Logistic'
        },
        {
            id: 4,
            name: 'Rahul',
            age: 27,
            skill: 'Technical'
        },
        {
            id: 5,
            name: 'Rahul',
            age: 28,
            skill: 'Data Entry'
        }
    ]

    const personList = persons.map((p, index) => <Person key={index} person={p} />)

    return <div>{personList}</div>

    /* const names = ['Sandeep', 'Anand', 'Rahul']
    const nameList = names.map(name => <h2>{name}</h2>)
    return <div>{nameList}</div> */
}

export default NameList