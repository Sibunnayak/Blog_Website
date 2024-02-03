import { useEffect, useRef, useState } from "react";

const InPageNavigation = ({ routes,defaulthidden=[],defaultActivationIndex=0,children }) => {
  
  let activeTabLineRef = useRef();
  let activeTab=useRef();
  let [inpagenavindex, setinpagenavindex] = useState(defaultActivationIndex);

  const changePageState = (btn, i) => {
    let { offsetwidth, offsetleft } = btn;
    activeTabLineRef.current.style.width = offsetwidth + "px";
    activeTabLineRef.current.style.left = offsetleft + "px";
    setinpagenavindex(i);
  }
useEffect(()=>{
  changePageState(activeTab.current,defaultActivationIndex)
},[])
  return (
    <>
      <div className="relative mb-8 bg-white border-b border-grey flex flex-nowrap overflow-x-auto">
        {routes.map((route, i) => {
          return (
            <button
            ref={i==defaultActivationIndex? activeTab:null}
              key={i}
              className={
                "p-4 px-5 capitalize " +
                (inpagenavindex == i ? "text-black " : "text-dark-grey ")+(defaulthidden.includes(route)?" md:hidden ":" ")}
              onClick={(e) => {
                changePageState(e.target, i)
              }}
            >
              {route}
            </button>
          )
        })}
        <hr ref={activeTabLineRef} className="absolute bottom-0 duration-300" />
      </div>
      {
        Array.isArray(children)?children[inpagenavindex]:children
      }
    </>
  );
};
export default InPageNavigation;
