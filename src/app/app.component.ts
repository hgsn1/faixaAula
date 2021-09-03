import { Component } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  ngOnInit() {   
    //teste data   
    this.contadorAulas("2021-09-02 21:20:00", "2021-09-02 23:22:00");
  }

  contadorAulas(horario_abertura:any, horario_fechamento:any){   
    
    horario_abertura = moment(horario_abertura);
    horario_fechamento = moment(horario_fechamento);      
    var duracao = (horario_fechamento.diff(horario_abertura, 'minutes'))/50;    

    var faixaAula: any = {
      inicio1:'',
      inicio2:'',
      inicio3:'',
      termino1:'',
      termino2:'',
      termino3:''
    };
        
    //verificar quantidade de aulas
    if (duracao < 1){
      duracao = 0;  
      console.log("qtdAulas: " + duracao);
    }   

    if (duracao <= 3 && duracao >= 1){      
      duracao = Math.trunc(duracao);      
      console.log("qtdAulas: " + duracao);
    }     

    else if(duracao > 3){      
      duracao = 3;
      console.log("qtdAulas: " + duracao);
    }    
    
    //verificar periodo de tolerância das aulas 
    switch (duracao){
      case 1:
        faixaAula.inicio1 = moment(horario_abertura).format("YYYY-MM-DD HH:mm:ss");
        faixaAula.termino1 = moment(horario_abertura.add(15, 'minutes')).format("YYYY-MM-DD HH:mm:ss"); 
        console.log("Faixa de tolerância da aula: " + faixaAula.inicio1 + " até " + faixaAula.termino1);    
      break;

      case 2:
        faixaAula.inicio1 = moment(horario_abertura).format("YYYY-MM-DD HH:mm:ss");
        faixaAula.termino1 = moment(horario_abertura.add(15, 'minutes')).format("YYYY-MM-DD HH:mm:ss");   
        faixaAula.inicio2 = moment(horario_abertura.add(35, 'minutes')).format("YYYY-MM-DD HH:mm:ss");
        faixaAula.termino2 = moment(horario_abertura.add(15,'minutes')).format("YYYY-MM-DD HH:mm:ss");      
        console.log("Faixa de tolerância da aula: " + faixaAula.inicio1 + " até " + faixaAula.termino1 + " e " + faixaAula.inicio2 + " até " + faixaAula.termino2);     
      break;

      case 3:
        faixaAula.inicio1 = moment(horario_abertura).format("YYYY-MM-DD HH:mm:ss");
        faixaAula.termino1 = moment(horario_abertura.add(15, 'minutes')).format("YYYY-MM-DD HH:mm:ss");        
        faixaAula.inicio2 = moment(horario_abertura.add(35, 'minutes')).format("YYYY-MM-DD HH:mm:ss");
        faixaAula.termino2 = moment(horario_abertura.add(15,'minutes')).format("YYYY-MM-DD HH:mm:ss");     
        faixaAula.inicio3 = moment(horario_abertura.add(35, 'minutes')).format("YYYY-MM-DD HH:mm:ss");
        faixaAula.termino3 = moment(horario_abertura.add(15, 'minutes')).format("YYYY-MM-DD HH:mm:ss");
        console.log("Faixa de tolerância da aula: " 
         + faixaAula.inicio1 + " até " + faixaAula.termino1 + " e " + faixaAula.inicio2 + " até " + faixaAula.termino2 + " e " + faixaAula.inicio3 + " até " + faixaAula.termino3);   
      break;
    }    

    
}
}