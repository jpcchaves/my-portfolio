import {
  Banner,
  H1Banner,
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
    <>
      <HomeWrapper>
        <ImgWrapper>
          <Img src={BgImg} alt="Imagem de Fundo" />
        </ImgWrapper>
        <Banner>
          <H1Banner>Desenvolvedor Front-End</H1Banner>
          <P>João Paulo</P>
          <ButtonDownload>
            <DownloadCurriculo
              href="https://www.canva.com/design/DAFBKz1wcpc/l33t00PoMuDisCGkyzEh3g/view"
              download
              target="_blank"
            >
              Currículo
            </DownloadCurriculo>
          </ButtonDownload>
          :
        </Banner>
      </HomeWrapper>
    </>
  );
};

export default Home;
