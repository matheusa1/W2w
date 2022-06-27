import { Avatar } from 'antd';

const ProfilePic = props => {

    return (
        <>
            <Avatar 
                size={102} 
                src={props.Pic}
            />
        </>
    )
}

export default ProfilePic