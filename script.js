/* Calcular o LDL usando a fórmula de Martin */
const total = parseFloat(document.getElementById("colesterolTotal").value);
const hdl = parseFloat(document.getElementById("hdl").value);
const trig = parseFloat(document.getElementById("trig").value);

/* Calcular o Non-HDL */
/* Nomeei essa variável como nonHDL. Depois, vou usar essa var para criar uma função */
const nonHDL = total - hdl;

const tabela = [
    { min: 7,   max: 49,  fatores: [3.5, 3.4, 3.3, 3.3, 3.2, 3.1] },
    { min: 50,  max: 56,  fatores: [4.0, 3.9, 3.7, 3.6, 3.6, 3.4] },
    { min: 57,  max: 61,  fatores: [4.3, 4.1, 4.0, 3.9, 3.8, 3.6] },
    { min: 62,  max: 66,  fatores: [4.5, 4.3, 4.1, 4.0, 3.9, 3.9] },
    { min: 67,  max: 71,  fatores: [4.7, 4.4, 4.3, 4.2, 4.1, 3.9] },
    { min: 72,  max: 75,  fatores: [4.8, 4.6, 4.4, 4.2, 4.2, 4.1] },
    { min: 76,  max: 79,  fatores: [4.9, 4.6, 4.5, 4.3, 4.3, 4.2] },
    { min: 80,  max: 83,  fatores: [5.0, 4.8, 4.6, 4.4, 4.3, 4.2] },
    { min: 84,  max: 87,  fatores: [5.1, 4.8, 4.6, 4.5, 4.4, 4.3] },
    { min: 88,  max: 92,  fatores: [5.2, 4.9, 4.7, 4.6, 4.4, 4.3] },
    { min: 93,  max: 96,  fatores: [5.3, 5.0, 4.8, 4.7, 4.5, 4.4] },
    { min: 97,  max: 100, fatores: [5.4, 5.1, 4.8, 4.7, 4.5, 4.3] },
    { min: 106, max: 110, fatores: [5.6, 5.3, 5.0, 4.8, 4.6, 4.5] },
    { min: 111, max: 115, fatores: [5.7, 5.4, 5.1, 4.9, 4.7, 4.5] },
    { min: 116, max: 120, fatores: [5.8, 5.5, 5.2, 5.0, 4.8, 4.6] },
    { min: 121, max: 126, fatores: [6.0, 5.5, 5.3, 5.0, 4.8, 4.6] },
    { min: 127, max: 132, fatores: [6.1, 5.7, 5.3, 5.1, 4.9, 4.7] },
    { min: 133, max: 138, fatores: [6.2, 5.8, 5.4, 5.2, 5.0, 4.7] },
    { min: 139, max: 146, fatores: [6.3, 5.9, 5.6, 5.3, 5.0, 4.8] },
    { min: 147, max: 154, fatores: [6.5, 6.0, 5.7, 5.4, 5.1, 4.8] },
    { min: 155, max: 163, fatores: [6.7, 6.2, 5.8, 5.4, 5.2, 4.9] },
    { min: 164, max: 173, fatores: [6.8, 6.3, 5.9, 5.5, 5.3, 5.0] },
    { min: 174, max: 185, fatores: [7.0, 6.5, 6.0, 5.7, 5.4, 5.1] },
    { min: 186, max: 201, fatores: [7.3, 6.7, 6.2, 5.8, 5.5, 5.2] },
    { min: 202, max: 220, fatores: [7.6, 6.9, 6.4, 6.0, 5.6, 5.3] },
    { min: 221, max: 247, fatores: [8.0, 7.2, 6.6, 6.2, 5.9, 5.4] },
    { min: 248, max: 292, fatores: [8.5, 7.6, 7.0, 6.5, 6.1, 5.6] },
    { min: 293, max: 399, fatores: [9.5, 8.3, 7.5, 7.0, 6.5, 5.9] },
    { min: 400, max: 13975, fatores: [11.9, 10.0, 8.8, 8.1, 7.5, 6.7] }
];
/* Função para obter o índice do Non-HDL */
/* Escolhi esse nome para essa função. get: pegar, Indice: índice, NonHDL: NonHDL. Então, getIndiceNonHDL significa "pegar o índice do NonHDL".
  (nonHDL) → o parâmetro da função. 
  É uma variável "temporária" que só existe dentro dessa função, e recebe o valor que você passar quando chamar a função.*/
function getIndiceNonHDL(nonHDL) {
    if (nonHDL < 100) return 0; /*"endereço" da coluna, não o valor*/
    if (nonHDL < 130) return 1;
    if (nonHDL < 160) return 2;
    if (nonHDL < 190) return 3;
    if (nonHDL < 220) return 4;
    return 5;
}

function getFator(trig, nonHDL) {
    const linha = tabela.find(l => trig >= l.min && trig <= l.max);
    if (!linha) return null;
    const indice = getIndiceNonHDL(nonHDL);
    return linha.fatores[indice];
}

function calcular() {
    const total = parseFloat(document.getElementById("colesterolTotal").value);
    const hdl = parseFloat(document.getElementById("hdl").value);
    const trig = parseFloat(document.getElementById("trig").value);

    const nonHDL = total - hdl;
    const fator = getFator(trig, nonHDL);

    if (fator === null) {
        alert("Não encontrei um fator para essa faixa de triglicerídeos.");
        return;
    }

    const vldl = trig / fator;
    const ldl = nonHDL - vldl;

    document.getElementById("nonHDLValue").textContent = nonHDL.toFixed(1) + " mg/dL";
    document.getElementById("fatorValue").textContent = fator;
    document.getElementById("ldlValue").textContent = ldl.toFixed(1) + " mg/dL";
    document.getElementById("vldlValue").textContent = vldl.toFixed(1) + " mg/dL";
}