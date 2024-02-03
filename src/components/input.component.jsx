import React, { useState } from "react";
const InputBox = ({ name, type, id, value, placeholder, icon }) => {
  const [passwordVisibility, setpasswordVisibility] = useState(false);
  return (
    <div className="relative w-[100%] mb-4">
      <input
        type={type=="password"?passwordVisibility?"text":"password":type}
        id={id}
        name={name}
        defaultValue={value}
        placeholder={placeholder}
        className="input-box"
      />
      <i class={"fi " + icon + " input-icon"}></i>
      {type == "password" ? <i className={"fi fi-rr-eye"+(!passwordVisibility?"-crossed":"")+" input-icon left-[auto] right-4 cursor-pointer"} onClick={()=> setpasswordVisibility(currenvalue=>!currenvalue)}></i> : ""}
    </div>
  );
};

export default InputBox;
