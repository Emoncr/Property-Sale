import { React, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AiFillEdit } from "react-icons/ai";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { firebaseApp } from '../firebase.js'
import { loddingStart, userDeleteFail, userDeleteSuccess, userUpdateFailed, userUpdateSuccess } from '../redux/user/userSlice.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';




const Profile = () => {
  const { currentUser } = useSelector(state => state.user)
  const [file, setFile] = useState(undefined);
  const [uploadingPerc, setUploadingPerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});
  const fileRef = useRef(null);
  // const [loading, setLoading] = useState(false)


  const { loading } = useSelector((state => state.user))

  const dispatch = useDispatch();
  const navigate = useNavigate()



  const handleFileUpload = (file) => {
    if (file) {
      const fireBaseStorage = getStorage(firebaseApp);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(fireBaseStorage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on("state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadingPerc(Math.round(progress));
        },
        (error) => {
          setFileUploadError(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(downloadUrl => {
            setFormData({ ...formData, avatar: downloadUrl });
          });
        }
      );
    }
  }

  useEffect(() => {
    handleFileUpload(file)
  }, [file])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true)
    try {
      dispatch(loddingStart())
      const res = await fetch(`api/users/update/${currentUser._id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const userData = await res.json();


      //===checking reqest success or not ===//
      if (userData.success === false) {
        dispatch(userUpdateFailed(userData.message))

        //===showing error in tostify====//
        toast.error(userData.message, {
          autoClose: 2000,
        })
      }
      else {
        dispatch(userUpdateSuccess(userData))
        toast.success('Profile updated successfully', {
          autoClose: 2000,
        })
      }
    } catch (error) {
      dispatch(userUpdateFailed(error.message))
      toast.error(error.message, {
        autoClose: 2000,
      })
    }
  }

  const handleDelete = async () => {
    try {
      dispatch(loddingStart())
      const res = await fetch(`api/users/delete/${currentUser._id}`, {
        method: 'DELETE'
      })
      const resData = await res.json();
      //===checking reqest success or not ===//
      if (resData.success === false) {
        dispatch(userDeleteFail(resData.message))

        //===showing error in tostify====//
        toast.error(resData.message, {
          autoClose: 2000,
        })
      }
      else {
        dispatch(userDeleteSuccess())
      }

    } catch (error) {
      dispatch(userDeleteFail(error.message))
      toast.error(error.message, {
        autoClose: 2000,
      })
    }
  }




  return (
    <section className='py-10 sm:py-20'>
      <div className="container !max-w-7xl mx-auto grid md:gap-8 temp lg:grid-cols-4  md:grid-cols-5 grid-cols-1 ">
        <div className="profile_info p-5 bg-white border-[1px] w-full rounded-md shadow-brand md:col-span-2 lg:col-span-1 col-span-1 ">



          <form className='w-full' onSubmit={handleSubmit} >
            <div className='mb-3'>
              <div className="image_container w-full flex items-center justify-center  relative max-w-[100px] mx-auto">

                <input onChange={(e) => setFile(e.target.files[0])}
                  hidden accept='image/*'
                  type="file" name="profile"
                  id="profile_image"
                  ref={fileRef}
                />

                <img src={formData.avatar || currentUser.avatar} onClick={() => fileRef.current.click()} className='h-24 w-24 mb-3 rounded-full border-[1px]  border-brand-blue' alt="profile image" />
                <i className='h-6 w-6 rounded-full flex items-center justify-center bg-brand-blue text-white absolute bottom-3 right-0'><AiFillEdit /></i>
              </div>

              {
                fileUploadError ? (
                  <p className='text-xs text-red-700 font-medium text-center'>File upload failed</p>
                ) : uploadingPerc > 0 && uploadingPerc < 100 ? (
                  <p className='text-xs text-black font-medium text-center'>File uploading...{uploadingPerc}%</p>
                ) : uploadingPerc === 100 && (
                  <p className='text-xs text-green-600 font-medium text-center'>File uploaded!!!</p>
                )
              }
            </div>


            <label className='text-left font-heading text-sm pl-1 '>Username</label>
            <input
              defaultValue={currentUser.username}
              name='username'
              type="text" placeholder="Username"
              className="form_input bg-slate-200 rounded-md !pl-3 mt-1 !border-[1px] focus:!border-brand-blue mb-3"
              onChange={handleChange}
            />


            <label className='text-left font-heading text-sm pl-1 '>Email</label>
            <input
              defaultValue={currentUser.email}
              name='email'
              type="email" placeholder="Username"
              className="  form_input bg-slate-200 rounded-md !pl-3 !border-[1px] focus:!border-brand-blue mb-3"
              onChange={handleChange}
            />


            <label className='text-left font-heading text-sm pl-1 '>Password</label>
            <input
              type="password"
              name='password'
              placeholder="Password"
              className="mt-1  form_input bg-slate-200 rounded-md !pl-3 !border-[1px] focus:!border-brand-blue"
              onChange={handleChange}
            />

            <button disabled={loading} type='submit' className='py-2 px-5 bg-brand-blue text-white rounded-md w-full mt-4 hover:opacity-90'>
              {
                loading ? 'Loading...' : 'Save Changes'
              }
            </button>

          </form>
          <div className="btn_container">
            <div className=" flex justify-between items-center md:flex-col xl:flex-row">
              <button className='md:w-full xl:w-auto py-2 px-5 bg-brand-blue text-white rounded-md font-content  mt-2 hover:opacity-90 text-sm'>Create Post</button>

              <button onClick={handleDelete} className='md:w-full xl:w-auto py-2 px-5 bg-red-800  text-white font-content rounded-md mt-2 hover:opacity-90 text-sm'>Delete
              </button>
            </div>
          </div>
        </div>


        {/*======== post section start here ========= */}
        <div className=" mt-5 md:mt-0 col-span-3 post_section profile_info p-5 bg-white border-[1px] w-full rounded-md shadow-brand">
          <h1>post section</h1>
        </div>
      </div>
      <ToastContainer />
    </section>
  )
}

export default Profile