import React, { useState} from 'react'
import "./CreateUser.css"
import { useDispatch } from 'react-redux'
import { addToUsers } from '../../context/usersSlice'
import { v4 as uuidv4 } from 'uuid'

function CreateUser() {
  const [name, setName] = useState("")
  const [profession, setProfession] = useState("")
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    let newUser = {
      id: uuidv4(),
      name,
      profession,
      age: +age,
      gender
    }
    dispatch(addToUsers(newUser))
    setAge("")
    setGender("")
    setName("")
    setProfession("")
  }
  return (
    <div className='create__user'>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit} className='create__user-form' action="">
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='name' />
        <input value={profession} onChange={(e) => setProfession(e.target.value)} type="text" placeholder='profession' />
        <input value={age} onChange={(e) => setAge(e.target.value)} type="number" placeholder='age' />
        <select value={gender} onChange={(e) => setGender(e.target.value)} name="" id="">
          <option value="">gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}

export default CreateUser