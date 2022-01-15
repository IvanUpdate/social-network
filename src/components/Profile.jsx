import React from "react";
import profileStyles from './profile.module.css';


const Profile = () => {
    return (
        <div className={profileStyles.content}>
            <div>
                <img src="http://cdn.cnn.com/cnnnext/dam/assets/181010131059-australia-best-beaches-cossies-beach-cocos3.jpg"></img>
            </div>
            <div>
                ava+description
            </div>
            <div>
                My Posts
                <div>
                    New Post
                </div>
                <div>
                    <div>Post 1</div>
                    <div>Post 2</div>
                    <div>Post 3</div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
