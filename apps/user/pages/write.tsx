import { useRouter } from "next/router";
import React, { useRef } from "react";

const Write = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const router = useRouter();

  const writeRequest = () => {
    console.log(fileRef.current?.files);
    console.log(titleRef.current?.value);
    console.log(contentRef.current?.value);

    router.push("/");
  };

  return (
    <div>
      <input type="file" name="" id="" ref={fileRef} />
      <input type="text" name="" id="" ref={titleRef} />
      <textarea name="" id="" cols={30} rows={10} ref={contentRef}></textarea>
      <button onClick={writeRequest}>글쓰기</button>
    </div>
  );
};

export default Write;
