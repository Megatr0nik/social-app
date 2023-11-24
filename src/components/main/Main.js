
import './main.css';
import img from './bird.png';


const Main = (userData) => {


    console.log(userData)





    return (

        <div className="main-container">
            <header className="title">
                <span>BiRdie </span>
                <img src={img} alt="logo" width="32" height="32" />
            </header>
            {/* <nav className="nav-top">навігація</nav> */}
            <div className='content-container'>
                {/* <aside className='content-left'>контент зліва</aside> */}
                <section className="main-content">Основний контент</section>
                <aside className='content-right'>контент справа</aside>
            </div>

            <footer className='footer'>підвал</footer>
        </div>
    );
}


export default Main;