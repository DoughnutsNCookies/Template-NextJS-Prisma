import Image from "next/image";

export function IconGoogle() {
  return (
    <Image
      priority
      src="/components/google.svg"
      alt="Google Icon"
      height={24}
      width={24}
    />
  );
}
