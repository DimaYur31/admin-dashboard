import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = async () => {

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
       Jon Doe
      </div>
      <div className={styles.formContainer}>
        <form>
          {/* <input type="hidden" name="id" value="Jon Doe"/> */}
          <label>Username</label>
          <input type="text" name="username" placeholder="Jon Doe"/>
          <label>Email</label>
          <input type="email" name="email" placeholder="John@mail.ru"/>
          <label>Password</label>
          <input type="password" name="password"/>
          <label>Phone</label>
          <input type="text" name="phone" placeholder="+122334"/>
          <label>Address</label>
          <textarea name="address" placeholder="New York" />
          <label>Is Admin?</label>
          <select name="isAdmin">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;