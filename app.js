const app = function(){
   // const myData;
    const feedID ="1XD8SKpMUsY5ITd9lxUEXTii1m-1ia4VPq4onqw-_o8Q";
    const apiKEY = "AIzaSyDc9s-p082Cmc9RAkdsltjcr2a1-4P15cg";

    const url = "https://sheets.googleapis.com/v4/spreadsheets/"
    +feedID+"/values/1:102/?alt=json&key="+apiKEY+"";
    
    //https://sheets.googleapis.com/v4/spreadsheets/1XD8SKpMUsY5ITd9lxUEXTii1m-1ia4VPq4onqw-_o8Q/values/1:102/?alt=json&key=AIzaSyDc9s-p082Cmc9RAkdsltjcr2a1-4P15cg
    
    const message = document.querySelector('.message');
    const output = document.querySelector('.que');
    const nx = document.querySelector('.next');

    const list= document.getElementById("jsonList")
    const outputElement = document.getElementById("jsonList");
   

   
    function init(){
       
        loadJSON();
    }

        // function loadOutput(){
        //     console.log(myData);
        //     let selecet = document.createElement('select');
        //     for(let key in myData){
        //         console.log(key);
        //         let option = document.createElement('option');
        //         option.value = key;
        //         option.textContent = key;
        //         select.appendChild(option);
        //     }
        //     select.addEventListener('change',outputQuiz);
        //     document.querySelector('#dropDownList').appendChild(select);
        // }

        // function outputQuiz(e){
        //     console.log(e.target.value);
        // }




        function loadJSON(){
            fetch(url).then(function(res){
                return res.json()
            }).then(function(data){
              
               
               
                console.log(data.values[0][0]);

            

                  var i = 0;

                  for(j=0; j<data.values.length ; j++){
                        data.values[i].forEach(item => {
                                const li = document.createElement("li");
                            
                                li.textContent = item;
                                list.appendChild(li);

                        })
                        i++;
                   }


            })
        }
        return{
            init:init
        
    }}();



     document.addEventListener('DOMContentLoaded',app.init);    
