
// Limite SUPERIOR de cada faixa de triglicerídeos (ordem da tabela)
const trigLimites = [
    49, 56, 61, 66, 71, 75, 79, 83, 87, 92, 96,
    100, 105, 110, 115, 120, 126, 132, 138, 146, 154,
    163, 173, 185, 201, 220, 247, 292, 399, 13975
];

// Limite SUPERIOR de cada faixa de não-HDL
const naoHdlLimites = [100, 129, 159, 189, 219, Infinity];

// Matriz de fatores: fatores[linha][coluna]
const fatores = [
    //  ≤100  100-129  130-159  160-189  190-219   ≥220
    [3.5, 3.4, 3.3, 3.3, 3.2, 3.1], // 7-49
    [4.0, 3.9, 3.7, 3.6, 3.6, 3.4], // 50-56
    [4.3, 4.1, 4.0, 3.9, 3.8, 3.6], // 57-61
    [4.5, 4.3, 4.1, 4.0, 3.9, 3.9], // 62-66
    [4.7, 4.4, 4.3, 4.2, 4.1, 3.9], // 67-71
    [4.8, 4.6, 4.4, 4.2, 4.2, 4.1], // 72-75
    [4.9, 4.6, 4.5, 4.3, 4.3, 4.2], // 76-79
    [5.0, 4.8, 4.6, 4.4, 4.3, 4.2], // 80-83
    [5.1, 4.8, 4.6, 4.5, 4.4, 4.3], // 84-87
    [5.2, 4.9, 4.7, 4.6, 4.4, 4.3], // 88-92
    [5.3, 5.0, 4.8, 4.7, 4.5, 4.4], // 93-96
    [5.4, 5.1, 4.8, 4.7, 4.5, 4.3], // 97-100
    [5.5, 5.2, 5.0, 4.7, 4.6, 4.5], // 101-105
    [5.6, 5.3, 5.0, 4.8, 4.6, 4.5], // 106-110
    [5.7, 5.4, 5.1, 4.9, 4.7, 4.5], // 111-115
    [5.8, 5.5, 5.2, 5.0, 4.8, 4.6], // 116-120
    [6.0, 5.5, 5.3, 5.0, 4.8, 4.6], // 121-126
    [6.1, 5.7, 5.3, 5.1, 4.9, 4.7], // 127-132
    [6.2, 5.8, 5.4, 5.2, 5.0, 4.7], // 133-138
    [6.3, 5.9, 5.6, 5.3, 5.0, 4.8], // 139-146
    [6.5, 6.0, 5.7, 5.4, 5.1, 4.8], // 147-154
    [6.7, 6.2, 5.8, 5.4, 5.2, 4.9], // 155-163
    [6.8, 6.3, 5.9, 5.5, 5.3, 5.0], // 164-173
    [7.0, 6.5, 6.0, 5.7, 5.4, 5.1], // 174-185
    [7.3, 6.7, 6.2, 5.8, 5.5, 5.2], // 186-201
    [7.6, 6.9, 6.4, 6.0, 5.6, 5.3], // 202-220
    [8.0, 7.2, 6.6, 6.2, 5.9, 5.4], // 221-247
    [8.5, 7.6, 7.0, 6.5, 6.1, 5.6], // 248-292
    [9.5, 8.3, 7.5, 7.0, 6.5, 5.9], // 293-399
    [11.9, 10.0, 8.8, 8.1, 7.5, 6.7] // 400-13975
];

function acharIndice(valor, limites) {
    for (let i = 0; i < limites.length; i++) {
        if (valor <= limites[i]) return i;
    }
    return limites.length - 1;

}

function calcular () {
    const colesterolTotal = Number(document.getElementById('colesterolTotal').value)
    const hdl = Number(document.getElementById('hdl').value)
    const trig = Number(document.getElementById('trig').value)
    
    if (trig < 7 || trig >= 400) {
    alert('Para este projeto, a estimativa foi limitada a triglicerídeos entre 7 e 399 mg/dL.');
    return;
}

    const noHDL = colesterolTotal - hdl


    const linha  = acharIndice(trig,  trigLimites);
    const coluna = acharIndice(noHDL, naoHdlLimites);
    const fator  = fatores[linha][coluna];

   
    const ldl = noHDL - (trig/fator)
    const vldl = trig/fator

    // classificação 
    // Colesterol Total
    let classificacaoCol;

    if (colesterolTotal < 190) {
    classificacaoCol = "Desejável";
    } else {
    classificacaoCol = "Elevado";
    }
    document.getElementById("classificacao-col").textContent = classificacaoCol;
   
    // Triglicerídeos
    let classificacaoTri;

    if (trig <= 150) {
    classificacaoTri = "Desejável";
    } else {
    classificacaoTri = "Elevado";
    }
    document.getElementById("classificacao-tri").textContent = classificacaoTri;

    // HDL (invertido)
    let classificacaoHdl;

    if (hdl < 40) {
    classificacaoHdl = "Baixo";
    } else {
    classificacaoHdl = "Adequado";
    }
    document.getElementById("classificacao-hdl").textContent = classificacaoHdl;

  
    
    
    // 1- NÃO-HDL; 2- FATOR; 3 - LDL; 4 VLDL.
    document.getElementById('nonHDLValue').textContent = noHDL.toFixed(0) + ' mg/dL';
    document.getElementById('fatorValue').textContent = fator.toFixed(1);
    document.getElementById('ldlValue').textContent    = ldl.toFixed(0)   + ' mg/dL';
    document.getElementById('vldlValue').textContent   = vldl.toFixed(0)  + ' mg/dL'; 
}



    


