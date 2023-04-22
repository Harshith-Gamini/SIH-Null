// Format SatSchedule
class scheduleEvent {
    constructor(title, start, end, track) {
        this.title = title;
        this.startTime = start;
        
        if (track == undefined){
          this.end = null
          this.track = end;
        }
        else{
          this.endTime = end;
          this.track = track;
        }
        
    }

}

var saturday = [];
var sunday = [];

// track = {main, ws} where ws is workshop
saturday.push(new scheduleEvent("Entry", "09:00", "main"));
saturday.push(new scheduleEvent("Inauguration Ceremoney", "09:30", "main"));
saturday.push(new scheduleEvent("Hacking Begins", "10:00","main"))
saturday.push(new scheduleEvent("First Review : Idea and execution details & evaluation", "12:00", "main"));
saturday.push(new scheduleEvent("LUNCH", "13:00", "main"));
saturday.push(new scheduleEvent("Second Review : Evaluation of team's progress", "17:00","main"));
saturday.push(new scheduleEvent("Dinner", "19:45", "main"));
saturday.push(new scheduleEvent("Sleep Drop-In Begins", "21:00", "main"));
sunday.push(new scheduleEvent("Hacking Ends", "10:00", "main"));
sunday.push(new scheduleEvent("Final Review", "10:15", "main"));
sunday.push(new scheduleEvent("Judging Commences", "11:00", "main"));
sunday.push(new scheduleEvent("Winners Declared", "11:15", "main"));

saturday.sort((a,b) => (a.startTime >= b.startTime) ? 1: -1);
sunday.sort((a,b) => (a.startTime >= b.startTime) ? 1 : -1 );

var str = '<tbody>';
str +=  '<tr><th></th><th>Main track</th><th></th></tr>';
saturday.forEach(function(ev, index){
  if (index ==0  || saturday[index-1].startTime != ev.startTime){     
    str += '<tr>';
    if (ev.track == 'ws'){

        str += '<th></th>';
        str += '<td></td>';
    }

  str += '<th>';

  str += ev.startTime 
  if (ev.endTime){
    str+='<br />|<br />' + ev.endTime;
  }
  str += '</th>';
  str += '<td>';
  str += ev.title + '';
  str += '</td>';
  
  if (ev.track == 'main'){
      if(index != saturday.length-1 && ev.startTime == saturday[index+1].startTime){
        str += '<th>';
        str+=saturday[index+1].startTime
        if(saturday[index+1].endTime){
        str +=  '<br />|<br />' + saturday[index+1].endTime;
      }
    
  str += '</th>';
  str += '<td>' + saturday[index+1].title+ '</td>';
    }
  else{
  str +='<th></th>';
  str += '<td></td>';
  }}
  
  str += '</tr>';
  
  }

});
str += '</tbody>';
window.document.getElementById("saturdayContainer").innerHTML = str;

var str = '<tbody>';
str +=  '<tr><th></th><th>Main track</th><th></th><th>Workshops</th></tr>';
sunday.forEach(function(ev, index){
  if (index ==0  || (sunday[index-1].startTime != ev.startTime || sunday[index-1].track == ev.track) ){     
    str += '<tr>';
    if (ev.track == 'ws'){

        str += '<th></th>';
        str += '<td></td>';
    }
    
    

  str += '<th>';

  str += ev.startTime 
  if (ev.endTime){
    str+='<br />|<br />' + ev.endTime;
  }
  str += '</th>';
  str += '<td>';
  str += ev.title + '';
  str += '</td>';
  
  if (ev.track == 'main'){
    if (index != sunday.length-1 && ev.startTime == sunday[index+1].startTime && ev.track != sunday[index+1].track){
        str += '<th>';
        str+=sunday[index+1].startTime
        if(sunday[index+1].endTime){
        str +=  '<br />|<br />' + sunday[index+1].endTime;
      }
    
  str += '</th>';
  str += '<td>' + sunday[index+1].title+ '</td>';
    
  }
  else{
  str +='<th></th>';
  str += '<td></td>';
  }}
  
  str += '</tr>';
  
  }

});
str += '</tbody>';
window.document.getElementById("sundayContainer").innerHTML = str;