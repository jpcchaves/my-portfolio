import { HomeWrapper, Img, ImgWrapper } from "../../styles/Home.style";
import BgImg from "../../assets/home-bg-img/header-bg-img.jpg";

const Home = () => {
  return (
    <HomeWrapper>
      <ImgWrapper>
        <Img src={BgImg} alt="Imagem de Fundo" />
      </ImgWrapper>
    </HomeWrapper>
  );
};

export default Home;
