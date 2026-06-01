import { getSEO } from "@/lib/seo";
import { ProductsIntro } from "@/components/acebuilder";
import { FAQ } from "@/components/faq";
import { Products } from "@/components/products";

export const metadata = getSEO({
  title: "Products",
  description:
    "Products and platforms built by VayuLabs: sovereign AI, health intelligence, and full-stack delivery.",
  path: "/products",
});

const ProductsPage = () => {
  return (
    <div>
      <ProductsIntro />
      <Products />
      <FAQ />
    </div>
  )
}

export default ProductsPage