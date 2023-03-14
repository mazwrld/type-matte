import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex cursor-pointer select-none items-center">
      <Image
        src={"/img/sun.svg"}
        width={25}
        height={25}
        alt={"type-matte-logo"}
      />
      <span className={"mr-8 ml-2 text-xl font-bold tracking-wide"}>
        type-matte
      </span>
    </div>
  );
};
