"use client";

import { useCallback, useState, ReactNode } from "react";
import { useAtomValue, useAtom } from "jotai";
import classname from "classnames";
import Button from "@mui/material/Button";

import { organsStorage } from "@/storage/organs-storage";

import { selectedOrgan } from "@/storage/utilitar-storage";

import style from "./style.module.scss";

export default function DynamicAtlas() {
  const organsData = useAtomValue(organsStorage);
  const [currentSelectedOrgan, setCurrentSelectedOrgan] =
    useAtom(selectedOrgan);

  const [isOpenInfoBlock, setIsOpenInfoBlock] = useState(false);

  const handleToggleIsOpen = useCallback(() => {
    setIsOpenInfoBlock((prev) => !prev);
  }, []);

  return (
    <div className={style.container}>
      <div>
        Left section
        <div>
          it's babylon container
          {organsData.map((organ) => (
            <Button
              key={organ.id + "selector"}
              onClick={() => setCurrentSelectedOrgan(organ.id)}
            >
              {organ.name}
            </Button>
          ))}
        </div>
        <div>Block with absolute position for switching layers</div>
      </div>
      <div
        className={classname(style.infoContainer, {
          [`${style.hidden}`]: isOpenInfoBlock,
        })}
      >
        <div>
          {organsData.find((organ) => organ.id === currentSelectedOrgan)
            ?.description ?? "organ not selected"}
        </div>
        <Button onClick={handleToggleIsOpen} className={style.openCloseToggler}>
          OPEN/CLOSE
        </Button>
      </div>
    </div>
  );
}
