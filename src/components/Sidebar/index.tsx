import Items from './Items'
import LogoImage from '../../assets/iaps-logo.png'; 


const Sidebar = () => {
  return (
    <div style={{ backgroundColor: '#641c36', color: 'whitesmoke',minWidth: 340, maxWidth: 340, height: '100vh' }}>
        <img src={LogoImage} alt='logo'  style={{marginTop: '40px', backgroundColor: '#FFF'}} />
        <Items />

    </div>
  )
}

export default Sidebar;