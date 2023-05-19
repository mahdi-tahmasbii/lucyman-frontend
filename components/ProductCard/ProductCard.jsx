import React from "react";

const ProductCard = ({ products }) => {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
            {products.map(({ id, imageSrc, imageAlt, name, color, price }) => (
              <div key={id}>
                <div className="relative duration-500 cursor-pointer">
                  <div className="relative h-72 w-full overflow-hidden rounded-lg">
                    <img
                      src={imageSrc}
                      alt={imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="relative mt-4">
                    <h3 className="text-sm font-medium text-gray-900">
                      {name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{color}</p>
                  </div>
                  <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    />
                    <p className="relative text-lg font-semibold text-white">
                      {price}
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href={"/pages/ProductPage/dsa4"}
                    className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-200"
                  >
                    اضافه کردن به سبد خرید
                    <span className="sr-only">, {name}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
