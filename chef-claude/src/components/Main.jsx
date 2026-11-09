import {useState} from 'react'

export default function Main(){
    
    const [ingredients, setIngredients] = useState([])

    const ingredientListItems = ingredients.map(ingredient =>
        <li key={ingredient}>{ingredient}</li>
    )

    function addIngredient(formData){
        const ingredient = formData.get("ingredient")
        
        if (ingredient != ''){
        setIngredients(prevIngredients => [... prevIngredients,ingredient])
        }
    }
    
    return(
        <main>
            <form className="add-ingredient-form"
                action={addIngredient} >
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