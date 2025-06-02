import axios from 'axios'
import { div } from 'framer-motion/client'
import React, { useContext, useState } from 'react'
import * as Icon from "react-feather"
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ApiContext } from '../context/ApiContext'
const AddCategory = () => {
    const [categoryname, setCategoryName] = useState("")
    const [image, setImage] = useState(null)
    const { getAllCategories } = useContext(ApiContext)

    const [preview, setPreview] = useState(null); // State to store preview URL

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file)); // Generate preview URL
        }
    };

    // const handleImageChange = (e) => {
    //     setImage(e.target.files[0]); // Store the selected file
    // };

    // const handleCategoryUpload = async (e) => {
    //     e.preventDefault()
    //     console.log(categoryname)
    //     // return
    //     try {
    //         const response = await axios.post("http://localhost:5000/api/v1/admin/createcategory",
    //             { categoryname, image },
    //             {
    //                 headers: {
    //                     'Content-Type': 'multipart/form-data'
    //                 }
    //             }
    //         )
    //         console.log("response", response.data)

    //     } catch (error) {
    //         console.log("error while adding category", error)
    //         toast.error("error adding category")

    //     }
    // }

    const handleCategoryUpload = async (e) => {
        e.preventDefault();

        if (!image) {
            toast.error("Please select an image");
            return;
        }

        // Create FormData object
        const formData = new FormData();
        formData.append("categoryname", categoryname);
        formData.append("image", image); // Append image file

        try {
            const response = await axios.post("https://broddie.menthealventures.com/api/v1/admin/createcategory",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data", // Ensure multipart/form-data is set
                    },
                }
            );

            console.log("response", response.data);
            getAllCategories()
            setCategoryName("")
            setImage(null)
            setPreview(null)
            toast.success("Category added successfully");

        } catch (error) {
            console.error("Error while adding category", error);
            toast.error("Error adding category");
        }
    };



    return (
        <div className='space-y-5'>
            <div className='w-full bg-white shadow rounded-xl space-y-4 p-5'>
                <div className="w-full flex flex-row items-center justify-between">
                    <h1 className="text-2xl font-semibold">Add Category</h1>
                    <Link to="/category/view" className="text-orange-500">View Categories</Link>
                </div>

                <div className="w-full">
                    <form method="post" onSubmit={handleCategoryUpload} action="" className="w-full space-y-3">
                        <div className="w-full flex md:flex-row flex-col items-center md:space-x-6 space-y-2">
                            <div className='space-y-2 w-full'>
                                <label htmlFor="" className="text-neutral-500">Category Name</label>
                                <input
                                    value={categoryname}
                                    onChange={(e) => setCategoryName(e.target.value)}
                                    type="text" placeholder='Add Art category' className="w-full bg-neutral-100 rounded-md p-2" />
                            </div>


                        </div>

                        {/* <div className="w-full flex flex-col md:flex-row items-center md:space-x-6 space-y-2">
                            
                            <div className='space-y-2 w-full flex flex-col'>
                                <label htmlFor="" className="text-neutral-500">Category</label>
                                <select name="" id="" className='h-10 rounded-md bg-neutral-100 p-2'>
                                    <option value="" className='text-neutral-500' selected>Meal Category</option>
                                    <option value="" className='text-neutral-500'>Dinner</option>
                                    <option value="" className='text-neutral-500'>Soups</option>
                                    <option value="" className='text-neutral-500'>Breakfast</option>
                                </select>
                            </div>

                        </div> */}


                        <div className="w-full flex flex-row items-center space-x-6">

                            <div className='space-y-2 w-full'>
                                <label htmlFor="" for="drop" className="text-neutral-500 cursor-pointer">
                                    <div className="w-full border border-neutral-200 min:h-40 py-5 flex flex-col space-y-3 justify-center items-center rounded-xl">
                                        <Icon.DownloadCloud />
                                        <p className="text-neutral-500">Upload png,jpg,jpeg</p>
                                        <p className="text-neutral-500">Category Image</p>
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
                                    onChange={handleImageChange} id='drop' type="file" placeholder='edit phone' className="w-full hidden bg-neutral-100 rounded-md p-2" />
                            </div>


                        </div>
                        <div className="w-full justify-end items-end flex flex-row">
                            <button className="p-2 bg-black rounded-md text-white text-md w-40">
                                Add Category
                            </button>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    )
}

export default AddCategory
