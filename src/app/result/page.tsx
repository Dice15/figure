import Image from "next/image";
import Link from "next/link";

export default function Making() {
    return (
        <div style={{ height: "100vh", width: "100vw" }}>
            <Image src="/images/result.png" alt="page_guide" fill priority />
            <Link href={"./"} prefetch={true} style={{ position: "fixed", left: "3.5vw", zIndex: "500", height: "5vh", width: "3.5vw" }}>
                <button style={{ height: "100%", width: "100%", backgroundColor: "transparent", cursor: "pointer" }} />
            </Link>
            <Link href={"./subscribe"} prefetch={true} style={{ position: "fixed", left: "31.5vw", zIndex: "500", height: "5vh", width: "7vw" }}>
                <button style={{ height: "100%", width: "100%", backgroundColor: "transparent", cursor: "pointer" }} />
            </Link>
            <Link href={"./making"} prefetch={true} style={{ position: "fixed", left: "58vw", zIndex: "500", height: "5vh", width: "9vw" }}>
                <button style={{ height: "100%", width: "100%", backgroundColor: "transparent", cursor: "pointer" }} />
            </Link>
            <Link href={"./making"} prefetch={true} style={{ position: "fixed", top: "84.5vh", left: "30vw", zIndex: "500", height: "7.5vh", width: "11.5vw" }}>
                <button style={{ height: "100%", width: "100%", backgroundColor: "transparent", cursor: "pointer" }} />
            </Link>
            <Link href={"./credit"} prefetch={true} style={{ position: "fixed", top: "84.5vh", left: "63.5vw", zIndex: "500", height: "7.5vh", width: "9.5vw" }}>
                <button style={{ height: "100%", width: "100%", backgroundColor: "transparent", cursor: "pointer" }} />
            </Link>
        </div>
    );
}
