import { useState } from "react"
import { toast } from "react-toastify";
import CategoryForm from "../../components/CategoryForm";

import {
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  useFetchCategoriesQuery,
} from "../../redux/api/categoryApiSlice";


const CategoryList = () => {
  const { data: categories } = useFetchCategoriesQuery();
   const [name, setName] = useState('')
   const [selectedCategory, setSelectedCategory] = useState(null) 
   const [updateName, setUpdateName] = ('')
   const [modaVisable, setModalVisable] = useState(false)

   const [createCategory] = useCreateCategoryMutation()
   const [updateCategory] = useUpdateCategoryMutation()
   const [deleteCategory] = useDeleteCategoryMutation()

   const handleCreateCategory = async (e) => {
    e.preventDefault()

    if(!name) {
      toast.error('category name is needed')
      return
    }

    try {
      const result = await createCategory({name}).unwrap()
      if (result.error) {
        toast.error(result.error)
      } else {
        setName("")
        toast.success(`${result.name} is added`)
      }


    } catch (error){
      console.error(error)
      toast.error('Adding category failed, try again')
    }

   }



  return(
  <div className="ml-[10erem] flex flex-col md:flex-row">
    {/* <AdminMenu /> */}

    <div className="md:w-3/4 p-3">
    <h1 className="h-12">Manage Categories </h1>

    <CategoryForm
          value={name}
          setValue={setName}
          handleSubmit={handleCreateCategory} />
          <br />
          <hr />

          <div className="flex flex-wrap">
          {categories?.map((category) => (
            <div key={category._id}>
              <button
                className="bg-white border border-pink-500 text-pink-500 py-2 px-4 rounded-lg m-3 hover:bg-pink-500 hover:text-white focus:outline-none foucs:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
                onClick={() => {
                  {
                    setModalVisible(true);
                    setSelectedCategory(category);
                    setUpdatingName(category.name);
                  }
                }}
              >
                {category.name}
              </button>
            </div>
          ))}
        </div>
          </div>

    </div>


  


  ) 
};

export default CategoryList