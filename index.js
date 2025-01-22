import fs, { readdirSync } from 'fs';
import sharp from 'sharp';

const data  = readdirSync('./img');
for(let i = 0 ; i < data.length ; i++){
    const selectRightImg = data[i].replace('.png','');
    sharp(`./img/${data[i]}`).toFile(`./convertedimgs/${selectRightImg}.webp`,(err,info)=>{
        if(err){
            console.log(err);
        }else{
            console.log(info);
        }
    });
}