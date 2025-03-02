import {createContext} from 'react'

const UserContext =  createContext({ 
    user: {
    name: "dummmy_name",
    email: "dummy@gmail",
    location: "dummy Location",
    points: 0,
    id: -1
    }
})

export default UserContext;