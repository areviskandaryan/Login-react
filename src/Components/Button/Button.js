import React from "react";
import ReactDOM from "react-dom";
import styles from "./Button.module.css"

export default function Button({valueName, valueSurName, onHandleDataAdd}) {
    return (
        <div className={styles.registerForm}>
            <button className={styles.btn} disabled={!(valueName.length > 4 && valueSurName.length > 4)}
                    onClick={onHandleDataAdd}>Login
            </button>
        </div>
    )
}