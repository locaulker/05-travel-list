import React from "react"

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false }
]

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  )
}

function Logo() {
  return <h1>🏝 Far Away 👜</h1>
}

function Form() {
  return (
    <div className="add-form">
      <h3>What do need for your 😍 trip?</h3>
    </div>
  )
}

// Making a list of Items(Components) for each array element
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  )
}

// Item component generated from each iteration of the map() function
function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  )
}

function Stats() {
  return (
    <footer className="stats">
      <em>💼 You have X items in your list, and you already packed X (X%)</em>
    </footer>
  )
}
