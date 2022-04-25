import styles from "./Contacts.module.css";
import {channelActionCreator} from "../redux/action-creators/channelActionCreators"
import { useEffect } from "react";

function ContactSide({ id, name, setChannel, channel }: any) {
  const onClick = (e: any) => {
    console.log(e.target.textContent);
    setChannel(e.target.textContent);
  };

  useEffect(()=>{
      channelActionCreator(channel);
  })


  return (
    <button onClick={onClick} className={styles.contact_btn}>
      <div className={styles.contacts}>
        {channel === name ? (
          <div className={styles.name_active}>{name}</div>
        ) : (
          <div className={styles.name}>{name}</div>
        )}
      </div>
    </button>
  );
}

export default ContactSide;
