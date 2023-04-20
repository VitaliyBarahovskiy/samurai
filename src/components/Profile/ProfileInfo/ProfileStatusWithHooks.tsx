import React, {ChangeEvent, useState} from 'react';


type profileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusWithHooks =  (props: profileStatusPropsType) => {

    let [editMode, setEditMode ] = useState(false)
    let [status, setStatus] = useState(props.status)

    const activeEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

        return (
            <div>
                { !editMode &&
                <div>
                    <span onDoubleClick={activeEditMode}>{props.status || "------"}</span>
                </div>
                }
                {editMode  &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} />
                </div>
                }
         </div>
    );
};

export default ProfileStatusWithHooks;