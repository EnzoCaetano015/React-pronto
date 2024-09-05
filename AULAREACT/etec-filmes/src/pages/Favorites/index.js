import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Favorites.module.css";


function Favorites(){

    return(

        <>
        
        <Header></Header>

        <Container>

        <h2>Meus Favoritos</h2>
        
        <section className={styles.favorites}>

        </section>

        </Container>

        <Footer></Footer>
        
        </>

    );

}

export default Favorites;