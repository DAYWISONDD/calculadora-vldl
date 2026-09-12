# 🩺 Calculadora de LDL e VLDL

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green.svg)

Este projeto surgiu durante meus estudos de **HTML, CSS e JavaScript**, com a ideia de unir o aprendizado em desenvolvimento web à minha experiência profissional na área laboratorial.

A aplicação recebe os valores de **Colesterol Total, HDL e Triglicerídeos** e realiza o cálculo do colesterol não-HDL, LDL e VLDL utilizando os fatores ajustáveis do método de **Martin/Hopkins**.

Além dos cálculos, implementei validações de entrada e classificações para alguns parâmetros do perfil lipídico.

---

## 🎯 Objetivo do projeto

O objetivo deste projeto foi colocar em prática os conhecimentos que estou adquirindo em desenvolvimento web utilizando uma situação relacionada à minha área de atuação profissional.

Neste projeto pratiquei lógica de programação, funções, estruturas condicionais, manipulação do DOM, validação de dados e implementação de regras de cálculo em JavaScript.

---

## ⚙️ Funcionalidades

- Entrada dos valores de Colesterol Total, HDL e Triglicerídeos;
- Cálculo automático do colesterol não-HDL;
- Cálculo de LDL e VLDL pelo método de Martin/Hopkins;
- Seleção automática do fator de acordo com as faixas de triglicerídeos e não-HDL;
- Classificação de Colesterol Total, HDL e Triglicerídeos;
- Validação dos valores informados pelo usuário;
- Atualização dinâmica dos resultados com JavaScript;
- Exibição do fator utilizado no cálculo;
- Interface responsiva para diferentes tamanhos de tela.

---

## 🧮 Como funciona o cálculo

O método de **Martin/Hopkins** utiliza um fator ajustável para a relação entre triglicerídeos e VLDL-C.

Diferentemente da fórmula de Friedewald, que utiliza um divisor fixo de 5, o método utiliza fatores definidos de acordo com as faixas de **triglicerídeos** e **colesterol não-HDL**.

Neste projeto, a tabela utilizada possui **30 faixas de triglicerídeos e 6 faixas de colesterol não-HDL**, totalizando **180 combinações possíveis**.

A partir dos valores informados, o JavaScript identifica a faixa correspondente, seleciona o fator e realiza os cálculos.

### Fórmulas utilizadas

```text
Não-HDL = Colesterol Total - HDL

VLDL = Triglicerídeos / Fator ajustável

LDL = Não-HDL - (Triglicerídeos / Fator ajustável)
```

O fator utilizado é definido pelo cruzamento entre a faixa de triglicerídeos e a faixa de colesterol não-HDL na tabela de Martin/Hopkins.

---

## 💻 Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript

---

## 📚 O que pratiquei neste projeto

Durante o desenvolvimento da calculadora, pratiquei:

- Estruturação de páginas com HTML;
- Estilização com CSS;
- Responsividade;
- Manipulação do DOM;
- Eventos em JavaScript;
- Funções;
- Estruturas condicionais;
- Arrays e matrizes;
- Validação de entradas;
- Conversão e tratamento de valores numéricos;
- Implementação de regras de cálculo;
- Organização do projeto em arquivos separados;
- Identificação e correção de erros durante o desenvolvimento.

---

## 📁 Estrutura do projeto

```text
calculadora-vldl/
├── index.html
├── script.js
├── style.css
├── image/
│   ├── logo_transparente.png
│   └── fundo.jpg
├── LICENSE
└── README.md
```

---

## 🚀 Como executar

O projeto não necessita de instalação ou dependências externas.

1. Clone ou baixe este repositório;
2. Abra a pasta do projeto;
3. Execute o arquivo `index.html` em um navegador;
4. Informe os valores de Colesterol Total, HDL e Triglicerídeos;
5. Clique em **Calcular** para visualizar os resultados.

---

## ⚠️ Observação

Este projeto foi desenvolvido para fins de **estudo e prática de programação**.

Os resultados não devem ser utilizados para diagnóstico ou interpretação clínica sem avaliação de um profissional habilitado.

As metas de LDL e colesterol não-HDL podem variar conforme a estratificação do risco cardiovascular e, por esse motivo, esses parâmetros não recebem classificação automática na aplicação.

---

## 📖 Referência

Martin SS, Blaha MJ, Elshazly MB, et al.

**Comparison of a Novel Method vs the Friedewald Equation for Estimating Low-Density Lipoprotein Cholesterol Levels From the Standard Lipid Profile.**

*JAMA*. 2013;310(19):2061–2068.

---

## 👨‍💻 Autor

**Daywison Santos**

Biomédico | Desenvolvimento de Software

Atualmente curso pós-graduação em **Desenvolvimento Full Stack e Cloud Computing** e **Desenvolvimento e Testes de Software**.

---

## 📄 Licença

Este projeto está licenciado sob a licença MIT.
