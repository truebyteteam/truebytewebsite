import { Suspense } from "react";
import ProductsContent from "./ProductsContent";

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <main className="pt-24 bg-green-50 min-h-screen">
          <div className="max-w-7xl mx-auto px-6 py-16 text-center">
            <p className="text-green-700 text-lg">
              Loading products...
            </p>
          </div>
        </main>
      }
    >
      <ProductsContent />
    </Suspense>
  );
}