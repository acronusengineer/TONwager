"use client";
// import BottomNav from '@/app/ui/dashboard/sidenav';
// import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { useState } from "react";
// import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const navlist = [
    {
      source: "mdi:home",
      alt: "homeIcon",
      description: "Home",
      toroute: "/dashboard/home",
    },
    {
      source: "mdi:note",
      alt: "predictionIcon",
      description: "Predictions",
      toroute: "/dashboard/predictions",
    },
    {
      source: "mdi:account",
      alt: "profileIcon",
      description: "Profile",
      toroute: "/dashboard/profile",
    },
  ];
  const router = useRouter();

  const [selected, setSelected] = useState<number>(0);
  return (
    <div className="w-full flex h-screen flex-col">
      <div className="w-full fixed top-0 bg-[#1D2134] h-16 z-30 px-4 flex flex-row justify-between items-center">
        <div className="text-2xl font-bold">
          <span className="text-[#168FE3] font-extrabold">TON</span>
          <span className="text-white">Wager</span>
        </div>
        <Dropdown>
          <DropdownTrigger>
            <div className="w-48 flex flex-row items-center justify-between gap-2 cursor-pointer border-white border-1 rounded-md p-2">
              <Avatar
                isBordered
                radius="full"
                color="primary"
                src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
                className="w-8 h-8 rounded-full"
              />
              {/* Use selectedNetwork */}
              <div className="text-white text-[10px] font-normal flex flex-wrap">
                0x197AF13c3...34343
              </div>
              <Icon icon="mdi:chevron-down" className="text-xl text-white" />
            </div>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem
              //   key={chain?.chainId}
              //   value={}
              //   textValue={chain?.name}
              onClick={() => {
                // setCurrentChain(chain);
              }}
            >
              <div className="w-48 flex flex-row items-center justify-between gap-2 cursor-pointer border-white border-1 rounded-md p-2">
                <Avatar
                  isBordered
                  radius="full"
                  color="primary"
                  src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
                  className="w-8 h-8 rounded-full"
                />
                {/* Use selectedNetwork */}
                <div className="text-white text-[10px] font-normal flex flex-wrap">
                  0x197AF13c3...34343
                </div>
                <Icon icon="mdi:chevron-down" className="text-xl text-white" />
              </div>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div className="w-full flex">{children}</div>
      <div className="w-full fixed bottom-0 bg-[#1D2134] h-20 z-30 flex flex-row justify-around items-center">
        {navlist.map((list, index) => (
          <Button
            key={index}
            className={`w-16 h-16 pt-1 flex flex-col justify-center items-center gap-0 ${
              selected === index ? `border-[#497FB8] border-t-2` : `border-none`
            }`}
            onClick={() => {
              setSelected(index);
              router.push(list.toroute);
            }}
          >
            <Icon icon={list.source} className="w-12 h-12 text-[#497FB8]" />
            <div className="text-small text-[#497FB8]">{list.description}</div>
          </Button>
        ))}
      </div>
    </div>
  );
}
