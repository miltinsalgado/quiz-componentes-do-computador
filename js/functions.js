function checkAnswers(a1, a2, a3, a4, a5, a6) {
    let total = 0;
    let result = document.getElementById("result");

    if (a1.toUpperCase() == "ENTRADA")
        total++;

    if (a2.toUpperCase() == "HARDWARE")
        total++;

    if (a3.toUpperCase() == "PRIMARIA" || a3.toUpperCase() == "PRIMÁRIA")
        total++;

    if (a4.toUpperCase() == "GABINETE")
        total++;

    if (a5.toUpperCase() == "PROCESSADOR")
        total++;

    if (a6.toUpperCase() == "PLACA-MÃE" || a6.toUpperCase() == "PLACA MÃE" || a6.toUpperCase() == "PLACA MAE" || a6.toUpperCase() == "PLACA-MAE")
        total++;

    if ((total <= 2)) {
        result.innerHTML = "Você sabe pouco sobre o assunto! Você efetuou " + total + " pontos de 6.";
        result.style.color = "red";
    }

    else if ((total > 2) && (total <= 3)) {
        result.innerHTML = "Você sabe o básico sobre o assunto! Você efetuou " + total + " pontos de 6.";
        result.style.color = "yellow";
    }

    else if ((total > 3) && (total <= 5)) {
        result.innerHTML = "Você sabe muito sobre o assunto! Você efetuou " + total + " pontos de 6.";
        result.style.color = "yellowgreen";
    }

    else if (total == 6) {
        result.innerHTML = "Você sabe tudo sobre o assunto! Você efetuou " + total + " pontos de 6.";
        result.style.color = "skyblue";
    }

    total = 0;
}

function clearResult() {
    let result = document.getElementById("result");
    result.innerHTML = "Seu resultado será apresentado aqui!";
    result.style.color = "aliceblue";
}