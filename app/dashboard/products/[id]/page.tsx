import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        iphone
      </div>
      <div className={styles.formContainer}>
        <form>
          <label>Title</label>
          <input type="text" name="title" placeholder="John Doe"/>
          <label>Price</label>
          <input type="number" name="price" placeholder="John@mqil.ru"/>
          <label>Stock</label>
          <input type="number" name="stock" placeholder="23"/>
          <label>Color</label>
          <input type="text" name="color" placeholder="red"/>
          <label>Size</label>
          <textarea name="size" placeholder="New York"/>
          <label>Cat</label>
          <select name="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea name="desc" placeholder="description"></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;