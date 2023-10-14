import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";
import fotoJu from "assets/foto_ju.jpeg";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Lucas!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Lucas Bailo sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou aluno de Front-end na Alura e estou feliz de te ver por aqui.
            </p>
            <p className={styles.paragrafo}>
                Minha história com programação começou no quando decidi estudar Engenharia de Produção na (UNIP) em São José do Rio Preto/SP, onde havia conseguido bolsa integral pelo PROUNI. O máximo de contato que tive com a programação nesse curso foi a lógica de programação, que aprendemos e fizemos prova em folha de papel, com lápis e caneta. Até então não imaginava como seria meu futuro com a Engenharia.
            </p>
            <p className={styles.paragrafo}>
                Já na faculdade, consegui um estágio não remunerado em uma metalúrgica de José Bonifácio/SP. Após um tempo de procura, com minhas habilidades em excel, finalmente consegui um estágio remunerado em uma empresa de produtos hospitalares em São José do Rio Preto. Nessa mesma empresa consegui meu primeiro trabalho de carteira assinada após 6 meses de estágio.
            </p>
            <p className={styles.paragrafo}>
                Já havia terminado a faculdade então, resolvi mudar de empresa pois estava me sentindo deixado de lado, então comecei a enviar currículos. Uma semana depois fui chamado para uma entrevista em uma empresa de consórcios na mesma cidade, passei nos testes, entrei para empresa e finalmente me mudei para Rio Preto, pois eu ia para lá de ônibus todo santo dia.
            </p>
            <p className={styles.paragrafo}>
                Nessa empresa me inscrevi para o programa Trainee duas vezes e só no segundo ano que fui aprovado. Durante o programa de trainee, senti que se aproveitaram muito da minha capacidade já que eu não tinha mais banco de horas, então eu trabalhava o dia todo praticamente. Logo no início do programa, já perdi 2 colaboradores do time, que foram para outras empresas e, 2 meses depois, meu chefe mudou de área, me deixando sozinho em uma área que era de 4 pessoas. Com isso, mesmo sendo trainee, tive que entrevistar, contratar e treinar pessoas, praticamente fazendo o papel de gestor da área, apenas na função, mas nada em papel assinado. Após a finalização do programa trainee, fui efetivado para Pleno, e não achei muito justo devido a quantidade de entregas que eu havia feito no ano do programa.

            </p>
            <p className={styles.paragrafo}>
                Conversei com minha gestão e me disseram que não fazia sentido eu estar incomodado com o resultado do programa, então os questionei sobre um plano de carreira, pois queria saber o que iria acontecer comigo, já que não aguentava trabalhar mais de 13/14 horas por dia, comandar um time que eu tive que levantar quase do zero, e não ser promovido para sequer Sênior ou Especialista, mesmo executando as funções de um Coordenador. Com isso, não recebi o retorno durante duas semanas de cobrança e decidi sair da empresa. Me inscrevi em uma vaga pelo LinkedIn e acabei sendo aprovado para uma vaga Sênior em uma StartUp da área de logística em Cajamar/SP, para onde me mudei e morei 8 meses. Passados esses 8 meses a empresa teve um LayOff e demitiu 505 funcionários, entre eles, estava eu.
            </p>
            <p className={styles.paragrafo}>
                Já triste e desacreditado, pois tudo estava dando errado, decidi dar um tempo para minha cabeça, havia passado por 3 anos de muita pressão psicológica e abusos, então voltei a morar com meus pais em José Bonfácio. Foi aí que resolvi estudar programação. Comecei com Python e depois encontrei o HTML/CSS, no qual gostei muito do Front-End, o que hoje eu mais estudo para me aperfeiçoar.
            </p>
            <p className={styles.paragrafo}>
                Atualmente não estou trabalhando com isso, mas sim utilizo meu diploma de Engenharia para dar aulas de matemática e física em uma escola estadual aqui da cidade.
                Espero que consiga algo na área ainda em 2023, mas não tenho tanta confiança nisso, as vagas estão muito exigentes. Porém, não vou desistir.
            </p>
            <p className={styles.paragrafo}>
                <b>Obs:</b> Ainda não fui chamado para nenhuma entrevista.
            </p>
            <img
                src={fotoJu}
                alt="Foto do Lucas Bailo sorrindo"
                className={styles.fotoSobreMim}
            />
            <p className={styles.paragrafo}>
                No mais, não posso reclamar das casualidades que me trouxeram até aqui no momento. No final de 2022 sofri um acidente que poderia ter sido letal e saí de lá praticamente ileso. Também, voltando para cá, conheci o amor da minha vida, como vocês podem ver na foto ao lado. Praticamente a única coisa que me bota para cima e me dá forças para continuar lutando é ela, sou muito grato por tudo que ela é e faz por mim.
            </p>
            <p className={styles.paragrafo}>
                Por fim, comecei um novo hobby, a corrida. Comecei caminhando para fazer minha "reabilitação" pós acidente e fui me permitindo a correr. Depois de alguns meses fiz minha primeira prova de corrida (7km), em Holambra/SP, onde eu e a Ju tivemos uma viagem maravilhosa apesar do trânsito e da chuva no caminho de ida. Em novembro, faremos nossa primeira corrida juntos em São Paulo (capital) e no dia seguinte vamos assistir um show da banda que a Ju tanto gosta, The Lumineers.
            </p>
            <p className={styles.paragrafo}>
                É só o começo!
            </p>
            
        </PostModelo>
    )
}