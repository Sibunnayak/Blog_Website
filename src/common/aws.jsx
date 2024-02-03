import axios from "axios";

export const uploadImage = async(img)=>{
  let imgurl = null;
  await axios.get(import.meta.env.VITE_SERVER_DOMAIN + "/get-upload-url").then(async ({data:{uploadURL}})=>{
    await axios({
      method:'PUT',
      url:uploadURL,
      headers:{'Content-type':'multipart/form-data'},
      data:img
    })
    .then(()=>{
      imgurl=uploadURL.split("?")[0]
    })
  })
  return imgurl;
}