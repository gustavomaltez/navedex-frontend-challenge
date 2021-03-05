

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://nave.rs">
    <img src="docs/logo.svg" alt="Logo" width="100%" height="80">
  </a>

  <h3 align="center">NaveDex - Front-end Challenge</h3>

  <p align="center">
    Aplicação web feita para o desafio da nave.rs da vaga de Dev FrontEnd
    <br />
    <a href="/"><strong>Acessar aplicação »</strong></a>
    <br />
</p>

<!-- TABLE OF CONTENTS -->
<details open="false">
  <summary>Sumário (clique para abrir)</summary>
  <ol>
    <li><a href="#sobre-o-projeto">Sobre o projeto</a></li>
    <li><a href="#diferenciais">Diferenciais</a></li>
    <li><a href="#pré-visualização">Pré-visualização</a></li>
    <li><a href="#bibliotecas utilizadas">Bibliotecas utilizadas</a></li>
    <li><a href="#acesse-a-aplicação">Acesse a aplicação</a></li>
    <li><a href="#tecnologias-utilizadas">Tecnologias utilizadas</a></li>
    <li><a href="#padronização-de-código">Padronização de código</a></li>
    <li><a href="#instalação">Instalação</a></li>
    <li><a href="#tempo-de-desenvolvimento">Tempo de desenvolvimento</a></li>
    <li><a href="#dificuldades-e-aprendizados">Dificuldades e aprendizados</a></li>
    <li><a href="#contato">Contato</a></li>
    <li><a href="#licença">Licença</a></li>
  </ol>
</details>


## Sobre o projeto
Esse projeto foi desenvolvido como um desafio para a vaga de desenvolvedor front-end na empresa [nave.rs](https://nave.rs/). Ele consiste basicamente em em uma web app para visualização e criação dos navers, possuindo informações como: nomes, idades, cargos, tempo de empresa e projetos que participou. Todo o design da aplicação foi feito seguindo fielmente os [protótipos do figma](https://www.figma.com/file/II8UDFm2uJFZaD0FOPcinP/Teste-Fornt-End) disponibilizados

## Diferenciais:
* Aplicação totalmente responsiva.
* Animações suaves em todos os componentes.
* Animações de carregamento de conteúdo.
* Toasts informativos.
* Componentes e funções tipadas.
* Código desenvolvido pensando na escalabilidade da aplicação (hooks e componentes reutilizáveis)

## Pré-visualização
<div align="center">
    <img src="/docs/preview.gif" width="80%"/>
</div>

## Bibliotecas utilizadas

Para o desenvolvimento desse projeto foram utilizadas algumas bibliotecas para permitir uma maior personalização.
* [axios](https://www.npmjs.com/package/axios) - Para requisições http.
* [date-fns](https://www.npmjs.com/package/date-fns) - Para conversão de datas e cálculo de tempo.
* [react-content-loader](https://www.npmjs.com/package/react-content-loader) - Para as animações de pré-carregamento dos cards.
* [react-icons](https://www.npmjs.com/package/react-icons) - Para os icones utilizados.
* [react-router-dom](https://www.npmjs.com/package/react-router-dom) - Para criação de páginas e rotas autenticadas.
* [react-spring](https://www.npmjs.com/package/react-spring) - Para animações de componentes em sequência.
* [styled-components](https://styled-components.com/) - Para estilizar de forma escopada os componentes.
* [uuid](https://www.npmjs.com/package/uuid) - Para gerar identificadores únicos para componentes.

## Acesse a aplicação

Uma versão da última build desse projeto está online e se encontra hospedada na Vercel, você pode acessa-la [clicando aqui](https://github.com/gustavomaltez/). Para fazer login você pode utilizar tanto as minhas credenciais, quanto as credenciais de exemplo fornecidas pela nave.

<strong>Credenciais de exemplo<strong/>
```sh
   email: testing-user@nave.rs
   senha: nave1234
```

<strong>Minhas credenciais<strong/>
```sh
   email: gustavomaltez@nave.rs
   senha: gustavonavers
```

NOTA: Ambas as credenciais são somente para fins de testes e a divulgação delas nesse documento não compromete nenhum risco à empresa/funcionários reais, visto que a aplicação é apenas para fins de demonstração.

## Tecnologias utilizadas
Visando o desenvolvimento de uma aplicação escalável, de fácil entendimento e manutenção, optei por utilizar o ReactJs juntamente com Typescript, além de ferramentas de análise de código (eslint, prettier e editorconfig).
* [ReactJs](https://pt-br.reactjs.org/)
* [Typescripit](https://www.typescriptlang.org/)

## Padronização de código
Para manter um código limpo, bem estruturado, de fácil manutenção e que se adeque as boas práticas de programação, esse projeto utiliza o eslint, prettier e editorconfig. Então antes de rodar em sua máquina, certifique-se que tem as extenções: eslint e editorconfig. 
* [ReactJs](https://eslint.org/)
* [EditorConfig](https://editorconfig.org/)
* [Prettier](https://prettier.io/)

Esse projeto também utiliza o guia de estilos do airbnb.
* [airbnb-eslint](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)

## Instalação
1. Clone o repositório
   ```sh
   git clone https://github.com/gustavomaltez/navedex-frontend-challenge/
   ```
2. Instale as dependências
   ```sh
   npm install ou yarn install
   ```
3. Inicie a aplicação
   ```sh
   npm start ou yarn start
   ```
4. Acesse a aplicação na porta 3000
   ```sh
   http://localhost:3000
   ```

## Tempo de desenvolvimento
O desenvolvimento desse projeto se iniciou no dia 03/03/2021 e finalizou no dia 05/03/2021, totalizando 3 dias de desenvolvimento. Ao total, desde a configuração inicial do projeto até a sua publicação, levaram-se 27 horas e 23 minutos (dados retirados da extensão de monitoramento de código [https://wakatime.com/](wakatime) ). Os gráficos abaixo mostram de forma mais detalhada como se deu o desenvolvimento desse projeto com o passar dos dias.

<div align="center">
    <img src="/docs/development-time.png" width="80%"/>
</div>

## Dificuldades e aprendizados
Em primeiro lugar, o desenvolvimento desse projeto foi de grande aprendizado para mim e mesmo parecendo algo simples, foi bastante desafiador fazer um software do zero, em tão pouco tempo e que siga os requisitos estabelecidos de forma organizada, seguindo boas práticas de programação, com uma documentação clara, seguindo um protótipo detalhado e consumindo uma api externa. Essa foi a primeira vez que utilizei o [postman](https://www.postman.com/), embora já conhecesse por nome, nunca utilizei essa ferramenta, geralmente utilizo o [Insominia](https://insomnia.rest/). De início foi um pouco difícil compreender o funcionamento e como fazer as requisições, criar uma conta e obter o token, mas em pouquissimo tempo consegui compreender como a api funcionava e consequentemente partir para a implementação do código. Para deixar essa seção mais objetiva, resumirei em tópicos as dificuldades e aprendizados.

1. Link de imagens externas
  - Basicamente a api recebe um link de imagens externas no campo de imagem do naver, isso é um pouco problemático pois não é feita uma validação se a imagem de fato existe ou não e a mesma não fica salva no servidor, mas como a ideia dessa api é para fins de teste acredito que isso não seja um problema. Para solucionar esse problema de imagens com links quebrados, no componente de renderização de informações de um naver eu fiz uma verificação de existencia de imagem, caso ela exista a mesma é exibida, e caso não seja possivel carregar, uma imagem padrão (logo da nave) é carregada no lugar. Enquanto esse processo é feito, são exibidos componentes de carregamento para trazer uma experiência mais suave para o usuário.

2. Datas
 - A questão das datas nesse projeto de início é um pouco confusa. Por exemplo: no protótipo é possivel ver que temos os campos de Idade e Tempo de empresa, entretanto, essas informações devem ser enviadas para api no formato dd/mm/aaaa, mas para o usuário final subentende-se que idade é para ser um número e não uma data, o mesmo vale para tempo de empresa. Claro que guardar idade em anos no banco de dados não é uma boa prática, o correto seria utilizar uma data mesmo, sendo assim seria interessante para o usuário final que os campos de "Idade" e "Tempo de empresa" fossem substituidos respectivamente por "Data de nascimento" e "Data de entrada na empresa". Entretanto, para seguir o formato do protótipo e manter a conformidade com os valores recebidos pela api, deixei a nomenclatura identica ao protótipo, defini esses campos como o tipo data e utilizei algumas funções para converter o valor do form para o formato de data pt-br dd/mm/aaaa. Um outro problema é que ao receber as informações de um naver, os campos de data são retornados no formato "aaaa-mm-dd'T'HH:mm:ss.SSS'Z'", sendo preciso utilizar algumas funções para converter esse tempo em meses (baseado no dia atual) e posteriormente exibi-las na tela no formato "X anos e Y meses".

## Contato
Para quaisquer dúvidas quanto ao projeto, sinta-se a vontade para entrar em contato comigo via e-mail: gustavomaltez.dev@gmail.com ou [linkedin](https://www.linkedin.com/in/gustavommaltez/). Se você também está participando desse desafio e está com alguma dificuldade, será um prazer te ajudar, utilize os meios de contato anteriores ou me chame no discord (Gustavo Maltez#8603).

## Licença
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.


