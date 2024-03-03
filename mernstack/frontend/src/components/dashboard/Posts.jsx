import React, {useState, useEffect} from 'react';
import { DialogForm } from './DialogForm';
import axios from 'axios';
import toast from 'react-hot-toast';
import Post from './Post';


export default function Posts () {
    const [postsData, setPostsData] = useState(null);
    const [loadig, setLoading] = useState(false)


    useEffect(() => {
    const readUserPosts = async () => {
        setLoading(true)
        try{

            const {data} = await axios.get('/api/post/get-user-posts');
            setPostsData(data);
            setLoading(false)
        }catch (error){
            toast.error(error.response.data.message || "Login Failed");
            console.error('Login error', error.response.data)
            setLoading(false)
        }
    }
    readUserPosts();
}, [])

const handleDelete = async (postId) => {
    if(!confirm("are you sure to delete post")) return
    const previousPosts = [...postsData]
    const updatedPosts = postsData.filter(post => post._id !== postId)
    setPostsData(updatedPosts)
    try{
        const { data } = await axios.delete('/api/post/delete-post/' +
        postId);
        setLoading(false)
    } catch (error) {
        setPostsData(previousPosts);
        toast.error(error.response.data.message ||"Login Failed");
        console.error('Login error', error.response.data)
        setLoading(false)
    }
}
    return(
        <div>
            <div className='my-10'>
            <DialogForm />
            </div>

            {loadig && <h1>Loading...</h1>}
            <div className='grid grid-cols-3 gap-4'>
                {postsData?.map(post => (
                    <Post key={post._id} post={post} 
                    onDelete={handleDelete}
                    />
                ))}
            </div>
        </div>
    )
}
