import React from "react";
import { Box } from "@mui/material";
import {
  Admin,
  EditGuesser,
  ListGuesser,
  radiantLightTheme,
  Resource,
} from "react-admin";
import supabaseDataProvider from "@/lib/supabaseDataProvider";
import { ProductCreate, ProductEdit, ProductList } from "./products/products";
import {
  ProductFamilyCreate,
  ProductFamilyEdit,
  ProductFamilyList,
} from "./productFamily/productFamily";
import { BatchCreate, BatchEdit, BatchList } from "./batch/batch";
import { CategoryList } from "./category/category";
import CategoryIcon from "@mui/icons-material/Category";
import AppleIcon from "@mui/icons-material/Apple";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import InboxIcon from "@mui/icons-material/Inbox";
import EuroSymbolIcon from "@mui/icons-material/EuroSymbol";
import InventoryIcon from "@mui/icons-material/Inventory";
import styles from "./reactAdminApp.module.scss";
import { PriceCreate, PriceEdit, PriceList } from "./price/price";

const ReactAdminApp = () => {
  return (
    <Box className={styles.adminPanel}>
      <Admin dataProvider={supabaseDataProvider} theme={radiantLightTheme}>
        <Resource
          name='product_with_categories'
          options={{ label: "Productos" }}
          icon={AppleIcon}
          recordRepresentation={"variety_name"}
          list={ProductList}
        />
        <Resource
          name='product'
          recordRepresentation={"sale_name"}
          create={ProductCreate}
          edit={ProductEdit}
          options={{ label: " " }}
        />
        <Resource
          name='product_family'
          icon={Diversity2Icon}
          recordRepresentation={"name"}
          list={ProductFamilyList}
          edit={ProductFamilyEdit}
          create={ProductFamilyCreate}
          options={{ label: "Familia de productos" }}
        />
        <Resource
          name='category'
          icon={CategoryIcon}
          recordRepresentation={"name"}
          list={CategoryList}
          edit={EditGuesser}
          //create={ProductCreate}
          options={{ label: "Categoría de productos" }}
        />
        <Resource
          name='batch'
          icon={InboxIcon}
          recordRepresentation={"name"}
          list={BatchList}
          edit={BatchEdit}
          create={BatchCreate}
          options={{ label: "Remesas" }}
        />
        <Resource
          name='price'
          icon={EuroSymbolIcon}
          recordRepresentation={"pvp_eur"}
          list={PriceList}
          edit={PriceEdit}
          create={PriceCreate}
          options={{ label: "Precios" }}
        />
        <Resource
          name='product_on_sale'
          icon={InventoryIcon}
          recordRepresentation={"sale_name"}
          list={ListGuesser}
          edit={EditGuesser}
          create={EditGuesser}
          options={{ label: "Productos a la venta" }}
        />
      </Admin>
    </Box>
  );
};

export default ReactAdminApp;
