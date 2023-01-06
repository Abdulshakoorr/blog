import React, { useState,useEffect } from 'react'
import { getDocs,collection, deleteDoc,doc } from 'firebase/firestore';
import {auth, db } from '../firbase-config';

const Home = ({isAuth}) => {
  const [postData, setPostData] = useState([]);

  const postCollection = collection(db,"blogPost")

  useEffect(() => {

   const getPost = async () => {
      const data = await getDocs(postCollection);
      // console.log(data);
      console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
      setPostData(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
   }
   getPost();
  },[]);
  
const deletePost = async (id) => {
  const postDoc = doc(db,"blogPost",id)
  await deleteDoc(postDoc)
};


  return (
    <div className='px-4 lg:px-36 mt-36'>
      { postData ? postData.map((post)=>{
        return(
          <div key={post.id} className="p-4 bg-amber-100 mb-4 shadow-lg ">
            <div className='flex items-center justify-between'>
             <h2 className='text-xl pb-4'>{post.title}</h2>
             {isAuth && post.auther.id === auth.currentUser.uid && <span onClick={() => {deletePost(post.id)}} className="cursor-pointer hover:text-xl"> &#128465; </span>}
            </div>
            <p>{post.postText}</p>
            <h3 className='py-2'>auther &#128398;: @{post.auther.name}</h3>
          </div>
        )
      }) : "Loading..."}
    </div>
  )
}

export default Home