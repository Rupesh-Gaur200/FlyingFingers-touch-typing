# Chaabi-touch-typing - deployment link - https://flyingfingers.netlify.app/
This project is about developing, a touch typing speed tester for that I have used HTML, CSS and Javascript

Files which are created:- 
1. index.html - All html part has written in this file.
2. style.css - All css part for better user interface and desiging is written in this file.
3. index.js - This is the main file for responsivness and client side interaction, All the logic for word per minute count and mis-type count and Accuray count is written in this using javascript.


Now talking about the first file Index.hmtl -
This file contains the overall skleton of the web application.

The tag which i have used here is 
<head> - In this I have link all google fonts(for displaying font), and most important i have linked javascript here in the head usually you find the javascript is link in the last stage of body because html program flow is top to bottom so firstly our html element will load then css element and then in last javascript is loaded and excueted but here i have link javascript in head section because i am using "defer" keyword so that my javascript will load parallel but will not executed unitl unless all html elment is loaded , that's why it's not giving error and code is wprking fine.
  
  
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
  
  
 
 

