import { Avatar, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const ProfilePic = props => {

    return (
        <Space direction='vertical' align='center'>
            <Avatar 
                size={102} 
                icon={<UserOutlined/>}
            />
        </Space>
    )
}

export default ProfilePic