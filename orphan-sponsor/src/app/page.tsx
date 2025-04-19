import Image from "next/image";
 import styles from "./page.module.css";
import MediaControlCard from "@/components/cardserch";
import Postunderserch from "@/components/postserch";
import Inputserch from "@/components/search";

export default function Home() {
  return (
    <>
    <MediaControlCard/>
    <Inputserch/>
    <Postunderserch />
    </>
  );
}
