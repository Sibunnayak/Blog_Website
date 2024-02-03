//importing tools
import Embed from "@editorjs/embed";
import List from "@editorjs/list";
import Image from "@editorjs/image";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";
import Code from "@editorjs/code";
import InlineCode from "@editorjs/inline-code";
// import {uploadImage} from "../commom/aws"
const uploadImageByurl = async (e) => {
let link = new Promise((resolve,reject)=>{
  try{
    resolve(e)
  }catch(err){
    reject(err)
  }
})
return link.then(url=>{
  return {
    success:1,
    file:{url}
  }
})
}

const uploadImageByFile =  (e) => {
  let link = new Promise((resolve,reject)=>{
    try{
      resolve(e)
    }catch(err){
      reject(err)
    }
  })
  return link.then(url=>{
    return {
      success:1,
      file:{url}
    }
  })
  }

export const tools = {
embed: Embed,
list: {
  class:List,
  inlinetoolbar:true
},
image:{
  class:Image,
  config:{
    uploader:{
      uploadByUrl:uploadImageByurl,
      uploadByFile:uploadImageByFile
    }
  }
},
header:{
  class:Header,
  config:{
    placeholder:"Enter a header",
    levels:[2,3],
    defaultlevel:2
  }
},
quote:{
  class:Quote,
  inlineToolbar:true,
},
marker:Marker,
code:Code,
inlineCode:InlineCode,
}
