
function client_get_number(){

    //read number from text-field
    var c_number = document.getElementById("textfield_index").value;

    //send number to server via JavaScript Fetch function using GET-method
    
    var send_request = true;
    
        if( send_request) {
                var host = "http://127.0.0.1:5658";
                var link = "/calculate_numbers"+"?data1="+c_number;

                 //GET header    

               // fetch(host + link, { method: 'get', headers: { "Content-Type": "x-www-form-urlencoded"}})
               fetch(host + link, { method: 'get', headers: { "Content-Type": "application/x-www-form-urlencoded"}})


                .then( (resp) => { return resp.json(); }  )

                .then( (response) => { 
                /* server http-response  */ 
                //var n_answer = JSON.parse(response);
                //document.getEleneById("answer_field").innerHTML = n_answer; 

                } )
            
                .catch( function( error_msg ) { /* error if connection problem happens */  }  )
    
        }else{

            console.log("Number guess function, value : " +c_number);
        }
    

}