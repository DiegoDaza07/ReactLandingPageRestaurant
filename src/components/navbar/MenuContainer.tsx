
import './MenuContainer.css';

type Props = {
    changeStatusMenu: () => void,
    statusMenu: boolean,
}

const MenuContainer: React.FC<Props> = ({ changeStatusMenu, statusMenu }) => {
    return (

        <div onClick={() => changeStatusMenu()}
            className={`icon nav-icon-5 ${statusMenu ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
        </div>

    );
}

export default MenuContainer;