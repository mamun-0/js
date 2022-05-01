let input = prompt("Command");
const arr = [];
while(input!='quit'){
  if(input == 'new'){
    input = prompt("Add item");
    arr.push(input);
  }else if(input == 'list'){
    arr.forEach((element,index)=>{
      console.log(index, element);
    })
    console.log('***********');
  }else if(input == 'delete'){
    input = prompt("Delete item index")
    let parse = parseInt(input);
    if(parse){
      arr.splice(parse,1);
    }
  }else if(input == 'quit'){
    input = 'quit';
  }
  input = prompt("Command");
}