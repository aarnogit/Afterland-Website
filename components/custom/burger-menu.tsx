import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const menu_data = [
  "HOME",
  "ABOUT",
  "FEATURES",
  "ROADMAP",
  "PARTNERS",
  "AIRDROP",
];

const BMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <Drawer open={open}>
      <DrawerTrigger onClick={() => setOpen(true)}>
        <Menu />
      </DrawerTrigger>
      <DrawerContent>
        <div className="flex flex-col justify-between items-center min-h-96 py-10 px-5">
          {menu_data.map((item, index) => (
            <Button
              href={`#${item.toLocaleLowerCase()}`}
              size="sm"
              variant="outline"
              onClick={() => setOpen(false)}
              className={`font-semibold uppercase text-xs sm:text-sm w-full`}
              key={`header-navigation--${item}`}
            >
              {item}
            </Button>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default BMenu;
