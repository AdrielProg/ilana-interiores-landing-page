import React from "react";
import "../styles/home.css";

function Home() {
  return (
    <div className="container-home pt-5">
      {/* mb -> margin-bottom - parametro unidade até 5 */}
      <div className="my-dashed-line bg-light d-flex justify-content-center">
        <h2>COMO DAR INÍCIO AO MEU PROJETO?</h2>
      </div>
      <div className="home-content  bg-light">
        <article className="py-2 m-2 px-5 d-flex flex-column align-items-center">
          <h3 className>No primeiro contato</h3>
          <p>
            Seu primeiro contato conosco envolverá o envio de fotos do local,
            medidas e plantas baixas. Teremos uma conversa para entender melhor
            suas necessidades e encontrar a proposta de projeto que melhor
            atenda a elas.
          </p>
        </article>

        <section>
          <article className="py-2 m-2 px-5 d-flex flex-column align-items-center">
            <h3>Briefing detalhado</h3>
            <p>
              Após definirmos os valores, faremos um briefing detalhado para
              conhecer mais sobre você, sua rotina, seus sonhos e sua
              idealização para o projeto. Nesse momento, é importante que o
              criativo fale mais alto, compartilhando ideias e referências sem
              reservas!
            </p>
          </article>
        </section>

        <section>
          <article className="py-2 m-2 px-5 d-flex flex-column align-items-center">
            <h3>Primeira proposta</h3>
            <p>
              O nosso próximo encontro será crucial, pois após muita reflexão e
              trabalho, apresentaremos a primeira proposta para suas soluções.
              Um dia repleto de imaginação, com a visualização de imagens e
              perspectivas em 3D realistas do seu projeto.
            </p>
          </article>
        </section>

        <section>
          <article className="py-2 m-2 px-5 d-flex flex-column align-items-center">
            <h3>Próximos encontros</h3>
            <p>
              Nossos próximos encontros serão ainda mais emocionantes! Após um
              intenso diálogo e trabalho conjunto, apresentaremos o primeiro
              estudo sobre o seu projeto. Nossas apresentações são didáticas e
              visuais, com foco em perspectivas em 3D, desenhos e amostras de
              materiais para esclarecer todas as dúvidas. Após a aprovação da
              concepção inicial, continuaremos desenvolvendo o seu projeto até
              chegar à fase de planejamento da obra.
            </p>
          </article>
        </section>
      </div>
    </div>
  );
}

export default Home;
