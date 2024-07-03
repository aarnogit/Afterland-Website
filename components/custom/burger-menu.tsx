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
import { header_menu_data } from "@/lib/constants";

const BMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <Drawer open={open}>
      <DrawerTrigger onClick={() => setOpen(true)}>
        <Menu />
      </DrawerTrigger>
      <DrawerContent>
        <div className="flex flex-col justify-between items-center min-h-96 py-10 px-5">
          {header_menu_data.map((item) => (
            <Button
              href={`#${item.toLocaleLowerCase()}`}
              size="sm"
              onClick={() => setOpen(false)}
              className={`font-bold text-xs sm:text-sm`}
              key={`header-navigation--${item}`}
            >
              {item.toLocaleLowerCase()}
            </Button>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default BMenu;
