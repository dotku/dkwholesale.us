import "../../index.css";
import { ClientOnly } from "./client";

export function generateStaticParams() {
  return [{ slug: [""] }];
}

export default function Page({ params: { lang } }) {
  return (
    <>
      <ClientOnly />
      {lang}
    </>
  );
}
