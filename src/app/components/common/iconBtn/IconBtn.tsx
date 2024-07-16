import React from "react";
import IconBtn_module from "./iconBtn.module.css";
import "material-icons/iconfont/material-icons.css";
import Link from "next/link";
import Image from "next/image";
Link;
Image;

function Icon({ icon }: { icon: string }) {
  return <span className="material-icons-outlined"> {icon}</span>;
}

export default Icon;
