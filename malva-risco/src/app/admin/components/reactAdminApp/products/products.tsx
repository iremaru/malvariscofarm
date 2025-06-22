import {
  ArrayField,
  ChipField,
  Create,
  Datagrid,
  DateField,
  Edit,
  FunctionField,
  List,
  ReferenceField,
  ReferenceInput,
  SimpleForm,
  SingleFieldList,
  TextField,
  TextInput,
} from "react-admin";
import styles from "../../../page.module.scss";
import Image from "next/image";

export const ProductList = () => {
  return (
    <div className={styles.productList}>
      <h1>Productos Registrados</h1>
      <List>
        <Datagrid size='medium' rowClick={(id) => `/product/${id}`}>
          <FunctionField
            label='Imagen'
            render={(record) =>
              record.img_url ? (
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMG_BASE_URL}${record.img_url}`}
                  alt={`Imagen de ${record.variety_name}`}
                  width='100'
                  height='100'
                  style={{ objectFit: "cover" }}
                />
              ) : (
                "—"
              )
            }
          />
          <ReferenceField
            source='family_id'
            reference='product_family'
            label='Familia'
          />
          <TextField source='variety_name' label='Variedad' />
          <TextField source='sale_name' label='Nombre comercial' />
          <TextField source='description' label='Descripción' />
          <TextField
            source='preservation_instructions'
            label='Instrucciones de preservación'
          />
          <ArrayField source='categories' label='Categorías'>
            <SingleFieldList>
              <ChipField
                source='displayName'
                label='Nombre de la categoría'
                sx={{ maxWidth: "200px" }}
              />
            </SingleFieldList>
          </ArrayField>
          <DateField source='created_at' label='Fecha de creación' />
        </Datagrid>
      </List>
    </div>
  );
};

/* 
interface ProductCategory {
  id: string;
  displayName: string;
  name: string;
  parent_name?: string;
  parent_id?: string;
}

const ProductCategories = () => {
  const record = useRecordContext();
  const productId: Identifier | undefined = record?.id;

  const dataProvider = useDataProvider();
  const { data: allCategories } = useGetList("category");
  const { data: productsView } = useGetList("product_with_categories");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleCategory = (id: string) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((cid) => cid !== id) : [...prev, id]
    );
  };
  useEffect(() => {
    if (productId) {
      console.log("PRODUCTS VIEW: ", productsView);
      console.log("ALL CATEGORIES: ", allCategories);
      if (selectedCategories.length === 0 && productsView) {
        const product = productsView.find((p) => p.id === productId);
        if (product?.categories) {
          const categoryIds = product.categories.map(
            (cat: ProductCategory) => cat.id
          );
          setSelectedCategories(categoryIds);
        }
      }
    }
  }, [
    productsView,
    allCategories,
    productId,
    dataProvider,
    selectedCategories.length,
  ]);

  return allCategories?.map((cat) => (
    <FormControlLabel
      key={cat.id}
      control={
        <Checkbox
          checked={selectedCategories.includes(cat.id)}
          onChange={() => toggleCategory(cat.id)}
        />
      }
      label={cat.name}
    />
  ));
}; */

export const ProductEdit = () => {
  return (
    <div>
      <h1>Edit Product</h1>
      <Edit redirect={() => `/product_with_categories`}>
        <SimpleForm
        /* onSubmit={(data: FieldValues) => {
            console.log("Form submitted with data:", data);
          }} */
        >
          <ReferenceInput source='family_id' reference='product_family' />
          <TextInput source='variety_name' /> <TextInput source='sale_name' />
          <TextInput source='description' />
          <TextInput source='preservation_instructions' />
          <TextInput source='img_url' />
          {/* TODO: Handle categories selection
		  <ProductCategories /> 
		  */}
        </SimpleForm>
      </Edit>
    </div>
  );
};

export const ProductCreate = () => {
  return (
    <div>
      <h1>Create Product</h1>
      <Create redirect={() => `/product_with_categories`}>
        <SimpleForm
        /* onSubmit={(data: FieldValues) => {
            console.log("Form submitted with data:", data);
          }} */
        >
          <ReferenceInput source='family_id' reference='product_family' />
          <TextInput source='variety_name' /> <TextInput source='sale_name' />
          <TextInput source='description' />
          <TextInput source='preservation_instructions' />
          <TextInput source='img_url' />
        </SimpleForm>
      </Create>
    </div>
  );
};
