/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr  from 'qr-image';
import fs from "fs"; 
inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type:'input',
      name:'link1',
      message:'enter the url which you would like to make',
      default:''
    },    
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url1=answers.link1;
    const img1=qr.image(url1,{type:"png"});
    // console.log(img1);
    img1.pipe(fs.createWriteStream("qr_code.png"));
    fs.writeFile("curr_url.txt",url1,(err)=>{
      if(err) throw err;
      console.log("the file has been saved");
    });
  })
  
