import { Space, Button} from 'antd';
import { NavLink } from 'react-router-dom';

const ButtonEditProf = props => {

    return (
        <>
            <Button type="primary">
                <NavLink to="/profile/edit">Editar Perfil</NavLink>
            </Button>
        </>
    )
}

export default ButtonEditProf