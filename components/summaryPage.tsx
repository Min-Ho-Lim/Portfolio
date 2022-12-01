import Image from "next/image";
import styles from "../styles/SummaryPage.module.css";
import inputStyles from "../styles/InputField.module.css";
import ReactTooltip from "react-tooltip";
import IconBar from "./iconBar";
import { Dispatch, SetStateAction, useState } from "react";
import emailjs from "emailjs-com";
import Popup from "reactjs-popup";

const isValidEmail = (email: string) => {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
};

const onSubmit = (email: string, title: string, message: string) => {
  console.log(email, title, message);
  if (title && email && message) {
    const serviceId = process.env.SERVICEID;
    const templateId = process.env.TEMPLATEID;
    const userId = process.env.USERID;
    const templateParams = {
      title,
      email,
      message,
    };

    console.log(serviceId, templateId, templateParams, userId);

    const result = emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        return true;
      })
      .then((error) => {
        return false;
      });
    return result;
  }
  return false;
};

const InputField = ({
  label,
  value,
  onChange,
  placeholder,
  isInput,
}: {
  label: string;
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
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
            onChange={(e) => onChange(e.target.value)}
          ></input>
        ) : (
          <textarea
            id={label}
            className={`${inputStyles.field__input} ${styles.contactTextArea}`}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
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
  const [sentEmail, setSentEmail] = useState(false);
  const closeModal = () => setSentEmail(false);

  const resetInputFields = () => {
    setEmail("");
    setTitle("");
    setMessage("");
  };

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
              label="Your Email or Contact"
              value={email}
              onChange={setEmail}
              placeholder="eg. minholim@outlook.com"
              isInput={true}
            />
            <InputField
              label="Title"
              value={title}
              onChange={setTitle}
              placeholder="eg. What an Awesome Website!"
              isInput={true}
            />
            <InputField
              label="Context"
              value={message}
              onChange={setMessage}
              placeholder="eg. Do you want to build a snowman?"
              isInput={false}
            />
          </div>

          <span
            className={styles.contactSendButton}
            onClick={() => {
              const submit = onSubmit(email, title, message);
              if (submit) {
                resetInputFields();
                setSentEmail(true);
              } else {
                setSentEmail(false);
              }
            }}
          >
            <Image
              src="/sent-icon.svg"
              alt="Sent Icon"
              width={25}
              height={25}
              className={styles.contactSendImage}
            />
            <a className={styles.contactSendButtonText}>Send</a>
          </span>
        </div>
        <Popup open={sentEmail} closeOnDocumentClick modal onClose={closeModal}>
          <div className={styles.modal}>
            <button className={styles.close} onClick={closeModal}>
              &times;
            </button>
            <div className={styles.header}> ✅ Success </div>
            <div className={styles.content}>
              Thank you for sending me an email. <br />I will get back to you as
              soon as possible 😊
            </div>
            <div className={styles.actions}>
              <span className={styles.closebutton} onClick={closeModal}>
                close modal
              </span>
            </div>
          </div>
        </Popup>
      </div>
    </div>
  );
}
