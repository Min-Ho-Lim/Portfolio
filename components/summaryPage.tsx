import Image from "next/image";
import styles from "../styles/SummaryPage.module.css";
import inputStyles from "../styles/InputField.module.css";
import ReactTooltip from "react-tooltip";
import IconBar from "./iconBar";
import { useState } from "react";

const InputField = ({
  label,
  value,
  onChange,
  placeholder,
  isInput,
}: {
  label: string;
  value: string;
  onChange: undefined;
  placeholder: string;
  isInput: boolean;
}) => {
  return (
    <div className={inputStyles.field}>
      <div className={inputStyles.field_v2}>
        <label htmlFor="first-name" className={inputStyles["ha-screen-reader"]}>
          {label}
        </label>
        {isInput ? (
          <input
            id={label}
            className={`${inputStyles.field__input} ${styles.contactInputBox}`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          ></input>
        ) : (
          <textarea
            id={label}
            // className={inputStyles.field__input}
            className={`${inputStyles.field__input} ${styles.contactTextArea}`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            // style={`${inputStyles.contactTextArea}`}
          ></textarea>
        )}
        <span className={inputStyles["field__label-wrap"]} aria-hidden="true">
          <span className={inputStyles.field__label}>{label}</span>
        </span>
      </div>
    </div>
  );
};

export default function SummaryPage() {
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className={styles.SummaryPageContainer}>
      <div className={styles.summaryContainer}>
        <div className={styles.summaryTextContainer}>
          <a className={styles.summaryTopText}>Summary</a>
          <a className={styles.summaryMiddleText}>Do you wish to contact me?</a>
          <a className={styles.summaryBottomText}>
            👍 Thanks for visiting my website.
            <br />
            If you wish to contact me, <br />
            Please contact me via 📧email or 🔗LinkedIn or you may use the
            contact form here
            <br />
            🙏 I am looking forward to hearing from you soon ❤️
          </a>
        </div>
        <IconBar />
      </div>

      <div className={styles.contactContainer}>
        <div className={styles.contactBox}>
          <div className={styles.contactTitle}>Contact Me</div>
          <div className={styles.contactSubTitle}>
            Fill out the form to send me an email and I will get back to you as
            soon as possible.
          </div>
          {/* create contactInput*/}

          <div className={styles.contactInputContainer}>
            <InputField
              label="Your Email"
              value={email}
              onChange={(e) => {
                setEmail(e.value);
              }}
              placeholder="eg. minholim@outlook.com"
              isInput={true}
            />{" "}
            <InputField
              label="Title"
              value={title}
              onChange={(e) => {
                setTitle(e.value);
              }}
              placeholder="eg. What an Awesome Website!"
              isInput={true}
            />
            <InputField
              label="Context"
              value={message}
              onChange={(e) => {
                setMessage(e.value);
              }}
              placeholder="eg. Do you want to build a snowman?"
              isInput={false}
            />
          </div>

          <button className={styles.contactSendButton} data-tip="Send an Email">
            <Image
              src="/sent-icon.svg"
              alt="Sent Icon"
              width={25}
              height={25}
              className={styles.contactSendImage}
            />
            <a className={styles.contactSendButtonText}>Send</a>
          </button>
        </div>
      </div>
    </div>
  );
}
