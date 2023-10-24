import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import React, { useState } from 'react'
import { firebaseApp } from '../firebase';
import { ToastContainer, toast } from 'react-toastify';




const CreatePost = () => {
    const [imageFile, setImageFile] = useState([]);
    const [uploadError, setUploadError] = useState({
        isError: false,
        message: ''
    })
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        imageURL: [],
    })




    const handleImageUpload = async () => {

        if (imageFile.length > 0 && imageFile.length + formData.imageURL.length < 7) {
            setLoading(true)
            const promises = [];
            for (let i = 0; i < imageFile.length; i++) {
                promises.push(uploadToFirebase(imageFile[i]))
                Promise.all(promises).then((urls) => {
                    setFormData({ ...formData, imageURL: formData.imageURL.concat(urls) })
                    setLoading(false)
                }).catch((error) => {
                    setUploadError({ ...uploadError, isError: true, message: error.message })
                    console.log(error);
                    setLoading(false)
                })
            }
        }
        else {
            setUploadError({ ...uploadError, isError: true, message: 'Maximum 6 images are allowed' })
            setLoading(false)
        }

    }

    const uploadToFirebase = (file) => {
        return new Promise((resolve, reject) => {
            const storage = getStorage(firebaseApp);
            const fileName = new Date().getTime() + file.name;
            const storageRef = ref(storage, fileName);
            const uploadTask = uploadBytesResumable(storageRef, file);

            //===Start Uploading===//
            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                },
                (error) => {
                    reject('File uploaded Falied')

                },

                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        resolve(downloadURL)
                    });
                }
            )
        })
    }

    const handleDelete = (index) => {
        setFormData({ ...formData, imageURL: formData.imageURL.filter((items) => items != formData.imageURL[index]) })
    }



    uploadError.isError && toast.error(uploadError.message, {
        autoClose: 2000,
    })


    console.log(formData);
    return (
        <main>
            <section>
                <div className="container py-7 md:py-16 max-w-5xl">
                    <h1 className='text-center text-2xl font-heading font-bold text-black'>Create a Listing</h1>
                    <div className="mt-8 form_container">
                        <form >
                            <div className='feilds_container grid gap-5 md:gap-10  grid-col-1 md:grid-cols-2 items-start  '>
                                <div className="info_container">
                                    <div className="input_feilds">

                                        <input type="text" required placeholder='Property name' name='title' className='form_input border-[1px]  focus:border-brand-blue rounded-md placeholder:text-sm ' min={10} max={50} />


                                        <textarea type="text" required placeholder='Description' name='description' className='form_input border-[1px]  focus:border-brand-blue rounded-md placeholder:text-sm mt-3' />


                                        <input type="text" placeholder='Address' name='title' required className='form_input border-[1px]  focus:border-brand-blue rounded-md placeholder:text-sm mt-3' />
                                    </div>


                                    <div className="additional_info mt-6 max-w-xs">

                                        <div className="property_type">
                                            <p className='font-heading text-black'>Select property type</p>

                                            <div className="form-control mt-2">
                                                <label className="label cursor-pointer flex items-center justify-start gap-2
                                            ">
                                                    <input type="radio" name="radio-10" className="radio w-5 h-5  checked:bg-brand-blue" required />
                                                    <span className="label-text font-medium">For Sale</span>
                                                </label>
                                            </div>
                                            <div className="form-control ">
                                                <label className="label cursor-pointer flex items-center justify-start gap-2
                                            ">
                                                    <input type="radio" name="radio-10" className="radio w-5 h-5 checked:bg-brand-blue" required />
                                                    <span className="label-text font-medium">For Rent</span>
                                                </label>
                                            </div>
                                        </div>


                                        <div className="property_info mt-3">
                                            <p className='font-heading text-black'>Genarel Information</p>
                                            <div className="max-w-[150px] flex items-center justify-between gap-2 mt-2">
                                                <span className='label-text font-medium'>Bedrooms</span>
                                                <input defaultValue={1} className='border-2 focus:border-brand-blue rounded-md max-w-[50px] py-1 px-2 bg-transparent' min={1} max={10} type="number" name="beds" id="beds" />
                                            </div>
                                            <div className="max-w-[150px] flex items-center justify-between gap-2 mt-1">
                                                <span className='label-text font-medium'>Bathrooms</span>
                                                <input defaultValue={1} className='border-2 focus:border-brand-blue rounded-md max-w-[50px] py-1 px-2 bg-transparent' min={1} max={10} type="number" name="beds" id="beds" />
                                            </div>
                                        </div>



                                        <div className="additional_feature mt-3">
                                            <p className='font-heading text-black'>Additional Information</p>
                                            <div className="form-control">
                                                <label className="label cursor-pointer flex items-center justify-start gap-2">
                                                    <input type="checkbox" className="checkbox w-5 h-5 border-gray-400 rounded-full checked:bg-brand-blue" />
                                                    <span className="label-text font-medium" >Parking</span>
                                                </label>
                                                <label className="label cursor-pointer flex items-center justify-start gap-2">
                                                    <input type="checkbox" className="checkbox w-5 h-5 border-gray-400 rounded-full checked:bg-brand-blue" />
                                                    <span className="label-text font-medium" >Furnished</span>
                                                </label>

                                                <label className="label cursor-pointer flex items-center justify-start gap-2">
                                                    <input type="checkbox" className="checkbox w-5 h-5 border-gray-400 rounded-full checked:bg-brand-blue" />
                                                    <span className="label-text font-medium" >Do you have any discount?</span>
                                                </label>
                                            </div>
                                        </div>


                                        <div className=" mt-1">
                                            <div className="pricing_info flex flex-col">
                                                <p className="mt-3  font-heading text-black">Regular Price </p>
                                                <span className='text-sm font-content font-bold text-red-900'>($ /month)</span>
                                                <div className="flex flex-row mt-2 ">
                                                    <span className="flex items-center bg-grey-lighter rounded rounded-r-none px-2 font-bold text-grey-darker text-xl">$</span>
                                                    <input type="number" name="price" className="bg-slate-100 p-2 rounded-md text-grey-darkest border-2 focus:border-brand-blue font-bold text-red-700 text-lg max-w-[200px]" />
                                                </div>
                                            </div>
                                            <div className="pricing_info flex flex-col">
                                                <p className="mt-3  font-heading text-black">Discount Price </p>
                                                <span className='text-sm font-content font-bold text-red-900'>($ /month)</span>
                                                <div className="flex flex-row mt-2 ">
                                                    <span className="flex items-center bg-grey-lighter rounded rounded-r-none px-2 font-bold text-grey-darker text-xl">$</span>
                                                    <input type="number" name="price" className="bg-slate-100 p-2 rounded-md text-grey-darkest border-2 focus:border-brand-blue font-bold text-red-700 text-lg max-w-[200px]" />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div>
                                    <p className='font-content text-[16px] mb-3 font-normal text-black'>
                                        <span className='font-semibold mr-1'>Note:</span>
                                        First image will be cover image (max:6)
                                    </p>
                                    <div className="image_upload_container md:p-5 md:border-2 bg-transparent border-dashed rounded-sm md:flex items-center justify-center gap-2">

                                        <input
                                            onChange={(e) => setImageFile(e.target.files)}
                                            multiple accept='image/*' type="file" required
                                            className={`file-input file:bg-brand-blue bg-red-00 ${loading ? "md:w-4/6" : 'md:w-4/5'} w-full`} />
                                        <button
                                            disabled={loading}
                                            onClick={handleImageUpload}
                                            type='button' className={`'w-full text-green-600 text-sm py-2 border-2 border-green-600 rounded-md mt-2 uppercase font-heading  ${loading ? "md:w-2/6" : 'md:w-1/5'} md:h-[3rem] md:mt-0 duration-500 hover:shadow-lg`}>
                                            {
                                                loading ? 'Uploading...' : 'Upload'
                                            }
                                        </button>
                                    </div>
                                    <div>
                                        {
                                            formData.imageURL.length > 0 && formData.imageURL.map((imgSrc, index) => {
                                                return (
                                                    <div key={index} className="uploaded_images p-2 pr-5 border-2 mt-4  rounded-md flex items-center justify-between">
                                                        <img src={imgSrc} alt="property Image" className='w-24 h-20 object-cover rounded-md' />
                                                        <button
                                                            onClick={() => handleDelete(index)}
                                                            type='button'
                                                            className='font-medium text-lg text-red-700 flex items-center underline hover:opacity-75'>Delete</button>
                                                    </div>
                                                )
                                            })
                                        }
                                        <div className="post_btn mt-7">
                                            <button className='w-full bg-brand-blue text-xl tracking-wider font-heading rounded-md hover:opacity-90 duration-300 text-white p-3 '>Create Post</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <ToastContainer />
            </section>
        </main>
    )
}

export default CreatePost