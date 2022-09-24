import { Container, ContainerCardDicas, CardDicas } from './style';

import Button from '../../button';

import curiosidade1 from '../../assets/images/curiosidade_1.jpg';
import curiosidade3 from '../../assets/images/curiosidade3.jpg';
import curiosidade2 from '../../assets/images/curiosidade2.jpg';
import curiosidade4 from '../../assets/images/curiosidade4.jpg';

export default function Dicas() {
  return (
    <Container>

      <ContainerCardDicas>
        <CardDicas>
          <img src={curiosidade1} alt="cachorro" className="img-curiosidade" />
          <span className="text-dicas">Filhotinhos! 7 curiosidades sobre cachorros que você deveria saber</span>
          <Button>
            <a href="https://canaldopet.ig.com.br/guia-bichos/cachorros/2022-09-20/cachorros-filhotes-e-curiosidades-sobre-eles.html.ampstories" target="black">
              Acessar
            </a>
          </Button>
        </CardDicas>
        <CardDicas>
          <img src={curiosidade2} alt="cachorro" className="img-curiosidade" />
          <span className="text-dicas">Conheça 12 curiosidades sobre o Maine Coon, o maior gato do mundo</span>
          <Button>
            <a href="https://canaldopet.ig.com.br/guia-bichos/gatos/2022-09-07/maine-coon-curiosidades-sobre-o-maior-gato-do-mundp.html.ampstories" target="black">
              Acessar
            </a>
          </Button>
        </CardDicas>
        <CardDicas>
          <img src={curiosidade3} alt="cachorro" className="img-curiosidade" />
          <span className="text-dicas">Fatos interessantes sobre o Buldogue Francês</span>
          <Button>
            <a href="https://canaldopet.ig.com.br/curiosidades/racas/2022-07-04/cachorro-buldogue-frances-curiosidades.html.ampstories" target="black">
              Acessar
            </a>
          </Button>
        </CardDicas>
        <CardDicas>
          <img src={curiosidade4} alt="cachorro" className="img-curiosidade" />
          <span className="text-dicas">Olhos de gato: funções e curiosidades sobre os olhos dos bichanos</span>
          <Button>
            <a href="https://canaldopet.ig.com.br/curiosidades/2022-06-28/olhos-de-gato-curiosidades.html.ampstories" target="black">
              Acessar
            </a>
          </Button>
        </CardDicas>
      </ContainerCardDicas>
    </Container>
  );
}
