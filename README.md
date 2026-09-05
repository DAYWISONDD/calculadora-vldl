# Calculadora VLDL/LDL

Calculadora web que calcula o LDL e o VLDL a partir do Colesterol Total, HDL e Triglicerídeos, usando a fórmula de Martin.

A fórmula de Martin é uma alternativa à equação de Friedewald. Em vez de dividir os triglicerídeos por um valor fixo (5), ela usa uma tabela de fatores que muda de acordo com a faixa de triglicerídeos e de colesterol não-HDL do paciente, dando um resultado mais preciso.

## Como funciona

1. O usuário preenche Colesterol Total, HDL e Triglicerídeos
2. O sistema calcula o Colesterol Não-HDL (Total - HDL)
3. Busca o fator correspondente na tabela de Martin
4. Calcula o VLDL (Triglicerídeos / Fator)
5. Calcula o LDL (Não-HDL - VLDL)

## Tecnologias

HTML, CSS e JavaScript, sem frameworks.

## Como rodar

Baixe o repositório e abra o `index.html` no navegador. Não precisa instalar nada.

## Status

Projeto feito para estudo, enquanto aprendo desenvolvimento web.
