// for text bold
document.getElementById('bold').addEventListener('click',function(){
    let val = document.getElementById('editor').value;
    document.getElementById('editor').style.fontWeight = 'bold';
  });
  
  // for text italic
  document.getElementById('italic').addEventListener('click',function(){
    let val = document.getElementById('editor').value;
    document.getElementById('editor').style.fontStyle = 'italic';
  });
  
  // for text underline
  document.getElementById('underline').addEventListener('click',function(){
    let val = document.getElementById('editor').value;
    document.getElementById('editor').style.textDecoration = 'underline';
  });
  
  // function selectOption() {
  //         //Getting Value
  //         var selObj = document.getElementById("selectOption");
  //         var selValue = selObj.options[selObj.selectedIndex].value;
  //         //Setting Value
  //         let val = document.getElementById('editor').value;
  //         document.getElementById('editor').style.fontSize = selValue;
  //         console.log(selValue)   
  //  }