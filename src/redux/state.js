export let state = {
    profilePage: {
        posts: [
            {
                id: 1,
                likes: 5,
                message: "I am dragging tags from the dropdown list to a text-area but I want the tag's text as non-editable how I can achieve this. You can see in the GIF that the text in Text-area is editable now."
            },
            {id: 2, likes: 35, message: "hi"},
            {id: 2, likes: 0, message: "how are you today?"},
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
            {id: 1, name: "Ivan"},
            {id: 2, name: "Ilya"},
            {id: 3, name: "Timofey"},
            {id: 4, name: "Inna"},
            {id: 5, name: "Anna"},
            {id: 6, name: "Marta"}
        ],
    }


}
