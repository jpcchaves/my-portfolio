import {
  Banner,
  H1Banner,
  Header,
  HomeWrapper,
  Img,
  ImgWrapper,
  P,
  DownloadCurriculo,
  ButtonDownload,
} from "../../styles/Home.style";
import BgImg from "../../assets/home-bg-img/header-bg-img.jpg";

const Home = () => {
  return (
    <HomeWrapper>
      <ImgWrapper>
        <Img src={BgImg} alt="Imagem de Fundo" />
      </ImgWrapper>
      <Banner>
        <H1Banner>Desenvolvedor FrontEnd</H1Banner>
        <P>João Paulo</P>
        <ButtonDownload>
          <DownloadCurriculo>Download Currículo</DownloadCurriculo>
        </ButtonDownload>
        :
      </Banner>
    </HomeWrapper>
  );
};

export default Home;
