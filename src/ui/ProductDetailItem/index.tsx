import Color from "color-thief-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Text } from "@/features/BlogArticleBodies/hooks/renderText";
import { color_change } from "@/features/ProductsCarousel/hooks";
import { ProductionDetailProps as ProductionProps } from "@/ui/Production";
import styles from "./index.module.scss";

type Props = {
  product: ProductionProps;
};

export const ProductDetailItem: React.FC<Props> = ({ product }) => {
  return (
    <>
      <Color key={product.id} src={product.image} format="rgbArray">
        {({ data }) => {
          if (Array.isArray(data)) {
            return (
              <div className={`${styles.wrapper}`} style={{ backgroundColor: color_change(data) }}>
                <div
                  className={styles.head_line}
                  style={{ backgroundColor: color_change(data) }}
                ></div>
                <div className={styles.context}>
                  <div className={styles.context_left}>
                    {/* <div className={styles.number}>{number}</div> */}
                    <div className={styles.square}></div>
                    <Image
                      className={styles.product_image}
                      src={product.image}
                      alt=""
                      width={100}
                      height={100}
                    />

                    <div className={styles.title}>{product.title}</div>

                    <div className={styles.sub_description}>
                      {Array.isArray(product.description) && (
                        <div className={styles.sub_description}>
                          <Text text={product.description} />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.context_right}>
                    <div className={styles.decoration_number}>1 2 3 4 5 6 7 8 9 10 11</div>
                    <div className={styles.context_text_right}>
                      <div className={styles.detail}>
                        {" "}
                        {Array.isArray(product.release_date) && (
                          <div className={styles.release}>
                            <Text text={product.release_date} />
                          </div>
                        )}
                        {Array.isArray(product.detail) && (
                          <div className={styles.main_description}>
                            <Text text={product.detail} />
                          </div>
                        )}
                        {product.web_href && (
                          <Link href={product.web_href}>
                            <div className={styles.link}>webllinkはこちら</div>
                          </Link>
                        )}
                        {product.app_href && (
                          <Link href={product.app_href}>
                            <div className={styles.link}>appllinkはこちら</div>
                          </Link>
                        )}
                        {product.google_href && (
                          <Link href={product.google_href}>
                            <div className={styles.link}>googlelinkはこちら</div>
                          </Link>
                        )}
                        {product.git_href && (
                          <Link href={product.git_href}>
                            <div className={styles.git}>
                              void let&#0039;s see &#40;&#41; &#0061;&#0062; github
                            </div>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        }}
      </Color>
    </>
  );
};
