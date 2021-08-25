import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";

import addTocartEngDesk from "../../assets/scss/addToCart.module.scss";
import { addToCartMobEng } from "../../assets/jss/viewStyles/addToCart/english";
// import brickImg from "../../assets/img/cement.jpg";
import BreadcrumbsNavigation from "./BreadcrumbsNavigation";
import AddToCartForm from "./AddToCartForm";
import ProductSummary from "./ProductSummary";

const AddToCart = (props) => {
  const {
    item,
    addToCartForm,
    formChangeHandler,
    historyItems,
    breadcrumbNavigation,
    addToCartHandler,
    itemSummary,
  } = props;

  const englishMobileStyles = addToCartMobEng();
  let classesExternal = addTocartEngDesk;
  let classes = englishMobileStyles;

  return (
    <Fragment>
      <div
        className={clsx(classes.ContainerForm, classesExternal.ContainerForm)}
      >
        <Grid container justifyContent="center">
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Grid item container>
              <Grid
                item
                lg={5}
                md={5}
                sm={5}
                xs={12}
                style={{ display: "flex", alignItems: "center" }}
              >
                {item?.image && (
                  <img
                    alt=""
                    // src={brickImg}
                    src={require(`../../assets/img/${item?.image}`).default}
                    style={{ width: "100%", borderRadius: ".75em" }}
                  />
                )}
              </Grid>

              <Grid item lg={7} md={7} sm={7} xs={12}>
                <BreadcrumbsNavigation
                  historyItems={historyItems}
                  breadcrumbNavigation={breadcrumbNavigation}
                />

                <AddToCartForm
                  item={item}
                  addToCartForm={addToCartForm}
                  formChangeHandler={formChangeHandler}
                  addToCartHandler={addToCartHandler}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {itemSummary ? <ProductSummary itemSummary={itemSummary} /> : null}
      </div>
    </Fragment>
  );
};

export default React.memo(AddToCart);
