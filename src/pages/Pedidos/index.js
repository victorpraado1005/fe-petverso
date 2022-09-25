import { useState } from 'react';

import { produtos } from '../../utils/mock/produtos';

import {
  Container, ContainerListaProdutos, RowProduct,
  ContainerCarrinho, ContainerCheckout, RowProductCarrinho,
  InfoContainer,
} from './style';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Button from '../../button';

export default function Pedidos() {
  const [carrinho, setCarrinho] = useState([]);
  let valorCarrinho = 0;

  const cart = [];

  carrinho.map((produto) => (
    valorCarrinho += produto.valor
  ));

  function handleAddToCart(produto) {
    let actionId = Math.random();
    let produtoAdd = {
      ...produto,
      actionId,
    };
    cart.push(produtoAdd);
    setCarrinho(cart.concat(carrinho));
  }

  function handleRemoveCart(produto) {
    setCarrinho((prevState) => prevState.filter(
      (produtoCarrinho) => produtoCarrinho.actionId !== produto.actionId,
    ));
  }

  return (
    <>
      <Header />
      <Container>
        <ContainerListaProdutos>
          <h1>Produtos: </h1>
          {produtos.map((produto) => (
            <RowProduct key={produto.id}>
              <InfoContainer>
                <span>{produto.nome}</span>
                <h4>
                  R$
                  {produto.valor}
                </h4>
              </InfoContainer>
              <Button onClick={() => handleAddToCart(produto)}>Adicionar</Button>
            </RowProduct>
          ))}
        </ContainerListaProdutos>
        <ContainerCheckout>
          <h1>Produtos no Carrinho: </h1>
          <ContainerCarrinho>
            {carrinho.map((produto) => (
              <RowProductCarrinho key={produto.actionId}>
                <InfoContainer>
                  <span>{produto.nome}</span>
                  <h4>
                    R$
                    {produto.valor}
                  </h4>
                </InfoContainer>
                <Button onClick={() => handleRemoveCart(produto)}>Remover</Button>
              </RowProductCarrinho>
            ))}
          </ContainerCarrinho>
          <h1>Valor Total: </h1>
          <h3>{valorCarrinho}</h3>
        </ContainerCheckout>
      </Container>
      <Footer />
    </>
  );
}
