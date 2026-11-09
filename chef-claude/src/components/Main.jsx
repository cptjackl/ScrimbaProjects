import {useState} from 'react'

export default function Main(){
    
    const [ingredients, setIngredients] = useState([])

    const ingredientListItems = ingredients.map(ingredient =>
        <li key={ingredient}>{ingredient}</li>
    )

    function addIngredient(event){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const ingredient = formData.get("ingredient")
        setIngredients(prevIngredients => [... prevIngredients,ingredient])
    }
    
    return(
        <main>
            <form className="add-ingredient-form"
                onSubmit={e =>addIngredient(e)} >
                <input 
                    id="ingredient-input"
                    name="ingredient"
                    type="text" 
                    placeholder="e.g. Oregano"
                    aria-label="Add Ingredient"
                />
                <button>Add Ingredient</button>
            </form>

            <ul>
                {ingredientListItems}
            </ul>

        </main>
    )
}