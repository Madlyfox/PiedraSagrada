"use client";
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import Content from "./content";

export default function Display({ items }: { items: any[] }) {
  const [index, setIndex] = useState<number>(0);
  const [largeWidth, setLargeWidth] = useState<number>(0);

  const largeRef = useRef<any>(null);

  useEffect(() => {
    if (largeRef.current) {
      const { width }: { width: number } =
        largeRef.current.getBoundingClientRect();

      setLargeWidth(width);
    }
  }, [largeRef]);

  useEffect(() => {
    console.log(largeWidth);
  }, [largeWidth]);

  function handleClickLeft() {
    index <= 0 ? setIndex(items.length - 1) : setIndex(index - 1);
  }

  function handleClickRight() {
    index >= items.length - 1 ? setIndex(0) : setIndex(index + 1);
  }

  return (
    <section>
      <div className="column main">
        <div className="column large" ref={largeRef}>
          <div style={{ translate: -index * largeWidth + "px" }}>
            {items?.map((item: any) => (
              <div className="container" style={{ width: largeWidth + "px" }}>
                <img src="./untitled.png" alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="column">
          <Content {...items[index]} />
          <div className="controls">
            <button className="control left" onClick={handleClickLeft}>
              <ChevronLeftCircle strokeWidth={0.5} />
            </button>
            <button className="control right" onClick={handleClickRight}>
              <ChevronRightCircle strokeWidth={0.5} />
            </button>
          </div>
          <div className="column" style={{ overflow: "hidden" }}>
            <div
              className="column preview"
              style={{ translate: -(192 + 16) * index + "px" }}
            >
              {items?.map((item: string[]) => (
                <div className="container thumbnail">
                  <img src="./untitled.png" alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
