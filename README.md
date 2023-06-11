# Chaabi-touch-typing - deployment link - https://flyingfingers.netlify.app/
This project is about developing, a touch typing speed tester for that I have used HTML, CSS and Javascript

Files which are created:- 
1. index.html - All html part has written in this file.
2. style.css - All css part for better user interface and desiging is written in this file.
3. index.js - This is the main file for responsivness and client side interaction, All the logic for word per minute count and mis-type count and Accuray count is written in this using javascript.


Now talking about the first file Index.hmtl -
This file contains the overall skleton of the web application.

The tag which i have used here is 
  in head tag  I have link all google fonts(for displaying font), and most important i have linked javascript here in the head usually you find the javascript is link in the last stage of body because html program flow is top to bottom so firstly our html element will load then css element and then in last javascript is loaded and excueted but here i have link javascript in head section because i am using "defer" keyword so that my javascript will load parallel but will not executed unitl unless all html elment is loaded , that's why it's not giving error and code is wprking fine.
  
  
  actual code snippet = <script src="index.js" defer></script>
  similarly i have link the css and given the title in the head tag.
  
  Now moving forword to in <body>
  i haved used sevral classess which are-
  
     .box - This is container to centering the app.
      .Heading - Header section
       .question - which diplay the text to be typed.
          .typingarea - the container in which user type.
             .button - conatiner which contains start button to start the timmer to count time and after that to reset it.
                 .btn-  start button to start the timmer to count time and after that to reset it.
                     .btn:hover - hover property to on start button.
                           .type - the content to be typed by user.
                              .result - result container to display the result such as wpm , accuray , mis-typed , righlty typed char.
  
  
  
  Now talking about second file style.css -
  In this file  the styling of the elements like button, typing area, display of text to be typed , heading and their property like font-color, font-size , font-family, padding, margin, etc these property are defined so that user will get and flawless user experince also in this file i have add the feature of responsive layout( like elment will manage according to the screen size) for that i have used a "box" class nested inside body tag.

  actual code snippet -  <body> 
  <div class="box"> </div>
  <body>
    
    css- .box{
    width:100%;
    
   
    margin-left: auto;
    margin-right: auto ;
}
    we can also use flex box and grid for this features but i have implemented the traditonal method, So for to know about the more styling you can refer to the style.css file which was already pushed in the repo.
  
  So moving forword let's dicuss - about the index.js file where all the javascript was written :- 
    In this file all the logic to calculate speed of typing and accuray ,rightly typed and worngly typed count is calculated in using the following function and flow of that whole program  mentioned below :
      
     1. function start - when we click on the start button using addEventListeners('click' ) and this function will change the text-content to done and when user click on done then next function will be call..
        2. the function which is exceuted is "function end ()" this function will stop the timer and calculates total time and then call a Check() function.
          3. Now check function match thr user-input text and text to be typed and with help of this it will calculate the mis-typed and correctly typed charecters and then it will call an another function. 
             4. Now the function called by check is "function result()" this function calculates the word per minute speed and set the values in result section where i haved used string template and place holder                  to set the values .
                   5. after the the text of button will change to reset and when user click on reset button the reset function will exceuted and it will reset all the values of the fields so no pervious stored                           data will alter the new data.

 so the flow of the functions is as follow :- 
         
    start funtion -> end function -> check function -> result function -> reset function 
    
    
      Now varible which i have used
        let acc;
let starttime - to get start time
let endtime-  to get end time when user completed the typing
let totaltime; - total time taken to completing the task
let res; - string template for displaying result
let w=0; - mis-typed charecter counter
let right=0; - correctly typed charecter counter
let userarray; - user input array means the text user enter and to verifying storing into an array
let speed; - calculated word per minute speed.
    
 
 

