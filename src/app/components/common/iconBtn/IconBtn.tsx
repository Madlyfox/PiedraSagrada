import React from "react";
import IconBtn_module from "./iconBtn.module.css";
import "material-icons/iconfont/material-icons.css";
import Link from "next/link";
import Image from "next/image";
Link;
Image;

function IconBtn({ icon }: { icon: string }) {
  return (
    <div className={IconBtn_module.link}>
      <Link href="/">
        <span className="material-icons-outlined"> {icon}</span>
      </Link>
    </div>
  );
}

export default IconBtn;
