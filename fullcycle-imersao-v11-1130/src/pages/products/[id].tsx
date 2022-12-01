import { useRouter } from "next/router";

export const ProductHomePage = () => {
  const router = useRouter()
  return (
    <div>
      <h1>Mostrando prod. no. {router.query.id}</h1>
    </div>
  );
};

export default ProductHomePage;
