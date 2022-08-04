import React, {useState} from "react";

function NewPlantForm({onAddPlant}) {
  const [form, setForm] = useState({
    name: "",
    image: "",
    price: 0
  })

  function handleChange(e) {
    const {name, value} = e.target
    setForm(form=> ({...form, [name] : value}))
  }
  function handleSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:6001/plants", {
      method : "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })
    .then(r=>r.json())
    .then(data => onAddPlant(data))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={form.name} onChange={handleChange}/>
        <input type="text" name="image" placeholder="Image URL" value={form.image} onChange={handleChange} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={form.price} onChange={handleChange} />
        <button type="submit" >Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
