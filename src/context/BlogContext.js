import React, { useReducer, useState } from 'react';
import createDataContext from './createDataContext';

//const BlogContext = React.createContext();

// sử dụng useReducer  khi quản lý nhiều userState
const recuder = (state, action) => {
    switch(action.type) {
        case 'edit_blogPost':
           return state.map(blogPost => {
               return blogPost.id === action.playload.id ? action.playload : blogPost;
           });
        case 'delete_blogPost': 
            return state.filter(blogPost => blogPost.id !== action.playload)
        case 'add_blogPost':
            return [
                ...state,
                { 
                    id: Math.floor(Math.random() * 99999),
                    title: action.playload.title,
                    content: action.playload.content
                }
            ];
        default:
            return state;
    }
}

const addBlogPost = dispatch => {
    // sử dụng khi dùng useState
    /*
    setBlogPosts([
        ...blogPosts,
        { title: `test #${blogPosts.length + 1}`}
    ]);*/

    // sử dụng userReducer
    return (title, content, callback) => {
        dispatch({type: 'add_blogPost', playload: { title, content: content }});
        if(callback){
            callback();
        }
    }
}

const deleteBlogPost = dispatch => {
    return id => {
        dispatch({type: 'delete_blogPost', playload: id})
    }
}

const editBlogPost = dispatch => {
    return (id, title, content, callback) => {
        dispatch({type: 'edit_blogPost', playload: {id, title, content }});
        if(callback){
            callback();
        }
    }
}


// export const BlogProvider = ({ children }) => {
//     //const [blogPosts, setBlogPosts] = useState([]);
//     const [blogPosts, dispatch] = useReducer(recuder, []);
//     const addBlogPost = () => {
//         // sử dụng khi dùng useState
//         /*
//         setBlogPosts([
//             ...blogPosts,
//             { title: `test #${blogPosts.length + 1}`}
//         ]);*/

//         // sử dụng userReducer
//         dispatch({type: 'add_blogPost'});
//     }
//     return <BlogContext.Provider value={{ data : blogPosts, addBlogPost }}>{children}</BlogContext.Provider>
// };


//export default BlogContext;
export const { Context, Provider } = createDataContext(recuder, { addBlogPost, deleteBlogPost, editBlogPost }, []);