import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Card from "../../components/Card";
import Header from "../../components/Header";
import Category, {categorias, filterCategory} from "../../components/Category";
import { useState } from "react";

function Home() {

  
  function pegarNome(event){

    setNome(event.target.value)

  }

  //Hook = gancho
  const [nome, setNome] = useState()

  return (
    <>
      <Header/>
      <Banner image="home" />
      <Container>

        <input type="text" placeholder="Nome" onChange={pegarNome}></input>

        <h2>{nome}</h2>

        {/* {categorias.map((category, index) =>
          <Category category={category}>
            { filterCategory(index).map((video) => <Card id={video.id} key={video.id} /> )}
          </Category>
        )} */}

      </Container>      
      <Footer/>
    </>
  );
}

export default Home;