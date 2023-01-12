 const data = JSON.parse(localStorage.getItem('todo')) || [
    {
        id: 1,
        name: "Something to do",
        completed: false
    },
    {
        id: 2,
        name: "Something to do 2",
        completed: false
    },
    {
        id: 3,
        name: "Something to do 3",
        completed: false
    }
]

export default data;