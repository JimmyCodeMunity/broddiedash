import { div } from 'framer-motion/client'
import React, { useContext, useState } from 'react'
import * as Icon from "react-feather"
import { Link } from 'react-router-dom'
import { ApiContext } from '../context/ApiContext'
import { toast } from 'react-toastify'
import axios from 'axios'
const AddMeal = () => {
    const { categories, getAllArt } = useContext(ApiContext)
    const [artname, setArtname] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [images, setImage] = useState(null)

    // const handleImageChange = (e) => {
    //     setImage(e.target.files[0]); // Store the selected file
    // };

    const [preview, setPreview] = useState(null); // State to store preview URL

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file)); // Generate preview URL
        }
    };

    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (cat) => {
        setCategory(cat.categoryname);
        setIsOpen(false);
    };


    const handleMealUpload = async (e) => {
        e.preventDefault();
        console.log("art", artname)

        if (!images) {
            toast.error("Please select an image");
            return;
        }

        // Create FormData object
        const formData = new FormData();
        formData.append("artname", artname);
        formData.append("price", price);
        formData.append("description", description);
        formData.append("category", category);
        formData.append("image", images); // Append image file

        try {
            // console.log("form data",formData.mealname)
            // return
            const response = await axios.post("https://broddie.menthealventures.com/api/v1/admin/createart",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data", // Ensure multipart/form-data is set
                    },
                }
            );

            console.log("response", response.data);
            getAllMeals()
            setArtname("")
            setPrice("")
            setDescription("")
            setCategory("")
            setImage(null);
            setPreview(null)
            toast.success("Category added successfully");

        } catch (error) {
            console.error("Error while adding category", error);
            toast.error("Error adding category");
        }
    }
    return (
        <div className='space-y-5'>
            <div className='w-full bg-white shadow rounded-xl space-y-4 p-5'>
                <div className="w-full flex flex-row items-center justify-between">
                    <h1 className="text-2xl font-semibold">Add Art</h1>
                    <Link to="/meals/view" className="text-orange-500">View Art</Link>
                </div>

                <div className="w-full">
                    <form method="post" onSubmit={handleMealUpload} action="" className="w-full space-y-3">
                        <div className="w-full flex md:flex-row flex-col items-center md:space-x-6 space-y-2">
                            <div className='space-y-2 w-full'>
                                <label htmlFor="" className="text-neutral-500">Art Name</label>
                                <input
                                    value={artname}
                                    onChange={(e) => setArtname(e.target.value)}
                                    type="text" placeholder='edit art name' className="w-full bg-neutral-100 rounded-md p-2" />
                            </div>
                            <div className='space-y-2 w-full'>
                                <label htmlFor="" className="text-neutral-500">Price</label>
                                <input
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    type="text" placeholder='enter price' className="w-full bg-neutral-100 rounded-md p-2" />
                            </div>

                        </div>
                        <div className="w-full flex md:flex-row flex-col items-center md:space-x-6 space-y-2">

                            <div className='space-y-2 w-full'>

                                <label htmlFor="" className="text-neutral-500">Description</label>
                                <textarea id="message" rows="4" class="block p-2.5 w-full text-sm  bg-neutral-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="art description..."></textarea>

                            </div>

                        </div>

                        <div className="w-full flex flex-col md:flex-row items-center md:space-x-6 space-y-2">

                            {/* <div className='space-y-2 w-full flex flex-col'>
                                <label htmlFor="" className="text-neutral-500">Category</label>
                                <select
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    name="" id="" className='h-10 rounded-md bg-neutral-100 p-2'>
                                    <option value="" className='text-neutral-500' selected>Meal Category</option>
                                    {
                                        categories.map((cat) => {
                                            return (
                                                <option value={cat.categoryname} className='text-neutral-500'>{cat.categoryname}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div> */}

                        </div>
                        <div className="relative w-full">
                            {/* Dropdown Button */}
                            <div
                                className="h-10 rounded-md bg-neutral-100 p-2 flex items-center justify-between cursor-pointer border border-gray-300"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                {category ? (
                                    <div className="flex items-center space-x-2">
                                        <img src={`https://broddie.menthealventures.com/${categories.find((cat) => cat.categoryname === category)?.image}`}
                                            alt={category} className="h-6 w-6 rounded-full object-cover" />
                                        <span>{category}</span>
                                    </div>
                                ) : (
                                    <span className="text-neutral-500">Art Category</span>
                                )}
                                <span>▼</span>
                            </div>

                            {/* Dropdown List */}
                            {isOpen && (
                                <div className="absolute w-full bg-white border border-gray-300 rounded-md mt-1 shadow-md z-10">
                                    {categories.map((cat) => (
                                        <div
                                            key={cat.categoryname}
                                            onClick={() => handleSelect(cat)}
                                            className="flex items-center space-x-2 p-2 hover:bg-gray-200 cursor-pointer"
                                        >
                                            <img src={`https://broddie.menthealventures.com/${cat.image}`} alt={cat.categoryname} className="h-6 w-6 rounded-full object-cover" />
                                            <span>{cat.categoryname}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>


                        <div className="w-full flex flex-row items-center space-x-6">

                            <div className='space-y-2 w-full'>
                                <label htmlFor="" for="drop" className="text-neutral-500 cursor-pointer">
                                    <div className="w-full border border-neutral-200 min:h-14 py-5 flex flex-col space-y-3 justify-center items-center rounded-xl">
                                        <Icon.DownloadCloud />
                                        <p className="text-neutral-500">Upload png,jpg,jpeg</p>
                                        <p className="text-neutral-500">Meal Image</p>
                                        {/* Image Preview */}
                                        {preview && (
                                            <div className="w-full flex justify-center">
                                                <img src={preview} alt="Preview" className="h-20 w-20 object-cover rounded-md" />
                                            </div>
                                        )}
                                    </div>
                                </label>
                                <input

                                    name="image"
                                    accept="image/png, image/jpeg, image/jpg"
                                    required
                                    onChange={handleImageChange}
                                    id='drop' type="file" placeholder='edit' className="w-full hidden bg-neutral-100 rounded-md p-2" />
                            </div>


                        </div>
                        <div className="w-full justify-end items-end flex flex-row">
                            <button type="submit" className="p-2 bg-black rounded-md text-white text-md w-40">
                                Add Art
                            </button>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    )
}

export default AddMeal
