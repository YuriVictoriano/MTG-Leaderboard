function abrirdesc(id){
    const desc_switch= document.getElementById(id)
    if(desc_switch.style.display === 'none'){
        desc_switch.style.display = 'flex';
    }
    else{
        desc_switch.style.display = 'none';     
    }
}

function mudar(){
    document.getElementById('barra_1').style.width='30%';
    document.getElementById('barra_2').style.width='80%';
        if(document.getElementById('barra_1').style.width < '19%'){
            document.getElementById('v_completo').style.display = 'none';
            document.getElementById('v_incompleto').style.display = 'block';    
        }
            document.getElementById('barra_1').style.transform = 'translate(0px, 93px)'; 
            document.getElementById('barra_2').style.transform = 'translate(0px, -93px)';  

            
            document.getElementById('teste_01').style.display = 'none'; 
            document.getElementById('teste_03').style.display = 'none'; 
            document.getElementById('teste_02').style.display = 'block'; 
            document.getElementById('teste_04').style.display = 'block'; 
        
}