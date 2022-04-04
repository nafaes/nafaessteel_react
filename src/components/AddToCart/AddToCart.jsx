import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";

import addTocartEngDesk from "../../assets/scss/addToCart.module.scss";
import { addToCartMobEng } from "../../assets/jss/viewStyles/addToCart/english";
import BreadcrumbsNavigation from "./BreadcrumbsNavigation";
import AddToCartForm from "./AddToCartForm";
import ProductSummary from "./ProductSummary";
import LoaderImg from "../LoaderImg";

const AddToCart = (props) => {
  const {
    item,
    addToCartForm,
    formChangeHandler,
    historyItems,
    breadcrumbNavigation,
    addToCartHandler,
    itemSummary,
    loading
  } = props;

  const englishMobileStyles = addToCartMobEng();
  let classesExternal = addTocartEngDesk;
  let classes = englishMobileStyles;
  

  return (
    <Fragment>
      <div className={clsx(classes.addToCartContainer, classesExternal.addToCartContainer)}>
      <BreadcrumbsNavigation
        historyItems={historyItems}
        breadcrumbNavigation={breadcrumbNavigation}
        loading={loading}
      />
      <div className={clsx(classes.ContainerForm, classesExternal.ContainerForm)}>
        <Grid container justifyContent="center">
          <Grid item lg={12} md={12} sm={12} xs={12} >
            <Grid item container className={clsx(classes.flexDirect, classesExternal.flexDirect)}>
              <Grid item lg={4} md={4} sm={4} xs={12} style={{ display:"flex" ,alignItems: "center" ,textAlign:"center"}}>
                <Grid item >
                  {item?.image && (
                    <img alt=""
                      src={require(`../../assets/img/${item?.image}`).default}
                      className={clsx(classes.addToCartImg,classesExternal.addToCartImg)}
                    />
                  )}
                </Grid>            
              </Grid>
              <Grid item lg={8} md={8} sm={8} xs={12}>
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
      </div>
     
      </div>
      {loading === true ? <LoaderImg /> : itemSummary ? <ProductSummary itemSummary={itemSummary} /> : null}
    </Fragment>
    
  );
};

export default React.memo(AddToCart);



