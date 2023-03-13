import Image from "next/image";

export const Logo = () => {
  return (
    <div>
      <Image src={"/img/sun. svg"} width={25} height={25} alt={"logo"} />
      <span>Type Matte</span>
    </div>
  );
};
 