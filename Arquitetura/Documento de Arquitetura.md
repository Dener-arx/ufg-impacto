# UFG Impacto

## 1. Introdução

### 1.1. Finalidade

  Este documento tem como finalidade definir as decisões e caracteristicas arquiteturais do software UFG-Impacto.

### 1.2. Escopo

  Este documento se baseia no documento de definição básico do sistema Impacto UFG, onde são definidas funcionalidades e restrições do sistema, que são relevantes para as decisões arquiteturais do projeto.
 
### 1.3. Definições, Acrônimos e Abreviações


 
### 1.4. Referências 
 
| ID. | Nome do Artefato |
| --  |     --           |
|     | C4Model          |
|     | ISO-IEEE 42010   |


## 2. Contexto de Arquitetura

O contexto de arquitetura deste software é bastante amplo, sendo somente necessário implementar as funções designadas no escopo do projeto, não importando o metodo, contanto que sejam seguidas as decisões arquiteturais estabelecidas ao longo do projeto e o software seja funcional. 

### 2.1. Funcionalidades e Restrições Arquiteturais

**Funções**
|ID|Funcionalidade|Descrição|
|--|--|--|
|Fun01|Disponibilizar Projetos|O sistema deve disponibilizar projetos de acordo com seu tipo|
|Fun02|Disponibilizar WordCloud|O sistema deve criar uma wordcloud para cada tipo de projeto|
|Fun03|Buscar Palavra|Ao selecionar uma palavra o sistema deve exibir todos os projetos daquele tipo relacionados à ela|
|Fun04|Disponibilizar Empresas|O sistema deve disponibilizar empresas ativas criadas por egressos da UFG|
|Fun05|Disponibilizar Empregos|O sistema deve disponibilizar empregos criados por empresas fundadas por egressos da UFG|
|Fun06|Dados de Ingressos|O sistema deve disponibilizar dados de ingressos da UFG|
|Fun07|Dados de Egressos|O sistema deve disponibilizar dados de egressos da UFG|

### 2.2 Atributos de Qualidades Prioritários

Estando o software em estado inicial de planejamento, deve-se priorizar a escalabilidade e manutenibilidade do mesmo, sendo que adições ou alterações de funções podem ocorrer a qualquer momento. 

Outro aspecto importante é a necessidade de lidar com um grande volume de dados, o que requere um foco na eficiencia do software. 

Desta forma, os atributos de qualidade prioritários durante o desenvolvimento do software serão: **Escalabilidade, Manutenibilidade e Eficiencia**.

## 3. Ponto de vista dos Casos de Uso

### 3.1 Descrição

O diagrama de casos de uso a seguir foi criado com base nas funcionalidades esperadas do sistema e será tomado em conta durante as decisões arquiteturais do software.

### 3.2 Visão de Casos de Uso

>![Image](https://github.com/Dener-arx/ufg-impacto/blob/main/Arquitetura/Imagem/Casos%20de%20Uso.png)

## 4. Representação da Arquitetura

  A arquitetura do software a ser desenvolvido será uma arquitetura em MVC, cuja representação utilizará de uma versão modificada do Modelo C4. Seguindo o padrão 'Contexto, Componente e Camada', ao inves de 'Contexto, Container, Componente, Codigo'. 

### 4.1 Diagrama de Contexto

O diagrama a seguir apresenta o contexto do sistema, mostrando suas interações com partes externas.

>![Image](https://github.com/Dener-arx/ufg-impacto/blob/main/Arquitetura/Imagem/Diagrama%20de%20Contexto.png)

Das partes externas, nos temos os **usuários**, que utilizam o software, e os sistemas fornecedores de dados, **UFG-Data, MEC/Gov, Other Data Systems.**

### 4.2 Diagrama de Componentes

 O diagrama a seguir apresenta os componentes do sistema, e como eles interagem.
 
>![Image](https://github.com/Dener-arx/ufg-impacto/blob/main/Arquitetura/Imagem/Diagrama%20de%20Componentes.png)

Os usuários tem acessa à aplicação atraves do componente **Cliente**, representado por seu navegador, que realiza a comunicação com o **Servidor**.

O componente **Servidor**, por sua vez, é responsável pela implementação das funcionalidades do sistema, atribuindo responsabilidades especificas a cada uma de suas camadas. Sendo utilizado a arquitetura MVC(Model, View, Controller), tem-se o seguinte:
- View: Responsável pela apresentação do conteudo e interação com o usuário.
- Controller: Responsável pela comunicação da camada View com a camada Model.
- Model: Responsável pela manipulação de dados e pela lógica do sistema.

### 4.3 Diagrama de Camadas

O diagrama a seguir apresenta a estrutura interna das camadas do componente **Servidor**, e mostra como seus elementos interagem.

>![Image](https://github.com/Dener-arx/ufg-impacto/blob/main/Arquitetura/Imagem/Diagrama%20de%20Camadas.png)

