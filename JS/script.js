
document.querySelector("#calcular").onclick = converterTemp;
document.querySelector("#limpar").onclick = limpar;

function converterTemp() {
    
    let select = document.getElementById('escala');
	let value = select.options[select.selectedIndex].value;
    let temp_entrada = document.getElementById('temp_entrada').value;
    
    if(isNaN(temp_entrada)){
        alert("Digite um valor válido!");
        return;

    }else if(temp_entrada === ""){
        alert("Digite um valor para conversão!");
        return;

    }else{
        if(value === "tempC"){
        //if(select.options[select.selectedIndex].value === "tempC"){
            
            document.getElementById('saida-fahrenheit').innerHTML = (Number.parseFloat((temp_entrada * 1.8) + 32)).toFixed(2)+ " °F";
            document.getElementById('saida-kelvin').innerHTML = (Number.parseFloat(temp_entrada) + Number.parseFloat(273.15))+ " °K";
            document.getElementById('saida-rankine').innerHTML = (Number.parseFloat((temp_entrada * 9/5) +491.67)).toFixed(2)+ " °R";
            
        }
        //else if(select.options[select.selectedIndex].value === "tempF"){
        else if(value === "tempF"){
        
            document.getElementById('saida-celsius').innerHTML = (Number.parseFloat((temp_entrada - 32) / 1.8)).toFixed(2)+ " °C";
            document.getElementById('saida-kelvin').innerHTML = (Number.parseFloat((temp_entrada -32) * 5/9 +273.15)).toFixed(2)+ " °K";
            document.getElementById('saida-rankine').innerHTML = (Number.parseFloat(temp_entrada) + Number.parseFloat(459.67)).toFixed(2)+ " °R";
            
        }
        //else if(select.options[select.selectedIndex].value === "tempK"){
        else if(value === "tempK"){ 
            
            document.getElementById('saida-celsius').innerHTML = (Number.parseFloat(temp_entrada - 273.15))+ " °C";
            document.getElementById('saida-fahrenheit').innerHTML = (Number.parseFloat(temp_entrada) - 273.15 * 1.8 + 32)+ " °F";
            document.getElementById('saida-rankine').innerHTML = (Number.parseFloat(temp_entrada * 1.8))+ " °R";
            
        }
        //else if(select.options[select.selectedIndex].value === "tempR"){
        else if(value === "tempR"){
            
            document.getElementById('saida-celsius').innerHTML = (Number.parseFloat((temp_entrada - 32 - 459.67) / 1.8)).toFixed(2)+ " °C";
            document.getElementById('saida-fahrenheit').innerHTML = (Number.parseFloat((temp_entrada - 459.67))).toFixed(2)+ " °F";
            document.getElementById('saida-kelvin').innerHTML = (Number.parseFloat(temp_entrada / 1.8)).toFixed(2)+ " °K";
            
        }
    }
    
}

function limpar() {
    temp_entrada.value ='';
}
