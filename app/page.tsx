import ProductCard from "./components/product-card";
import Link from "next/link";

export default function Home() {
    return (
        <main>
            <h1>hello world!</h1>
            <Link href="/users">Users</Link>
            <ProductCard />
        </main>
    );
}