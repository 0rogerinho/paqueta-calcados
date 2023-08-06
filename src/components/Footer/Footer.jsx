const Footer = () => {
  return (
    <div className="px-[9.375rem] flex justify-between">
      <div className="flex flex-col gap-3 text-sm">
        n<h1 className="text-base font-[700]">Institucional</h1>
        <p>Quem Somos</p>
        <p>Nossas Lojas</p>
        <p>Soluções Corporativas</p>
        <p>Política de Privacidade</p>
        <p>Contrato de Compra e Venda</p>
        <p>Crédito Pessoal</p>
      </div>

      <div className="flex flex-col gap-3 text-sm">
        <h1 className="text-base font-[700]">Ajuda e Suporte</h1>
        <p>Troca e Devolução</p>
        <p>2ª Via do Boleto</p>
        <p>Detalhamento de Fatura</p>
        <p>Entregas</p>
        <p>Meus Pedidos</p>
        <p>Dúvidas Frequentes</p>
        <p>Status do Pedido</p>
      </div>

      <div className="flex flex-col gap-3 text-sm">
        <h1 className="text-base font-[700]">Atendimento</h1>
        <p>Fale Conosco</p>
        <h1 className="text-base font-[700]">Endereço</h1>
        <p>
          Rua Antonio Frederico Ozanan, 2601 Canoas - RS | CNPJ:
          01.098.983/0175-02
        </p>
        <h1 className="text-base font-[700]">Trabalhe Conosco</h1>
        <p>Venha crescer com a Paquetá!</p>
      </div>

      <div className="flex flex-col gap-3 text-sm">
        <h1 className="text-base font-[700]">Formas de Pagamento</h1>
        <img src="Cartoes.png" />
        <h1 className="text-base font-[700]">Redes Sociais</h1>

        <div className="flex  gap-3 text-sm">
          <a href="#">
            <img src="Instagram.svg" />
          </a>
          <a href="#">
            <img src="Facebook.svg" />
          </a>
          <a href="#">
            <img src="Twitter.svg" />
          </a>
          <a href="#">
            <img src="Youtube.svg" />
          </a>
          <a href="#">
            <img src="Pinterest.svg" />
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-3 text-sm">
        <h1 className="text-base font-[700]">Prêmios e Certificações</h1>
        <img className="object-cover" src="Certificado.svg" />
        <h1 className="text-base font-[700]">Segurança</h1>
        <img src="Seguranca.svg" />
      </div>
    </div>
  );
};

export default Footer;
