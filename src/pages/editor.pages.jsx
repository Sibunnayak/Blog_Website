import { useContext, useState } from "react";
import BlogEditor from "../components/blog-editor.component";
import PublishForm from "../components/publish-form.component";
import { createContext } from "react";
const blogstructure = {
  title: "",
  banner: "",
  content: [],
  tags: [],
  desc: "",
  author: "",
};
export const EditorContext = createContext({});
const Editor = () => {
  const [blog, setblog] = useState(blogstructure);
const [textEditor,settextEditor]=useState({isReady:false})
  const [editorstate, seteditorstate] = useState("editor");

  return (
    <EditorContext.Provider value={{blog,setblog,editorstate,seteditorstate,textEditor,settextEditor}}>
      {editorstate == "editor" ? <BlogEditor /> : <PublishForm />}
    </EditorContext.Provider>
  );
};
export default Editor;
