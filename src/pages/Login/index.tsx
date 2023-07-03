import LoginImage from '../../assets/login-side.png';
import LogoImage from '../../assets/iaps-logo.png';
import {useState} from 'react';
import Layout from '../../components/Layout';
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    isLogin ? <Layout>
    Hi, I am children
  </Layout>: (
     <section style={{backgroundColor: "#641C36"}}>
      <div style={{color: 'white'}}>
      <img src={LoginImage} alt='logo' height={'70px'} width={'130px'} style={{margin: '10px auto'}} />
        <aside>
        <img src={LogoImage} alt='logo' height={'70px'} width={'130px'} style={{margin: '10px auto'}} />
          <label htmlFor="email">Email</label>
          <p><input type="email" name="email" id="email" /></p>
          <label htmlFor="password">Password</label>
          <p><input type="password" name="password" id="password" /></p>
        </aside>
      </div>
     </section>
    )
  )
}

export default Login;