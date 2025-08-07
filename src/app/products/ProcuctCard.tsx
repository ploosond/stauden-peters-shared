// ProductCard component

import Link from "next/link";

// Helper function for color display (you can expand this with actual color codes)
// const getColorStyle = (colorName: string): React.CSSProperties => {
//   const colors: Record<string, string> = {
//     Green: "#4CAF50",
//     "Blue-Green": "#2196F3",
//     Yellow: "#FFEB3B",
//     Red: "#F44336",
//     Purple: "#9C27B0",
//     Variegated: "linear-gradient(45deg, #4CAF50 50%, #FFEB3B 50%)",
//   };

//   const value = colors[colorName];
//   return value.startsWith("linear-gradient")
//     ? { backgroundImage: value }
//     : { backgroundColor: value || "#000" };
// };

type Product = {
  name: string;
  subName: string;
  image: string;
  category: string;
  size: string;
  light: string;
  color: string;
  id: string;
};

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow max-w-[300px] w-full">
        <div className="relative h-72 rounded-t-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-4">
          <span className="text-sm bg-blue-100 px-1.5 py-1 rounded-lg">
            {product.category}
          </span>
          <h3 className="font-semibold mt-2 mb-1 text-priColor">
            {product.name}
          </h3>
          <p className="text-muted-foreground text-sm">{product.subName}</p>
          {/* <div className="flex flex-col text-sm mb-2 gap-1">
            <div className="flex items-center gap-4 mt-1">
              <div className="flex gap-2">
                <span className="text-muted-foreground">Size:</span>
                <span className="text-muted-foreground">{product.size}</span>
              </div>
              <div className="border-r h-3" />
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">Light:</span>
                <span className="text-muted-foreground">{product.light}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Color:</span>
              <span
                className="w-4 h-4 rounded-full inline-block border"
                style={getColorStyle(product.color)}
              />
              <span className="text-muted-foreground">{product.color}</span>
            </div>
          </div> */}
        </div>
      </div>
    </Link>
  );
};
