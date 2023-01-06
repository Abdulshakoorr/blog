import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firbase-config";
import { useNavigate } from "react-router-dom";


const CreatePost = ({isAuth}) => {
  const [title, setTitle] = useState("")
  const [postText, setPostText] = useState("")


const navigate = useNavigate();

const postCollection = collection(db,"blogPost")

const createPost = async () =>{
  await addDoc(postCollection,{title,postText,auther: {name: auth.currentUser.displayName, id:auth.currentUser.uid}});
  navigate('/')
}
// auth config for auth.currentUser
useEffect(()=>{
  if(!isAuth){
    navigate('/login')
  }
},[])

  return (
    <main className="px-36 bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-[95vh]">
      <section className="cp-container  h-96 rounded mt-10 py-6 px-8 ">
        <h2 className="font-sm text-white text-center text-xl">
          Create Post &#9997;
        </h2>
        <div className="input-container flex items-center justify-center gap-4 flex-col mt-10">
            <div className="input-group">
              {/* <label className="text-white">Title: </label> */}
              <input type="text" placeholder="enter your title here..." onChange={(e) =>{
                  setTitle(e.target.value)
              }} className="rounded py-2 px-4 w-96 shadow-sm shadow-gray-800 border-hidden outline-none"/>
            </div>
            <div className="input-group">
              {/* <label className="text-white">Post: </label> */}
              <textarea placeholder="Post..."  className="w-96 h-96 rounded p-4 shadow-sm shadow-gray-800 border-hidden outline-none" onChange={(e) =>{
                setPostText(e.target.value)
              }}/>
            </div>
            <button className="bg-white p-2 rounded  shadow-sm shadow-gray-800 w-96 hover:bg-sky-900 hover:text-slate-200" onClick={createPost}>Post</button>
        </div>
        {/* testing inputs... */}
        {/* {title} <br />
        {postText} */}
      </section>
    </main>
  );
};

export default CreatePost;
