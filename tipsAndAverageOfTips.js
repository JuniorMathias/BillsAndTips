var john = {
    fulltName: `Junior Mathias`,
    //the value of bills whit 5 restaurants
    bills : [124, 48, 268, 180, 42],
     calcTips: function(){
         this.tips = [];
         this.finalValues = [];
 // loop and conditions to know how much they spent
         for(var i = 0; i < this.bills.length; i++){
             var percentage;
             var bill = this.bills[i]
             if(this.bills[i] < 50){
                 percentage = .2
             }else if ( this.bills[i] >= 50 && this.bills[i]< 200){
                 percentage = .15
             }else {
                 percentage = .1
             }
// gettin the value of array and making the calculate
             this.tips[i] = bill * percentage;
             this.finalValues[i] = bill + bill * percentage;
             
         }
     }
 }
 
 var mark = {
     fulltName: `Mark Miller`,
      bills : [77, 375, 110, 180, 45],
      calcTips: function(){
          this.tips = [];
          this.finalValues = [];
  
          for(var i = 0; i < this.bills.length; i++){
              var percentage;
              var bill = this.bills[i]
              if(this.bills[i] < 100){
                  percentage = .2
              }else if ( this.bills[i] >= 100 && this.bills[i]< 300){
                  percentage = .1
              }else {
                  percentage = .25
              }
              this.tips[i] = bill * percentage;
              this.finalValues[i] = bill + bill * percentage;
              
          }
      }
  }
  // function created to calculate the average of tips

  function calcAverage(tips){
      var sum = 0
      for(var i = 0; i < tips.length; i++){
          sum = sum + tips[i]
      }
      return sum / tips.length
  }
 
 // calling the function
 john.calcTips()
 mark.calcTips()
 // creating the variable to get the value of average for each family
 john.average = calcAverage(john.tips)
 mark.average = calcAverage(mark.tips)
 console.log(john,mark)
 
 if ( john.average > mark.average){
     console.log(`{john.fulltName}   s family pays higher tips whith an average 
     of ${john.average} `)
 }else if(mark.average > john.average){
     console.log(`${mark.fulltName}   s family pays higher tips whith an average 
     of ${mark.average} `)
 }