document.getElementById('ormulario').addEventListener('Submit'function)
(Event){
    Event.preventDefault();

    // Obter as notas inseridas pelo usuario
    let nota1 = parseFloat(document.getElementById('nota1').value)
    let nota1 = parseFloat(document.getElementById('nota2').value)
    let nota1 = parseFloat(document.getElementById('nota3').value)

    // Calcular a media 
    let media = (nota1 + nota2 + nota3)/3;

    //Exibir a mensagem de resultado
    let resultadoDiv = document.getElementById('resultado');
    if(media>=6.0){
        resultadoDiv.innerHTML=<p class="aprovado">Aprovado!Sua media foi:${media.toFixed(2)}</p>
    }else{
        resultadoDiv.innerHTML=<p class="recuperacao">recuperacao. Sua media foi:${media.toFixed(2)</p>;
    }
});
