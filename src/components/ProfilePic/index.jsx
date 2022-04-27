import { Avatar, Space } from 'antd';

const ProfilePic = props => {

    return (
        <Space direction='vertical' align='center'>
            <Avatar 
                size={102} 
                src={props.Pic}
            />
        </Space>
    )
}

export default ProfilePic