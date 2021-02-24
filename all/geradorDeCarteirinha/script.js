function mostrarValor() {
    var data = new Date();
    var dia     = data.getDate();           
    var mes     = data.getMonth();       
    var ano    = data.getFullYear();
    
    if (mes < 10) {
        dataExpedição = dia+'/0'+mes+'/'+ano;
    } else {
        dataExpedição = dia+'/'+mes+'/'+ano;
    }

    
    
    name            =  document.getElementById("name").value;
    birthday        =  document.getElementById("birthday").value;
    data = new Date(birthday);
    dataFormatada = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'});
    cpf             =  document.getElementById("cpf").value;
    rg              =  document.getElementById("rg").value;
    instituition    =  document.getElementById("instituition").value;
    registry        =  document.getElementById("registry").value;
    console.log(name,birthday,cpf,rg,instituition,registry);
    $('.cardName').append('<strong>Nome: </strong>'+name+'');
    $('.cardBirthday').append('<strong>Data de Nascimento: </strong>'+dataFormatada+'');
    $('.cardRegistry').append('<strong>Matricula: </strong>'+registry+'');
    $('.cardCpf').append('<strong>CPF: </strong>'+cpf+'');
    $('.cardRg').append('<strong>RG: </strong>'+rg+'');
    $('.cardInstituition').append('<strong>Instituição: </strong>'+instituition+'');
    $('.cardDataExpedicao').append('<strong>Data de Expedição: </strong>'+dataExpedição+'');

 
    
}

document.getElementById("enviar").onclick = function(e) {
    mostrarValor();
    e.preventDefault();
}

// $(function(){
//     $('#photo').change(function(){
//     const file = $(this)[0].files[0];
//         const fileReader = new FileReader();
//         fileReader.onloadend = function(){
//             $('#img').attr('src',fileReader.result);
//         }
//     fileReader.readAsDataURL(file);
//     });
// });
