import { useEffect } from "react";

export default function TiktokShop() {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "https://vt.tiktok.com/ZTNsJjVJ6/?page=TikTokShop";
    });
    console.log("https://vt.tiktok.com/ZTNsJjVJ6/?page=TikTokShop");
  }, []);
  return <div>Loading 2...</div>;
}
