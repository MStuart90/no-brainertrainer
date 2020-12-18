$(document).ready(() => {

    let surpriseNum 
    let userid
 
 
     //does a GET request to figure out which user is logged in and updates the HTML on the page
     $.get("/api/Users/me").then(data => {
         
         surpriseNum = data.anythingGoes
          userid = data.id
          $("#strenousNum").text(surpriseNum);
          $("#username").text("Welcome " + data.user);
           console.log("This is the number ",  surpriseNum); 
           return surpriseNum
       });
  
  
     $("#completeBtn").click(function (event) {
         event.preventDefault();
         surpriseNum++; 
         //  console.log("relaxnum added ", relaxnum); 
         $.ajax({
             type: 'POST',
             url: '/api/completeWorkout/' + userid,
             data: { columnToUpdate: 'anythingGoes', valueToUpdateWith: surpriseNum}
         }).then(res => {
             // console.log('Response back from server ', res);
             document.location.href = "/program";
 
         }); 
     });
 
 });