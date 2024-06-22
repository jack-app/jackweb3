import Color from "color-thief-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ProductionDetailProps as ProductionProps } from "@/ui/Production";
import { Text } from "@/utils/renderText/renderText";
import styles from "./index.module.scss";
import { color_change } from "./logics";

type Props = {
  product: ProductionProps;
};

export const ProductDetailItem: React.FC<Props> = ({ product }) => {
  const targetProps = { target: "_blank", rel: "noopener noreferrer" };

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
                          <Text richText={product.description} />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.context_right}>
                    <div className={styles.decoration_number}>1 2 3 4 5 6 7 8 9 10 11</div>
                    <div className={styles.context_text_right}>
                      <div className={styles.detail}>
                        {Array.isArray(product.release_date) && (
                          <div className={styles.release}>
                            <Text richText={product.release_date} />
                          </div>
                        )}
                        {Array.isArray(product.detail) && (
                          <div className={styles.main_description}>
                            <Text richText={product.detail} />
                          </div>
                        )}
                      </div>
                      <div className={styles.link_context}>
                        {product.web_href && (
                          <Link href={product.web_href} {...targetProps}>
                            <div className={styles.link}>web site</div>
                          </Link>
                        )}
                        {product.app_href && (
                          <Link href={product.app_href} {...targetProps}>
                            <div className={styles.link}>app store</div>
                          </Link>
                        )}
                        {product.google_href && (
                          <Link href={product.google_href} {...targetProps}>
                            <div className={styles.link}>play store</div>
                          </Link>
                        )}
                        {product.git_href && (
                          <Link href={product.git_href} {...targetProps}>
                            <div className={styles.git}>
                              <div>void let&#0039;s see &#40;&#41; &#0061;&#0062;</div>
                              <pre>&#009;&#009;</pre>
                              <div className={styles.link}>github</div>
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
