import React, {useState} from 'react';


type profileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusWithHooks =  (props: profileStatusPropsType) => {

    useState(false)

        return (
            <div>
                {
                <div>
                    <span>{'status ---> ' + props.status}</span>
                </div>
                }
                {false  &&
                <div>
                    <input autoFocus={true} value={""}/>
                </div>
                }
         </div>
    );
};

export default ProfileStatusWithHooks;