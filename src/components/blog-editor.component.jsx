import { Link } from "react-router-dom";
import logo from "../imgs/logo.png";
import AnimationWrapper from "../common/page-animation";
import defaultBanner from "../imgs/blog banner.png";
import { useContext, useEffect } from "react";
import { EditorContext } from "../pages/editor.pages";
import EditorJS from "@editorjs/editorjs";
import {tools} from "./tools.component";
const BlogEditor = () => {

  let{blog, blog:{title,banner,content,tags,desc},setblog,textEditor,settextEditor} = useContext(EditorContext);

useEffect(()=>{
settextEditor( new EditorJS({
  holderId:"textEditor",
  data:"",
  tools:tools,
  placeholder:"Write your blog here",
}))
},[])

  const handleBannerUpload = (e) => {
    let img = e.target.files[0];
    if(img){
      let loadingtoast = toast.loading("Uploading Banner");
      uploadImage(img).then((url) => {
        if(url){
        toast.dismiss(loadingtoast);
        setblog({...blog,banner:url});
        blogBannerref.current.src = url;
        setblog({...blog,banner:url});
      }}).catch((err) => {
        toast.dismiss(loadingtoast);
        toast.error(err.message);
      });
    }
  };

  const handletitlekeydown = (e) => {
    // console.log(e);
    if(e.keyCode==13){
      e.preventDefault();
      // console.log("Enter Pressed");
    }
  }

  const handletitlechange = (e) => {
    // console.log(e.target);
    let input = e.target;
    input.style.height="auto";
    input.style.height = (input.scrollHeight) + "px";
    setblog({...blog,title:input.value});
  }

  const handleError=(e)=>{
    let img=e.target;
    img.src=defaultBanner;
  }
  const handlepublishEvent=()=>{
    if(!banner.length){
      return toast.error("upload a blog banner to publish it.")
    }
    if(!title.length){
      return toast.error("write blog title to publish it.")
    }
  }
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="flex-none w-10">
          <img src={logo} />
        </Link>
        <p className="max-md:hidden text-black line-clamp-1 w-full">{title.length?title:"New Blog"}</p>
        <div className="flex gap-4 ml-auto">
          <button className="btn-dark py-2" onClick={handlepublishEvent}>Publish</button>
          <button className="btn-light py-2">Save Drafts</button>
        </div>
      </nav>
      <AnimationWrapper>
        <section>
          <div className="mx-auto max-w-[900px] w-full">
            <div className="relative aspect-video hover:opacity-80 bg-white border-4 border-grey">
              <label>
                <img src={banner} className="z-20" onError={handleError} />
                <input
                  id="uploadBanner"
                  type="file"
                  accept=".png, .jpg, .jpeg"
                  hidden
                  onChange={handleBannerUpload}
                />
              </label>
            </div>
            <textarea placeholder="Blog Title" className="text-4xl font-medium w-full h-20 outline-none resize-none mt-10 leading-tight placeholder:opacity-40"
            onKeyDown={handletitlekeydown}
            onChange={handletitlechange}
            ></textarea>

<hr className="w-full opacity-10 my-5"/>
<div id="textEditor" className="font-galasio">

</div>
          </div>
        </section>
      </AnimationWrapper>
    </>
  );
};

export default BlogEditor;
