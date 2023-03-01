import React from "react";
import s from './loader.module.scss'


const Loader = () => {
  return (
    <div>
      <div class={s.spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
