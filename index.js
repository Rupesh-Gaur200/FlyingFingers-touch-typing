const text = ["asdfghjkl","akdfgkksjfg","adhfjhlsfdg","sdfgkdfjsh","sadjkglsfdh","sdfgklkdh","dfgjhgfdl"];
const btn =document.querySelector(".btn");
const question = document.querySelector(".Actualword");
const textarea= document.querySelector(".type");
const wpm=document.querySelector(".typeword");
let acc;
let starttime;
let endtime;
let totaltime;
let res;
let w=0;
let right=0;
let userarray;
let speed;
btn.addEventListener('click',function(){
      let gettext=btn.innerHTML;
      

      switch (gettext){
       case "Start":
          start();
          break;

      case "done" :
           end();
          break;

      case "reset":
       reset();
        break;

      }

      function start(){
        

        textarea.addEventListener('paste', function(event) {
            event.preventDefault()
          
            
        });

        textarea.focus();
        textarea.value="";
          let randomnum = Math.floor(Math.random()*text.length);

          question.innerHTML=text[randomnum]+text[randomnum-1]+text[randomnum-2];
          let start = new Date;
          starttime= start.getSeconds();
          btn.textContent="done";
      }
       function end(){
       
          let end=new Date;
          endtime=end.getSeconds();
          btn.textContent="reset";
          totaltime=(endtime-starttime);
          if(totaltime<0){
           totaltime=totaltime*-1;
          check();
        }
          else{
              check();
          }
          
       }

       function reset(){
        textarea.value="";
        question.innerHTML="";
        wpm.innerHTML="";
        btn.textContent="Start";
         w=0;
          right=0;
        
       }


       function check(){
         
            let userinput=textarea.value;
           let orginput=question.innerHTML;

           let orgarray = orginput.split("");
           userarray=userinput.split("");
           for(let i=0;i<orgarray.length;i++){
         if(orgarray[i]==userarray[i]){
              right++;
         }else{
            w++;
         }



       }
         
        result();
      }
         function result(){

             
           acc=(right/userarray.length)*100;
           acc=acc.toFixed(2);

           speed=(right/((totaltime/60)*100))*100;
           speed=speed.toFixed(0);
            res=`Your typing speed is ${speed} WPM, And you have mis-typed ${w} char and rightly typed ${right} and Accuracy is ${acc}%`;
               wpm.innerHTML=res;
            
            } 


    })