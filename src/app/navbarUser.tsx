import {User} from "@nextui-org/react";
import {UserInfo} from "@/api/userInfo";

interface UserInfoProps {
  userInfo?: UserInfo
}

export default function NavbarUser({ userInfo }: UserInfoProps) {
  if (!userInfo) {
    return null;
  }

  return (
    <User
      name={userInfo.name}
      description={`Balance ${userInfo.balance}`}
    />
  )
}