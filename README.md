# Chaabi-touch-typing
This project is about developing, a touch typing speed tester for that I have used HTML, CSS and Javascript

Files which are created:- 
1. index.html - All html part has written in this file.
2. style.css - All css part for better user interface and desiging is written in this file.
3. script.js - This is the main file for responsivness and client side interaction, All the logic for word per minute count and mis-type count and Accuray count is written in this using javascript.


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
  All the styling is done here means how to set the element to display a flawless user-interface 
  please refer to above describe class beacause i have used similar class for css styling and for more refernce refer style.css file which is uploaded alredy in the repo.
  
  
 
 

