"use client"
import Image from "next/image"
import { useSearchParams } from "next/navigation";

export default function Home() {
  const params = useSearchParams()
  return (
    <div>Hey this is out page and blog is {params.get('blog')} and utm source is {params.get('utm_source')}</div>
  );
}
