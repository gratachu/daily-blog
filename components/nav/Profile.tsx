import {useUser} from "@/lib/store/user";
import Image from "next/image";

export default function Profile() {
  const user = useUser((state) => state.user)

  return (
    <Image
      src={user?.user_metadata.avatar_url}
      alt={user?.user_metadata.user_name}
      width={50}
      height={50}
    />
  )
}
