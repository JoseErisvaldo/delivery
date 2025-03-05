import { createIngredient } from "@/app/actions/ingredients/createIngredient";

export default function NewIngredient() {
    return (
        <div>
            <form className="flex flex-col gap-4">
                <div>
                    <label className="block text-sm font-medium">Nome</label>
                    <input type="text" name="name" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
                </div>
                <div>
                    <label className="block text-sm font-medium">Preco</label>
                    <input type="text" name="price" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
                </div>
                <button
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
                formAction={createIngredient}>Salvar</button>
            </form>
        </div>
    )
}