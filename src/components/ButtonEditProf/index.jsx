import { Space, Button} from 'antd';
import { NavLink } from 'react-router-dom';

const ButtonEditProf = () => {

    return (
        <>
            <Button type="primary">
                <NavLink to="/perfil/edit">Editar Perfil</NavLink>
            </Button>
        </>
    )
}

export default ButtonEditProf