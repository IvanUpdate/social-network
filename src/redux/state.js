import {avatar_image} from "../services/constants";
import {rerenderEntireTree} from "../render";

export let state = {
    profilePage: {
        posts: [
            {
                id: 1,
                likes: 5,
                message: "I am dragging tags from the dropdown list to a text-area but I want the tag's text as non-editable how I can achieve this. You can see in the GIF that the text in Text-area is editable now."
            },
            {id: 2, likes: 35, message: "hi"},
            {id: 3, likes: 0, message: "how are you today?"},
        ],
    },

    dialogsPage: {
        messages: [
            {id: 1, message: "Hi Ivan"},
            {id: 2, message: "How are you"},
            {id: 3, message: "Wonderful day"},
            {id: 4, message: "Really?"},
            {id: 5, message: "Enjoy"},
        ],
        dialogs: [
            {id: 1, name: "Ivan", image: avatar_image},
            {id: 2, name: "Ilya", image: avatar_image},
            {id: 3, name: "Timofey", image: avatar_image},
            {id: 4, name: "Inna", image: avatar_image},
            {id: 5, name: "Anna", image: avatar_image},
            {id: 6, name: "Marta", image: avatar_image}
        ],
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likes: 0,
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}
