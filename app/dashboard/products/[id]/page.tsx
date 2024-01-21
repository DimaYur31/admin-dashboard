import { updateProduct } from "@/app/lib/actions";
import { fetchOneProduct } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";
type ParamsType = {
	id: string
}
const SingleProductPage = async ({params}:{params:ParamsType}) => {
	const {id} = params;
	const {product} = await fetchOneProduct(id);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={product.img || "/noavatar.png"} alt="" fill />
        </div>
        {product.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct}>
          <input type="hidden" name="id" value={id}/>
          <label>Title</label>
          <input type="text" name="title" placeholder={product.title}/>
          <label>Price</label>
          <input type="number" name="price" placeholder={product.price}/>
          <label>Stock</label>
          <input type="number" name="stock" placeholder={product.stock}/>
          <label>Color</label>
          <input type="text" name="color" placeholder={product.color}/>
          <label>Size</label>
          <textarea name="size" placeholder={product.size}/>
          <label>Cat</label>
          <select name="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea name="desc" placeholder={product.desk}></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;